require "test_helper"

class EmailSubscriptionControllerTest < ActionDispatch::IntegrationTest
  test "should create email subscription with valid email" do
    assert_difference("EmailSubscription.count", 1) do
      post email_subscription_index_path, params: {
        email_subscription: { email: "new@example.com" }
      }
    end

    assert_redirected_to root_path
    follow_redirect!
    assert_match "You successfully subscribed weekly newsletter", response.body
  end

  test "should not create subscription with duplicate email" do
    existing = EmailSubscription.create!(email: "existing@example.com")

    assert_no_difference("EmailSubscription.count") do
      post email_subscription_index_path, params: {
        email_subscription: { email: "existing@example.com" }
      }
    end

    assert_redirected_to root_path
    follow_redirect!
    assert_match "has already been taken", response.body
  end

  test "should not create subscription with blank email" do
    assert_no_difference("EmailSubscription.count") do
      post email_subscription_index_path, params: {
        email_subscription: { email: "" }
      }
    end

    assert_redirected_to root_path
    follow_redirect!
    assert_match "can't be blank", response.body
  end
end
