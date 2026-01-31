class SessionsController < InertiaController
  allow_unauthenticated_access only: %i[ new create ]
  rate_limit to: 10, within: 3.minutes, only: :create, with: -> { redirect_to login_path, alert: "Try again later." }

  def new
    render inertia: "admin/auth/login"
  end

  def create
    user = User.authenticate_by(session_params)

    unless user
      redirect_to login_path, alert: "Email or password is incorrect."
      return
    end

    if user.user?
      redirect_to login_path, alert: "Only admins and authors are allowed to sign in!"
      return
    end

    start_new_session_for(user)
    redirect_to admin_dashboard_path, notice: "Welcome back #{user.name}!"
  end

  def destroy
    terminate_session
    redirect_to login_path, status: :see_other
  end

  private

  def session_params
    params.permit(:email_address, :password)
  end
end
