import { useEffect, useState } from 'react'
import './App.css'

const campus = [
  { id: 'atrium', label: 'Central Atrium', type: 'Main building', image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1100&q=85', copy: 'A bright, welcoming heart for assemblies, exhibitions, and everyday connection.' },
  { id: 'library', label: 'The Library', type: 'Knowledge commons', image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1100&q=85', copy: 'Quiet corners, collaborative tables, and more than 12,000 pathways into new ideas.' },
  { id: 'science', label: 'Science Lab', type: 'Innovation wing', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1100&q=85', copy: 'A hands-on environment where questions become experiments and experiments become confidence.' },
  { id: 'grounds', label: 'The Grounds', type: 'Sports & play', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1100&q=85', copy: 'Open-air spaces designed for movement, teamwork, and the joy of being part of a team.' },
]

const departments = [
  { name: 'Mathematics', mark: '01', tone: 'ochre', detail: 'Logic, patterns, and problem-solving for an ever-changing world.' },
  { name: 'Sciences', mark: '02', tone: 'green', detail: 'Curiosity-led inquiry across biology, chemistry, and physics.' },
  { name: 'Languages', mark: '03', tone: 'blue', detail: 'Voice, culture, and confident communication across borders.' },
  { name: 'Creative Arts', mark: '04', tone: 'rose', detail: 'A studio culture where imagination becomes craft and expression.' },
]

const gallery = [
  ['The morning light', 'Campus', 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1000&q=85'],
  ['Making discoveries', 'Science lab', 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1000&q=85'],
  ['Room to grow', 'Student life', 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=85'],
  ['Together, outdoors', 'Athletics', 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=85'],
]

function App() {
  const [activePlace, setActivePlace] = useState(campus[0])
  const [activeGallery, setActiveGallery] = useState(null)
  const [mobileNav, setMobileNav] = useState(false)

  useEffect(() => {
    const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: 0.16 })
    document.querySelectorAll('.reveal').forEach((element) => reveal.observe(element))
    return () => reveal.disconnect()
  }, [])

  return (
    <div className="site-shell">
      <header className="nav-wrap"><nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top"><span className="brand-mark">S</span><span>Spring of<br /><strong>Success</strong></span></a>
        <button className="nav-toggle" onClick={() => setMobileNav(!mobileNav)} aria-label="Toggle navigation">{mobileNav ? 'Close' : 'Menu'}</button>
        <div className={`nav-links ${mobileNav ? 'open' : ''}`}>
          {['About', 'Academics', 'Student Life', 'Admissions', 'Gallery'].map((item) => <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setMobileNav(false)}>{item}</a>)}
          <a className="nav-cta" href="#contact" onClick={() => setMobileNav(false)}>Visit the school <span>↗</span></a>
        </div>
      </nav></header>

      <main id="top">
        <section className="hero"><div className="hero-copy reveal"><p className="eyebrow">Independent school · Est. 2008</p><h1>Where bright minds<br /><em>find their direction.</em></h1><p className="hero-lede">A future-facing education grounded in curiosity, character, and the confidence to make a meaningful difference.</p><div className="hero-actions"><a className="button button-dark" href="#admissions">Begin your journey <span>↗</span></a><a className="text-link" href="#campus">Explore campus <span>↓</span></a></div></div><div className="hero-visual"><div className="sun-orb" /><div className="hero-image"><img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1500&q=90" alt="Students learning together in a sunlit school library" /></div><div className="hero-building"><div className="building-roof" /><div className="building-body"><span /><span /><span /><span /><span /><span /></div></div><div className="hero-note"><span className="note-dot" /><div><strong>Learning in motion</strong><small>Our campus · 01 / 04</small></div></div></div><div className="scroll-cue">Scroll to explore <span>↓</span></div></section>

        <section className="intro section-pad reveal" id="about"><div className="section-label">01 / Our approach</div><div className="intro-grid"><h2>Education that<br /><em>stays with you.</em></h2><div><p className="large-copy">At Spring of Success, we see school as more than a place to learn. It is a place to become — surrounded by people who notice your strengths, challenge your thinking, and make room for your next big idea.</p><a className="text-link dark-link" href="#academics">Discover our story <span>↗</span></a></div></div></section>

        <section className="campus section-pad" id="campus"><div className="campus-head reveal"><div><div className="section-label">02 / A living campus</div><h2>Step inside<br /><em>our world.</em></h2></div><p>Every corner is designed to invite questions, collaboration, and the kind of quiet focus that makes big ideas possible.</p></div><div className="campus-layout"><div className="campus-visual reveal"><img src={activePlace.image} alt={activePlace.label} /><div className="location-pin">{activePlace.id === 'atrium' ? 'A' : activePlace.id === 'library' ? 'L' : activePlace.id === 'science' ? 'S' : 'G'}</div><div className="visual-caption"><span>Now exploring</span><strong>{activePlace.label}</strong></div></div><div className="place-list">{campus.map((place, index) => <button className={`place ${activePlace.id === place.id ? 'active' : ''}`} key={place.id} onClick={() => setActivePlace(place)}><span className="place-number">0{index + 1}</span><span><small>{place.type}</small><strong>{place.label}</strong></span><i>↗</i></button>)}<p className="place-description">{activePlace.copy}</p></div></div></section>

        <section className="numbers section-pad"><div className="numbers-intro reveal"><div className="section-label">03 / In numbers</div><h2>A place to<br /><em>grow boldly.</em></h2></div><div className="stats-grid"><div className="stat reveal"><strong>16</strong><span>Years of excellence</span></div><div className="stat reveal"><strong>1:12</strong><span>Teacher to student ratio</span></div><div className="stat reveal"><strong>94<span>%</span></strong><span>University pathways</span></div><div className="stat reveal"><strong>28</strong><span>Clubs & activities</span></div></div></section>

        <section className="academics section-pad" id="academics"><div className="section-label reveal">04 / The learning experience</div><div className="academic-head reveal"><h2>Curiosity is<br /><em>our curriculum.</em></h2><a className="text-link dark-link" href="#departments">Meet our departments <span>↗</span></a></div><div className="department-grid" id="departments">{departments.map((department) => <article className={`department-card ${department.tone} reveal`} key={department.name}><div><span className="card-mark">{department.mark}</span><span className="card-arrow">↗</span></div><h3>{department.name}</h3><p>{department.detail}</p><div className="card-line" /></article>)}</div></section>

        <section className="student-life section-pad" id="student-life"><div className="life-image reveal"><img src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1300&q=85" alt="Student smiling outdoors on campus" /><div className="image-tag">Student life <span>✦</span></div></div><div className="life-copy reveal"><div className="section-label">05 / Beyond the classroom</div><h2>Find your<br /><em>people.</em></h2><p className="large-copy">Sport, music, leadership, making, exploring. The moments between lessons are where friendships take root and confidence finds its voice.</p><div className="life-links"><a href="#gallery"><span>01</span> Creative arts & performance <b>↗</b></a><a href="#gallery"><span>02</span> Sport & wellbeing <b>↗</b></a><a href="#gallery"><span>03</span> Leadership & service <b>↗</b></a></div></div></section>

        <section className="admissions section-pad" id="admissions"><div className="admissions-copy reveal"><div className="section-label">06 / Admissions</div><h2>Your next chapter<br /><em>starts here.</em></h2><p className="large-copy">Come and see what makes Spring of Success feel different. Our admissions team is here to make every step clear, personal, and welcoming.</p><a className="button button-light" href="#contact">Apply for 2026 <span>↗</span></a></div><div className="timeline reveal"><div className="timeline-step active"><span>01</span><div><strong>Come visit</strong><small>Book a campus tour and meet our community.</small></div></div><div className="timeline-step"><span>02</span><div><strong>Start a conversation</strong><small>Tell us about your child and ask anything.</small></div></div><div className="timeline-step"><span>03</span><div><strong>Find your place</strong><small>Receive your offer and join the family.</small></div></div></div></section>

        <section className="gallery section-pad" id="gallery"><div className="gallery-head reveal"><div><div className="section-label">07 / In focus</div><h2>Small moments.<br /><em>Big memories.</em></h2></div><p>Take a closer look at the everyday magic of Spring of Success.</p></div><div className="gallery-grid">{gallery.map((item, index) => <button className={`gallery-item item-${index + 1} reveal`} key={item[0]} onClick={() => setActiveGallery(item)}><img src={item[2]} alt={item[0]} /><span><small>{item[1]}</small><strong>{item[0]}</strong></span></button>)}</div></section>

        <section className="quote-section section-pad reveal"><div className="quote-mark">“</div><blockquote>They gave me the confidence to be curious about the world — and the courage to find my place in it.</blockquote><div className="quote-author"><span className="avatar">AM</span><span><strong>Amara Mensah</strong><small>Class of 2022 · Environmental Science</small></span></div><div className="quote-controls"><button aria-label="Previous testimonial">←</button><span>01 / 03</span><button aria-label="Next testimonial">→</button></div></section>

        <section className="contact section-pad" id="contact"><div className="contact-main reveal"><div className="section-label">08 / Come say hello</div><h2>Let's start<br /><em>a conversation.</em></h2><p>Whether you are exploring a new school or looking for a place your child can flourish, we would love to hear from you.</p><a className="button button-dark" href="mailto:hello@springofsuccess.edu">Get in touch <span>↗</span></a></div><div className="contact-details reveal"><div><small>Visit us</small><p>24 Discovery Avenue<br />Accra, Ghana</p></div><div><small>Talk to us</small><p>+233 302 555 019<br />hello@springofsuccess.edu</p></div><div><small>Office hours</small><p>Mon - Fri<br />8:00 am - 4:30 pm</p></div></div></section>
      </main>

      <footer><a className="brand" href="#top"><span className="brand-mark">S</span><span>Spring of<br /><strong>Success</strong></span></a><span>Learn with purpose. Live with possibility.</span><span>© 2026 Spring of Success Academy</span></footer>
      {activeGallery && <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActiveGallery(null)}><button className="lightbox-close" onClick={() => setActiveGallery(null)} aria-label="Close gallery">×</button><img src={activeGallery[2]} alt={activeGallery[0]} /><div><small>{activeGallery[1]}</small><strong>{activeGallery[0]}</strong></div></div>}
    </div>
  )
}

export default App
