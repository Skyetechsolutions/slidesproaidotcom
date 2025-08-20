import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AboutPage.css";

// Button
const Button = ({ children, variant = "primary", size = "md", asChild = false, ...props }) => {
  const className = `btn ${variant} ${size}`;
  return asChild
    ? React.cloneElement(children, { className, ...props })
    : <button className={className} {...props}>{children}</button>;
};

// Card
const Card = ({ children }) => <div className="card">{children}</div>;
const CardContent = ({ children }) => <div className="card-content">{children}</div>;

// Icons
const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);
const CheckCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon check" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
  </svg>
);
const Lightbulb = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon bulb" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M9 18h6" /><path d="M10 22h4" />
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
  </svg>
);
const Star = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon star" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        backdropFilter: "blur(8px)",
        boxShadow: scrolled
          ? "0 2px 10px rgba(0, 0, 0, 0.1)"
          : "0 1px 3px rgba(0, 0, 0, 0.05)",
        opacity: scrolled ? 0.85 : 1,
        transition: "all 0.3s ease",
        zIndex: 50,
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "1.75rem",
          fontWeight: "bold",
          letterSpacing: "0px",
          color: "#fff",
          textDecoration: "none",
        }}
      >
        SLIDESPROAI
      </a>

      {/* Desktop Nav */}
      <div className="desktop-nav">
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#footer">Contact</a>
        <a href="#Usage">How to Use?</a>

        <div style={{ marginLeft: "1rem", marginRight: "2rem" }}>
          <Button variant="primary" size="md" asChild>
            <Link to="http://slidesproai.in/">Login</Link>
          </Button>
        </div>
      </div>

      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hamburger-btn"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          /* Close Icon (X) */
          <svg xmlns="http://www.w3.org/2000/svg" 
               fill="none" 
               viewBox="0 0 24 24" 
               strokeWidth="2" 
               stroke="white" 
               width="28" 
               height="28">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          /* Hamburger Icon */
          <svg xmlns="http://www.w3.org/2000/svg" 
               fill="none" 
               viewBox="0 0 24 24" 
               strokeWidth="2" 
               stroke="white" 
               width="28" 
               height="28">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="mobile-nav">
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#footer" onClick={() => setIsOpen(false)}>Contact</a>
          <a href="#Usage" onClick={() => setIsOpen(false)}>How to Use?</a>
          <Button variant="primary" size="md" asChild>
            <Link to="http://slidesproai.in/" onClick={() => setIsOpen(false)}>
              Login
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default function AboutPage() {
  return (
    <div className="about-container">
      {/* Navbar */}
      <Navbar />
<main style={{ paddingTop: "80px" }}> 
      {/* Hero */}
      <section id="hero" className="hero">
        <div className="container center">
          <h1 className="hero-title animate-fade-in">Revolutionizing Presentations with Seamless Narration</h1>
          <p className="hero-subtitle">
            Transform the way you create and deliver presentations with a groundbreaking solution designed for educators, professionals, creators, and students alike.
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link to="http://slidesproai.in/">Experience the Future <ArrowRight /></Link>
          </Button>
        </div>
      </section>
      {/* Section 1 */}
      <section className="section">
  <div className="container grid-2">
    <div>
      <h2 className="section-title">The Power of an Engaging Presentation</h2>
      <p className="section-text">
        In today's fast-paced digital world, a compelling presentation goes beyond text-filled slides—it's about storytelling that captures attention, drives engagement, and leaves a lasting impression. Our software adds high-quality narration to elevate your message.
      </p>
    </div>
  <div className="video-wrapper">
  <video
    controls
    autoPlay
    loop
    muted
    className="responsive-video"
  >
    <source src="/assets/Slidesproai_promo1.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

  </div>
</section>
{/* Why Audio Narration Section */}
<section id="about"
  style={{
    width: "100%",
    paddingTop: "4rem",
    paddingBottom: "4rem",
    background: "linear-gradient(to bottom, white, #f3f4f6)",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
    }}
  >
    <h2
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        letterSpacing: "-0.015em",
        textAlign: "center",
        color: "#111827",
        marginBottom: "3rem",
      }}
    >
      Why Audio Narration is a Game-Changer
    </h2>
    <div
      style={{
        display: "grid",
        gap: "2rem",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      }}
    >
      {[
        {
          title: "Improved Engagement",
          desc: "A spoken voice creates a human connection, keeping your audience attentive.",
        },
        {
          title: "Better Retention",
          desc: "Hearing and seeing information boosts memory retention.",
        },
        {
          title: "Increased Accessibility",
          desc: "Narration caters to diverse learning styles and needs.",
        },
        {
          title: "Professional Delivery",
          desc: "Smooth, natural narration replaces robotic text-to-speech.",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          style={{
            backgroundColor: "white",
            borderRadius: "0.5rem",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            padding: "1.5rem",
            textAlign: "center",
          }}
        >
          <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#4f46e5" // Indigo-600
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
  <path d="m9 11 3 3L22 4"></path>
</svg>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              color: "#1f2937",
              marginTop: "0.5rem",
            }}
          >
            {item.title}
          </h3>
          <p
            style={{
              color: "#4b5563",
              fontSize: "1rem",
              marginTop: "0.5rem",
            }}
          >
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Transforming the Way You Work */}
<section
  style={{
    width: "100%",
    paddingTop: "4rem",
    paddingBottom: "4rem",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
    }}
  >
    <div
      style={{
        textAlign: "center",
        marginBottom: "3rem",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          letterSpacing: "-0.015em",
          color: "#111827",
          marginBottom: "1.5rem",
        }}
      >
        Transforming the Way You Work
      </h2>
      <p
        style={{
          maxWidth: "768px",
          margin: "0 auto",
          color: "#4b5563",
          fontSize: "1rem",
          lineHeight: "1.5",
        }}
      >
        Say goodbye to tedious voice recordings and manual edits. Our software automates high-quality narration, turning static slides into dynamic experiences in minutes—perfect for remote work, online courses, or business pitches.
      </p>
    </div>
  </div>
</section>
{/* Who Can Benefit */}
<section
  style={{
    width: "100%",
    paddingTop: "4rem",
    paddingBottom: "4rem",
    backgroundColor: "#1f2937",
    color: "white",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
    }}
  >
    <h2
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        letterSpacing: "-0.015em",
        textAlign: "center",
        marginBottom: "3rem",
        color: "white",
      }}
    >
      Who Can Benefit?
    </h2>
    <div
      style={{
        display: "grid",
        gap: "2rem",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      }}
    >
      {[
        {
          title: "Educators & Lecturers",
          desc: "Consistent, high-quality lectures without voice fatigue.",
        },
        {
          title: "Students & Researchers",
          desc: "Professional-grade projects that stand out.",
        },
        {
          title: "Business Professionals",
          desc: "Polished narration for meetings and pitches.",
        },
        {
          title: "Content Creators",
          desc: "Voice-driven content for YouTube and courses.",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          style={{
            backgroundColor: "white",
            border: "1px solid #e5e7eb",
            borderRadius: "0.5rem",
            padding: "1.5rem",
            textAlign: "center",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          {/* Updated minimalist lightbulb SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            stroke="#2563eb"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: "40px", height: "40px", marginTop: "0.5rem" }}
          >
            <path d="M32 4a16 16 0 0 0-16 16c0 8 5 12 5 20v4h22v-4c0-8 5-12 5-20A16 16 0 0 0 32 4z" />
            <line x1="28" y1="44" x2="28" y2="52" />
            <line x1="36" y1="44" x2="36" y2="52" />
            <line x1="24" y1="52" x2="40" y2="52" />
          </svg>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              color: "#111827",
              marginTop: "1rem",
            }}
          >
            {item.title}
          </h3>
          <p
            style={{
              color: "#374151",
              fontSize: "1rem",
              marginTop: "0.5rem",
            }}
          >
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Key Benefits */}
<section
  style={{
    width: "100%",
    paddingTop: "4rem",
    paddingBottom: "4rem",
    backgroundColor: "white",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
    }}
  >
    <h2
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        letterSpacing: "-0.015em",
        textAlign: "center",
        color: "#111827",
        marginBottom: "3rem",
      }}
    >
      Key Benefits
    </h2>
    <div
      style={{
        display: "grid",
        gap: "1.5rem",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      }}
    >
      {[
        "Saves Time & Effort – Automates narration without manual recording.",
        "Enhances Engagement – Keeps audiences attentive with narrated slides.",
        "Ensures Consistency – Delivers uniform quality every time.",
        "Professional Output – Studio-level narration for any setting.",
        "Accessibility for All – Supports auditory learners and those with disabilities.",
      ].map((benefit, idx) => (
        <div
          key={idx}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "0.75rem",
          }}
        >
          {/* CheckCircle Icon */}
            <svg
  xmlns="http://www.w3.org/2000/svg"
  width="34"
  height="34"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#4f46e5" // Indigo-600
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
  <path d="m9 11 3 3L22 4"></path>
</svg>
          <p
            style={{
              color: "#374151", // Gray-700
              fontSize: "1rem",
              lineHeight: "1.5",
            }}
          >
            {benefit}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Industry Applications */}
<section id="features"
  style={{
    width: "100%",
    paddingTop: "4rem",
    paddingBottom: "4rem",
    background: "linear-gradient(to bottom, white, #f3f4f6)", // from-white to-gray-100
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
    }}
  >
    <h2
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        letterSpacing: "-0.015em",
        textAlign: "center",
        color: "#111827",
        marginBottom: "3rem",
      }}
    >
      Industry Applications
    </h2>
    <div
      style={{
        display: "grid",
        gap: "2rem",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      }}
    >
      {[
        { title: "Education", desc: "Enhance e-learning with narrated modules." },
        { title: "Corporate", desc: "Streamline training and announcements." },
        { title: "Media", desc: "Boost content production efficiency." },
        { title: "Healthcare", desc: "Educate with structured narration." },
        { title: "Legal", desc: "Simplify briefings and public comms." },
      ].map((industry, idx) => (
        <div
          key={idx}
          style={{
            backgroundColor: "white",
            border: "1px solid #e5e7eb", // Light gray border
            borderRadius: "0.5rem",
            padding: "1.5rem",
            textAlign: "center",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Lightbulb Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            stroke="#2563eb" // Blue-600
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginBottom: "0.5rem" }}
          >
            <path d="M8 9a6 6 0 1 1 8 0c0 3-3 4-3 7h-2c0-3-3-4-3-7Z" />
            <path d="M9 18h6" />
            <path d="M10 22h4" />
          </svg>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              color: "#111827",
              marginTop: "0.5rem",
            }}
          >
            {industry.title}
          </h3>
          <p
            style={{
              color: "#374151",
              fontSize: "1rem",
              marginTop: "0.5rem",
            }}
          >
            {industry.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Section 2 */}
      <section className="section alt-bg">
        <div className="container grid-2 reverse">
          <div>
            <h2 className="section-title">Why Most Presentations Fail</h2>
            <ul className="list">
              <li><CheckCircle /> Monotone delivery that loses audience interest</li>
              <li><CheckCircle /> Overwhelming slides with too much information</li>
              <li><CheckCircle /> Lack of visual and emotional engagement</li>
              <li><CheckCircle /> Poor accessibility for diverse audiences</li>
            </ul>
          </div>
           <div className="video-wrapper">
  <video
    controls
    autoPlay
    loop
    muted
    className="responsive-video"
  >
    <source src="/assets/sample3.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="section">
        <div className="container grid-2">
          <div>
            <h2 className="section-title">Our Innovative Solution</h2>
            <p className="section-text">
              Imagine uploading your slides and instantly getting a professionally narrated, visually dynamic presentation that keeps your audience hooked from start to finish.
            </p>
            <ul className="list">
              <li><Lightbulb /> AI-powered narration with natural human-like delivery</li>
              <li><Lightbulb /> Engaging visual effects synced to your content</li>
              <li><Lightbulb /> Accessibility features for all audiences</li>
            </ul>
          </div>
           <div className="video-wrapper">
  <video
    controls
    autoPlay
    loop
    muted
    className="responsive-video"
  >
    <source src="/assets/sample4.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
        </div>
      </section>

      {/* Customer Testimonials */}
<section
  style={{
    width: "100%",
    paddingTop: "4rem",
    paddingBottom: "4rem",
    backgroundColor: "white",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
    }}
  >
    <h2
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        letterSpacing: "-0.015em",
        textAlign: "center",
        color: "#111827",
        marginBottom: "3rem",
      }}
    >
      Customer Testimonials
    </h2>
    <div
      style={{
        display: "grid",
        gap: "2rem",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      }}
    >
      {[
        { name: "Dr. Anita Sharma", role: "Professor", quote: "Changed the way I create online lectures." },
        { name: "Rahul Mehta", role: "HR Manager", quote: "Saved countless hours on presentations!" },
        { name: "James Carter", role: "Educator", quote: "A game-changer for my YouTube channel." },
        { name: "Priya Sinha", role: "Consultant", quote: "Perfect for professional client meetings!" },
      ].map((testimonial, idx) => (
        <div
          key={idx}
          style={{
            backgroundColor: "white",
            border: "1px solid #e5e7eb",
            borderRadius: "0.5rem",
            padding: "1.5rem",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Star Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#facc15" // yellow-400
            stroke="#fbbf24" // yellow-500
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginBottom: "0.75rem" }}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <p
            style={{
              color: "#4b5563",
              fontStyle: "italic",
              marginBottom: "0.75rem",
            }}
          >
            “{testimonial.quote}”
          </p>
          <div>
            <p
              style={{
                fontWeight: "600",
                color: "#1f2937",
              }}
            >
              {testimonial.name}
            </p>
            <p
              style={{
                color: "#6b7280",
                fontSize: "0.875rem",
              }}
            >
              {testimonial.role}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* FAQs */}
<section
  style={{
    width: "100%",
    paddingTop: "4rem",
    paddingBottom: "4rem",
    backgroundColor: "#1f2937", // gray-800
    color: "white",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
    }}
  >
    <h2
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        letterSpacing: "-0.015em",
        textAlign: "center",
        marginBottom: "3rem",
      }}
    >
      Frequently Asked Questions
    </h2>
    <div
      style={{
        display: "grid",
        gap: "0.2rem",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      }}
    >
      {[
        { q: "Who is this software for?", a: "Anyone creating presentations—students, educators, professionals, and creators!" },
        { q: "Do I need special skills?", a: "No! It’s intuitive and requires no technical knowledge." },
        { q: "Can I customize narration?", a: "Yes! Tailor the tone and style to your content." },
        { q: "Is there a limit to presentations?", a: "Flexible plans suit casual and frequent users." },
        { q: "What formats are supported?", a: "Upload PPTX files; get narrated slides and MP3s." },
        { q: "How does it improve accessibility?", a: "Clear narration aids visual impairments and learning needs." },
      ].map((faq, idx) => (
        <div key={idx} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <h3
            style={{
              fontSize: "1.125rem",
              fontWeight: "600",
            }}
          >
            {faq.q}
          </h3>
          <p style={{ fontSize: "1rem", color: "#d1d5db" }}>{faq.a}</p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Why Choose Us */}
<section
  style={{
    width: "100%",
    paddingTop: "4rem",
    paddingBottom: "4rem",
    backgroundColor: "#ffffff",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
    }}
  >
    <h2
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        letterSpacing: "-0.015em",
        textAlign: "center",
        color: "#111827",
        marginBottom: "3rem",
      }}
    >
      Why Choose Us?
    </h2>
    <div
      style={{
        display: "grid",
        gap: "1.5rem",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      }}
    >
      {[
        "Customer-Centric – Seamless, hassle-free experience.",
        "Tailored for Pros – Meets educators’ and professionals’ needs.",
        "Proven Results – Trusted worldwide by users.",
        "Continuous Improvements – Enhanced based on feedback.",
        "Cost-Effective – Saves money on voice artists.",
      ].map((reason, idx) => (
        <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
          <CheckCircle style={{ color: "#2563eb", flexShrink: 0 }} /> {/* blue check icon */}
          <p style={{ color: "#374151", fontSize: "1rem" }}>{reason}</p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* How to Use Our Software */}
<section id="Usage"
  style={{
    width: "100%",
    paddingTop: "4rem",
    paddingBottom: "4rem",
    background: "linear-gradient(to bottom, #ffffff, #f3f4f6)",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
    }}
  >
    <h2
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        letterSpacing: "-0.015em",
        textAlign: "center",
        color: "#111827",
        marginBottom: "3rem",
      }}
    >
      How to Use Our Software
    </h2>
    <div
      style={{
        display: "grid",
        gap: "2rem",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      }}
    >
      {[
        "Upload Your PowerPoint – Supports all PPTX sizes.",
        "Provide a Transcript – Type or upload your script.",
        "Upload a Voice Sample – Personalize with an AI-cloned voice.",
        "Generate Audio – AI creates narration for each slide.",
        "Review & Edit – Fine-tune pronunciation or content.",
        "Download – Get PPTX with audio and MP3 files.",
        "Share & Present – Deliver with confidence!",
      ].map((step, idx) => (
        <div
          key={idx}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "1rem",
          }}
        >
          <div
            style={{
              width: "4rem",
              height: "4rem",
              borderRadius: "9999px",
              backgroundColor: "#6366f1", // Indigo 500
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#ffffff",
            }}
          >
            {idx + 1}
          </div>
          <p
            style={{
              fontSize: "1.125rem",
              fontWeight: "500",
              color: "#1f2937",
            }}
          >
            {step}
          </p>
        </div>
      ))}
    </div>
    <div style={{ marginTop: "3rem", textAlign: "center" }}>
      <p
        style={{
          color: "#4b5563",
          fontSize: "1.125rem",
        }}
      >
        No technical expertise needed, fast automation, and professional-quality
        output—customizable for your needs.
      </p>
    </div>
  </div>
</section>


      {/* CTA */}
      <section className="section cta">
        <div className="container center">
          <h2 className="section-title white">Ready to Redefine Your Presentations?</h2>
          <p className="cta-text">
            Join now and experience the future of storytelling and audience engagement.
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link to="http://slidesproai.in/">Get Started <ArrowRight /></Link>
          </Button>
        </div>
      </section>
         <footer id="footer"
      style={{
        backgroundColor: "#0c2552",
        color: "#fff",
        padding: "50px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {/* Column 1 */}
        <div style={{ flex: 1, minWidth: "200px", margin: "10px 20px" }}>
          <div style={{ fontSize: "40px", marginBottom: "10px" }}>☁</div>
          <p>
            © 2025 Skyetech Solutions, Inc. <br /> All rights reserved.
          </p>
        </div>

        {/* Column 2 */}
        <div style={{ flex: 1, minWidth: "200px", margin: "10px 20px" }}>
          <h4 style={{ fontSize: "16px", marginBottom: "20px", fontWeight: 600 }}>
            Quick Links
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ marginBottom: "10px" }}>
              <a href="https://skyetechsolutions.in/" style={{ color: "#fff", textDecoration: "none" }}>
                Home
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="https://skyetechsolutions.in/" style={{ color: "#fff", textDecoration: "none" }}>
                About
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="https://skyetechsolutions.in/#about" style={{ color: "#fff", textDecoration: "none" }}>
                Services
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="https://skyetechsolutions.in/#contact" style={{ color: "#fff", textDecoration: "none" }}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div style={{ flex: 1, minWidth: "200px", margin: "10px 20px" }}>
          <h4 style={{ fontSize: "16px", marginBottom: "20px", fontWeight: 600 }}>
            Our Solutions
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ marginBottom: "10px" }}>Web Development</li>
            <li style={{ marginBottom: "10px" }}>App Development</li>
            <li style={{ marginBottom: "10px" }}>Digital Marketing</li>
            <li style={{ marginBottom: "10px" }}>Hosting Services</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div style={{ flex: 1, minWidth: "200px", margin: "10px 20px" }}>
          <h4 style={{ fontSize: "16px", marginBottom: "20px", fontWeight: 600 }}>
            Connect with Us
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ marginBottom: "10px" }}>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                LinkedIn
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Twitter
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Facebook
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
</main>
    </div>
  );
}
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Logo & Copyright */}
        <div className="footer-col">
          <div className="logo-placeholder">☁</div>
          <p>© 2025 Skyetech Solutions, Inc. <br /> All rights reserved.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Our Solutions */}
        <div className="footer-col">
          <h4>Our Solutions</h4>
          <ul>
            <li>Web Development</li>
            <li>App Development</li>
            <li>Digital Marketing</li>
            <li>Hosting Services</li>
          </ul>
        </div>

        {/* Column 4: Social */}
        <div className="footer-col">
          <h4>Connect with Us</h4>
          <ul>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};