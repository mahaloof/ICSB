import "./Events.css"

const events = [
  {
    id: 1,
    title: "WORKSHOP: Crafting the Web",
    startDate: "11-07-2024",
    endDate: "12-07-2024",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-12%20125436-GyVJcgyOH5TEVDvvHkTUgOmVl4yN8b.png",
  },
  {
    id: 2,
    title: "Blending Brilliance",
    date: "04-03-2024",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Outreach Program",
    date: "Coming Soon",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
]

function Events() {
  return (
    <div className="events-container">
      <header className="events-header">
        <div className="header-content">
          <h1>Events</h1>
        </div>
      </header>

      <main className="events-main">
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-image-container">
                <img src={event.imageUrl || "/placeholder.svg"} alt={event.title} className="event-image" />
              </div>
              <div className="event-content">
                <h2 className="event-title">{event.title}</h2>
                <p className="event-date">
                  {event.startDate && event.endDate ? `${event.startDate} to ${event.endDate}` : event.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Events


