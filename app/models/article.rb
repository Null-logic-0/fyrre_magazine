class Article < ApplicationRecord
  has_one_attached :image
  belongs_to :user

  include AttachmentUrl
  include ImageValidator
  include FormattedDate

  validates :title, :excerpt, :image, presence: true
  validates :title, length: { maximum: 30 }
  validates :excerpt, length: { minimum: 100 }
  validate -> { validate_image(image) }

  def image_url
    file_url(image)
  end

  def author
    user&.name
  end

  def as_json(options = {})
    super({
            methods: [ :image_url, :formatted_date, :author ]
          }.merge(options))
  end
end
