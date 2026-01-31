class Admin::ArticlesController < InertiaController
  before_action :authorize_admin_or_author!
  before_action :set_article, only: %i[edit update destroy]
  before_action -> { authorize_ownership!(@article) }, only: %i[edit update destroy]

  def new
    @article = Article.new

    render inertia: "admin/articles/new", props: {
      article: @article
    }
  end

  def edit
    render inertia: "admin/articles/edit", props: {
      article: @article
    }
  end

  def create
    @article = Article.new(article_params)
    @article.user = current_user

    if @article.save
      redirect_to admin_dashboard_path, notice: "Article was successfully created."
    else
      render inertia: "admin/articles/new", props: {
        article: @article,
        errors: @article.errors.messages.transform_values(&:first)
      }
    end
  end

  def update
    if article_params[:image].present?
      @article.image.attach(article_params[:image])
    end
    if @article.update(article_params.except(:image))
      redirect_to admin_dashboard_path, notice: "Article was successfully updated."
    else
      render inertia: "admin/articles/edit", props: {
        article: @article,
        errors: @article.errors.messages.transform_values(&:first)
      }
    end
  end

  def destroy
    @article.destroy!
    redirect_to admin_dashboard_path, notice: "Article was successfully destroyed."
  end

  private

  def set_article
    @article = Article.find(params[:id])
  end

  def article_params
    params.permit(:title, :excerpt, :image)
  end
end
