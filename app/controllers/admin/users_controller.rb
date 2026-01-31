class Admin::UsersController < InertiaController
  before_action :authorize_admin!
  before_action :set_user, only: %i[update ]

  def index
    users_scope = User.where.not(id: current_user.id).order(created_at: :desc)

    if params[:q].present?
      query = params[:q].strip
      users_scope = users_scope.where(
        "name ILIKE :q OR email_address ILIKE :q",
        q: "%#{ActiveRecord::Base.sanitize_sql_like(query)}%"
      )
    end
    @pagy, @users = pagy(users_scope, items: 10)

    render inertia: "admin/users/index", props: {
      users: @users,
      pagination: pagination_meta(@pagy),
      search: params[:q] || ""
    }
  end

  def update
    if @user.update(user_params)
      redirect_to admin_users_path, notice: "Role was successfully updated."
    else
      Rails.logger.debug @user.errors.full_messages

      redirect_to admin_users_path, alert: "Something went wrong."
    end
  end

  private

  def user_params
    params.require(:user).permit(:role)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
