require "test_helper"

class RegisterControllerTest < ActionDispatch::IntegrationTest
  test "should create user" do
    post signup_path, params: {
      name: "John Smith",
      email_address: "smith@example.com",
      password: "password123"
    }
    assert_redirected_to login_url
  end
end
