class Admin::AdminPanelController < InertiaController
  def index
    articles_scope = Article.order(created_at: :desc)

    if params[:q].present?
      query = params[:q].strip
      articles_scope = articles_scope.where(
        "title ILIKE :q OR excerpt ILIKE :q",
        q: "%#{query}%"
      )
    end
    @pagy, @articles = pagy(articles_scope, items: 10)

    render inertia: "admin/index", props: {
      articles: @articles,
      pagination: pagination_meta(@pagy),
      search: params[:q] || ""
    }
  end
end
