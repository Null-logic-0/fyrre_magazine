require "test_helper"

class EmailSubscriptionTest < ActiveSupport::TestCase
  setup do
    @valid_email = "test@example.com"
    @subscription = EmailSubscription.new(email: @valid_email)
  end

  test "should be valid with a valid email" do
    assert @subscription.valid?
  end

  test "should require an email" do
    @subscription.email = nil
    assert_not @subscription.valid?
    assert_includes @subscription.errors[:email], "can't be blank"
  end

  test "should require a unique email" do
    @subscription.save!

    duplicate = EmailSubscription.new(email: @valid_email)
    assert_not duplicate.valid?
    assert_includes duplicate.errors[:email], "has already been taken"
  end
end
