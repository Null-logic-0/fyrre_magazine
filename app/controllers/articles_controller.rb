class ArticlesController < InertiaController
  allow_unauthenticated_access

  before_action :set_article, only: %i[ show ]

  # GET /Articles
  def index
    @pagy, @articles = pagy(
      Article.order(created_at: :desc),
      limit: 10
    )

    render inertia: "public/articles/index", props: {
      articles: @articles,
      pagination: pagination_meta(@pagy)
    }
  end

  # GET /Articles/1
  def show
    @articles = Article
                  .where.not(id: @article.id)
                  .order(created_at: :desc)
                  .limit(3)
    render inertia: "public/articles/show", props: {
      article: @article,
      articles: @articles
    }
  end

  private

  def set_article
    @article = Article.find(params[:id])
  end
end
