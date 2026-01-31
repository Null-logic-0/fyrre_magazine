module Authorization
  extend ActiveSupport::Concern

  included do
  end

  private

  def authorize_admin_or_author!
    unless current_user&.admin? || current_user&.author?

      redirect_to admin_dashboard_path, alert: "You are not authorized to access this page."
    end
  end

  def authorize_admin!
    unless current_user&.admin?
      redirect_to admin_users_path, alert: "You are not allowed to access"
    end
  end

  def authorize_ownership!(resource)
    return if current_user&.admin?
    return if current_user&.author? && resource.user_id == current_user.id

    redirect_to admin_dashboard_path, alert: "You are not authorized to perform this action."
  end
end
