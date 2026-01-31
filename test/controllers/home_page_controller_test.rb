require "test_helper"

class HomePageControllerTest < ActionDispatch::IntegrationTest
  test "should show home page" do
    get root_url
    assert_response :success
  end
end
