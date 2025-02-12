import "./Blog.css"

const blogs = [
  {
    id: 1,
    title: "Introduction to Web Development",
    author: "Jane Doe",
    date: "2025-02-10",
    excerpt: "Learn the basics of HTML, CSS, and JavaScript to start your web development journey.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "The Future of AI in Software Engineering",
    author: "John Smith",
    date: "2025-02-08",
    excerpt:
      "Explore how artificial intelligence is shaping the future of software development and engineering practices.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Best Practices for Code Review",
    author: "Alice Johnson",
    date: "2025-02-05",
    excerpt: "Discover effective strategies to improve your code review process and boost team productivity.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
]

function Blog() {
  return (
    <div className="blogs-container">
      <header className="blogs-header">
        <div className="header-content">
          <h1>Our Blog</h1>
        </div>
      </header>

      <main className="blogs-main">
        <div className="blogs-grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <div className="blog-image-container">
                <img src={blog.imageUrl || "/placeholder.svg"} alt={blog.title} className="blog-image" />
              </div>
              <div className="blog-content">
                <h2 className="blog-title">{blog.title}</h2>
                <p className="blog-meta">
                  <span className="blog-author">{blog.author}</span> |
                  <span className="blog-date">{new Date(blog.date).toLocaleDateString()}</span>
                </p>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <a href={`/blog/${blog.id}`} className="read-more">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Blog

