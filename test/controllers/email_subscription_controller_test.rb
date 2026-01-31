require "test_helper"

class EmailSubscriptionControllerTest < ActionDispatch::IntegrationTest
  test "should send email" do
    post email_subscription_index_path
    assert_response :success
  end
end
