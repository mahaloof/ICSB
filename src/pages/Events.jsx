import "./Events.css"

const events = [
  {
    id: 1,
    title: "UNLOCKING IOT: FROM CONCEPT TO CREATION",
    date: "09-13-2024",
    imageUrl: "/mahaloof/pics/unlock iot.jpeg",
    pdfUrl: "/mahaloof/pdfs/Unlocking iot From Concept to Creation  session Report.pdf.pdf", // Added PDF URL
  },
  {
    id: 2,
    title: "INNOVATIVE IOT",
    date: "07-10-2024",
    imageUrl: "mahaloof/pics/code and connect.jpeg",
    pdfUrl: "/mahaloof/pdfs/Report innovative iot.pdf", // Added PDF URL
  },
  {
    id: 3,
    title: "3D PRINTING WORKSHOP",
    date: "Coming Soon",
    imageUrl: "mahaloof/pics/3d printing.jpeg",
    pdfUrl: "/mahaloof/pdfs/3D PRINTING REPORT.pdf", // Added PDF URL
  },
  {
    id: 4,
    title: "A DEEP DIVE INTO OPERATING SYSTEMS AND LINUX",
    date: "31-08-2024",
    imageUrl: "mahaloof/pics/deep dive.jpeg",
    pdfUrl: "/mahaloof/pdfs/Report on One-Day Workshop on “A Deep Dive into Operating Systems and Linux”.pdf.pdf", // Added PDF URL
  },
  {
    id: 5,
    title: "REAL WORLD CHALLNGES",
    date: "05-09-2024",
    imageUrl: "/mahaloof/pics/cyber dhanya.jpeg",
    pdfUrl: "/mahaloof/pdfs/cyber security .pdf", // Added PDF URL
  },
  {
    id: 6,
    title: "CYBER SHIELD: PROTECT YOUR DIGITAL FRONTIERS",
    date: "10-03-2024",
    imageUrl: "mahaloof/public/pics/cyber shield.jpeg",
    pdfUrl: "/mahaloof/pdfs/Report .pdf", // Added PDF URL
  },
  
];

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
                {event.pdfUrl && (
                  <a href={event.pdfUrl} target="_blank" rel="noopener noreferrer" className="event-pdf-link">
                    View PDF
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Events;


