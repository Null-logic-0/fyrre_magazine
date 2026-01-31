require "open-uri"

# ----------------------------
# Create Users
# ----------------------------
users = [
  { name: "Bob Author", email_address: "bob@example.com", password: "password123", role: :author },
  { name: "Charlie Admin", email_address: "charlie@example.com", password: "password123", role: :admin }
]

users.each do |attrs|
  user = User.find_or_initialize_by(email_address: attrs[:email_address])
  user.name = attrs[:name]
  user.password = attrs[:password]
  user.role = attrs[:role]
  user.save!
end

puts "Seeded #{User.count} Users."

# ----------------------------
# Create Articles
# ----------------------------

articles = [
  {
    title: "Hope also lost",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore",
    created_at: "2026-01-05",
    image_url: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "The best art museums",
    excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore",
    created_at: "2026-01-08",
    image_url: "https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "The devil is the details",
    excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    created_at: "2026-01-10",
    image_url: "https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "An indestructible hope",
    excerpt: "Excepteur sint occaecat cupidatat non proident,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore, sunt in culpa qui officia deserunt mollit anim id est.",
    created_at: "2026-01-10",
    image_url: "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "Street art festival",
    excerpt: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore",
    created_at: "2026-01-15",
    image_url: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  }
]

author = User.find_by(role: :author)
raise "No author user found! Create a user with role :author first." unless author

articles.each do |attrs|
  article = Article.find_or_initialize_by(title: attrs[:title])
  article.excerpt = attrs[:excerpt]
  article.user_id = author.id
  article.created_at = attrs[:created_at]
  article.updated_at = attrs[:created_at] # optional, keep created/updated in sync

  begin
    article.image.attach(
      io: URI.open(attrs[:image_url]),
      filename: File.basename(URI.parse(attrs[:image_url]).path)
    )
  rescue OpenURI::HTTPError => e
    puts "Failed to attach image for '#{article.title}': #{e.message}"
  end

  article.save!
end

puts "Seeded #{Article.count} Articles."
