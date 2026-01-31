module AttachmentUrl
  extend ActiveSupport::Concern

  def file_url(attachment)
    return unless attachment.attached?
    if Rails.env.production?
      bucket = ENV.fetch("AWS_BUCKET_URL")
      "#{bucket}/#{attachment.key}"
    else
      return nil unless persisted?

      Rails.application.routes.url_helpers.url_for(attachment)
    end
  end
end
