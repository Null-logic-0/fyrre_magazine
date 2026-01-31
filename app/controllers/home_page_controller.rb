class HomePageController < InertiaController
  allow_unauthenticated_access

  def index
    @articles = Article
                  .order(created_at: :desc).limit(3)
    render inertia: "public/home_page/index", props: {
      articles: @articles
    }
  end
end
