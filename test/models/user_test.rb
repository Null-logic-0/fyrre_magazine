require "test_helper"

class UserTest < ActiveSupport::TestCase
  setup do
    @user = User.new(
      name: "John Doe",
      email_address: "test@example.com",
      password: "password",
      role: :user
    )
  end

  # Valid user
  test "should be valid with valid attributes" do
    assert @user.valid?
  end

  # Presence validations
  test "should require a name" do
    @user.name = nil
    assert_not @user.valid?
    assert_includes @user.errors[:name], "can't be blank"
  end

  test "should require an email_address" do
    @user.email_address = nil
    assert_not @user.valid?
    assert_includes @user.errors[:email_address], "can't be blank"
  end

  # Uniqueness validation
  test "should require unique email_address" do
    @user.save!
    duplicate = @user.dup
    duplicate.password = "password"
    assert_not duplicate.valid?
    assert_includes duplicate.errors[:email_address], "has already been taken"
  end

  # Password validations
  test "should require a minimum password length" do
    @user.password = "123"
    assert_not @user.valid?
    assert_includes @user.errors[:password], "is too short (minimum is 6 characters)"
  end

  # Enum roles
  test "should allow valid roles" do
    assert_includes User.roles.keys, @user.role
  end

  test "should have many sessions" do
    assert_respond_to @user, :sessions
  end

  test "should have many articles" do
    assert_respond_to @user, :articles
  end

  # Normalization
  test "should normalize email_address to lowercase" do
    @user.email_address = "Test@Example.COM"
    @user.save!
    assert_equal "test@example.com", @user.reload.email_address
  end

  test "as_json should include formatted_date method" do
    @user.save!
    json = @user.as_json
    assert json.key?("formatted_date")
  end
end
