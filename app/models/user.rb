class User < ApplicationRecord
  has_secure_password
  has_many :sessions, dependent: :destroy
  has_many :articles, dependent: :destroy

  include FormattedDate

  normalizes :email_address, with: ->(e) { e.strip.downcase }

  enum :role, {
    user: 0,
    author: 1,
    admin: 2
  }
  validates :email_address, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }, if: -> { password.present? }
  validates :name, presence: true

  def as_json(options = {})
    super({
            methods: [ :formatted_date ]
          }.merge(options))
  end
end
