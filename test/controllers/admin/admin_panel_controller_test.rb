require "test_helper"

class Admin::AdminPanelControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    user = users(:one)
    sign_in_as(user)
    get admin_dashboard_path
    assert_response :success
  end
end
