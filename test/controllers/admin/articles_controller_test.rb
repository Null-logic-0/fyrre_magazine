require "test_helper"

class Admin::ArticlesControllerTest < ActionDispatch::IntegrationTest
  def setup
    @user = users(:one)
    sign_in_as(@user)
    @article = articles(:one)
  end

  test "should get new" do
    get new_admin_article_path
    assert_response :success
  end

  test "should create article" do
    post admin_articles_path, params: {
      title: "New article",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: fixture_file_upload("test_image.jpg", "image/jpeg")
    }
    assert_response :success
  end

  test "should show edit" do
    get edit_admin_article_path(@article)
    assert_response :success
  end

  test "should update article" do
    patch admin_article_path(@article), params: {
      title: @article.title
    }
    assert_equal @article.title, @article.title
  end

  test "should destroy article" do
    delete admin_article_path(@article)
    assert_redirected_to admin_dashboard_path
  end
end
