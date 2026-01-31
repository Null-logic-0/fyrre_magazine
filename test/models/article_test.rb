require "test_helper"

class ArticleTest < ActiveSupport::TestCase
  setup do
    @user = users(:one)
    @image_path = Rails.root.join("test/fixtures/files/test_image.jpg")
    @article = Article.new(
      title: "Sample Title",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " \
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " \
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      user: @user
    )
    @article.image.attach(io: File.open(@image_path), filename: "test_image.jpg", content_type: "image/jpeg")
  end

  test "should be valid with valid attributes" do
    assert @article.valid?
  end

  test "should require a title" do
    @article.title = nil
    assert_not @article.valid?
    assert_includes @article.errors[:title], "can't be blank"
  end

  test "should require an excerpt" do
    @article.excerpt = nil
    assert_not @article.valid?
    assert_includes @article.errors[:excerpt], "can't be blank"
  end

  test "should require an image" do
    @article.image.purge
    assert_not @article.valid?
    assert_includes @article.errors[:image], "can't be blank"
  end

  test "should validate title length" do
    @article.title = "a" * 31
    assert_not @article.valid?
    assert_includes @article.errors[:title], "is too long (maximum is 30 characters)"
  end

  test "should validate excerpt length" do
    @article.excerpt = "Too short"
    assert_not @article.valid?
    assert_includes @article.errors[:excerpt], "is too short (minimum is 100 characters)"
  end

  test "author should return user name" do
    assert_equal @user.name, @article.author
  end

  test "as_json includes custom methods" do
    json = @article.as_json
    assert_includes json.keys, "image_url"
    assert_includes json.keys, "author"
    assert_includes json.keys, "formatted_date"
  end
end
