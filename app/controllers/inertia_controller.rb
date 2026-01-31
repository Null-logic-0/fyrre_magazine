# frozen_string_literal: true

class InertiaController < ApplicationController
  # Share data with all Inertia responses
  # see https://inertia-rails.dev/guide/shared-data

  inertia_share do
    {
      flash: {
        notice: flash[:notice],
        alert: flash[:alert]
      },
      user: current_user_data
    } if authenticated?
  end

  private

  def current_user
    Current.session&.user
  end

  def current_user_data
    return nil unless current_user

    {
      id: current_user.id,
      name: current_user.name,
      email: current_user.email_address
    }
  end

  helper_method :current_user
end
