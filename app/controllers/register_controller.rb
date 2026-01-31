class RegisterController < ApplicationController
  allow_unauthenticated_access

  def new
    render inertia: "admin/auth/signup"
  end

  def create
    @user = User.new(register_params)
    if @user.save
      redirect_to login_path, notice: "Approval sent. Please wait for your account to be approved."
    else
      render inertia: "admin/auth/signup", props: {
        errors: @user.errors.messages.transform_values(&:first)
      }
    end
  end

  private

  def register_params
    params.permit(:email_address, :name, :password)
  end
end
