class EmailSubscriptionController < ApplicationController
  def create
    @email_subscription = EmailSubscription.new(email_params)

    if @email_subscription.save
      redirect_to root_path, notice: "You successfully subscribed weekly newsletter"
    else
      redirect_to root_path, alert: @email_subscription.errors.full_messages
    end
  end

  private

  def email_params
    params.require(:email_subscription).permit(:email)
  end
end
