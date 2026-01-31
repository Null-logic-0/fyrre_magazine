module PagyMetadata
  extend ActiveSupport::Concern

  def pagination_meta(pagy)
    {
      page: pagy.page,
      pages: pagy.pages,
      count: pagy.count,
      limit: pagy.limit,
      prev: pagy.page > 1 ? pagy.page - 1 : nil,
      next: pagy.page < pagy.pages ? pagy.page + 1 : nil
    }
  end
end
