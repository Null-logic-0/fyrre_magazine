class EmailSubscription < ApplicationRecord
  validates :email, presence: true, uniqueness: true
end
