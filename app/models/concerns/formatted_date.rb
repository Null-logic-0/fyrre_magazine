module FormattedDate
  extend ActiveSupport::Concern

  def formatted_date
    return unless created_at

    created_at.strftime("%B %d, %Y")
  end
end
