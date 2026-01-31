require "test_helper"

class Admin::UsersControllerTest < ActionDispatch::IntegrationTest
  def setup
    @user = users(:one)
    sign_in_as(@user)
  end

  test "should get index" do
    get admin_users_path
    assert_response :success
  end

  test "should update user role" do
    patch admin_user_path(@user), params: { user: { role: "author" } }
    assert_redirected_to admin_users_path
  end
end
