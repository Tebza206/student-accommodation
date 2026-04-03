import React from 'react';
import { Bed, Users, Bath, UserCheck, Wind, Banknote, FileX, Award, Shield, Zap, Briefcase, ShieldCheck, BellRing, Clock, MapPin, CheckCircle2, MessageCircle } from 'lucide-react';
import { propertyInfo, features, security, nearby, galleryPhotos, roomTypes } from './data';
import './App.css';

// Dynamic icon resolver
const getIcon = (iconName) => {
  const icons = {
    Bed, Users, Bath, UserCheck, Wind, Banknote, FileX, Award,
    Shield, Zap, Briefcase, ShieldCheck, BellRing, Clock
  };
  const IconComponent = icons[iconName];
  return IconComponent ? <IconComponent size={24} /> : <CheckCircle2 size={24} />;
};

function App() {
  const getWhatsAppLink = (message) => {
    const encoded = encodeURIComponent(message);
    const phone = propertyInfo.whatsappNumber.replace('+', '');
    return `https://wa.me/${phone}?text=${encoded}`;
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <span>Mthiyza</span> Properties
          </div>
          <a href={getWhatsAppLink("Hi, I'm interested in the accommodation.")} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={20} /> Contact Us
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-badges animate-fade-in delay-100">
            <span className="badge success"><Award size={16} /> NSFAS Accredited</span>
            <span className="badge"><MapPin size={16} /> {propertyInfo.location}</span>
          </div>
          <h1 className="animate-fade-in delay-200">{propertyInfo.name}</h1>
          <p className="hero-subtitle animate-fade-in delay-300">
            Premium student living situated conveniently close to key university campuses. Secure, furnished, and ready for you.
          </p>
          <div className="animate-fade-in delay-300">
             <a href="#rooms" className="btn btn-primary" style={{ marginRight: '1rem' }}>View Rooms</a>
             <a href="#gallery" className="btn btn-primary" style={{ background: 'transparent', border: '2px solid white' }}>View Gallery</a>
          </div>
        </div>
      </section>

      {/* Features & Security */}
      <section className="section bg-color">
        <div className="container">
          <h2 className="section-title">Property Features</h2>
          <div className="features-grid" style={{ marginBottom: '4rem' }}>
            {features.map((feature, idx) => (
              <div className="card" key={idx}>
                <div className="card-icon">{getIcon(feature.icon)}</div>
                <h3>{feature.text}</h3>
              </div>
            ))}
          </div>

          <h2 className="section-title">Top-Tier Security</h2>
          <div className="security-grid">
            {security.map((item, idx) => (
              <div className="card" key={idx}>
                <div style={{ color: '#25D366' }} className="card-icon">{getIcon(item.icon)}</div>
                <h3>{item.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section gallery-section">
        <div className="container">
          <h2 className="section-title">Photo Gallery</h2>
          <div className="gallery-grid">
            {galleryPhotos.map((photo, idx) => (
              <div className="gallery-item" key={idx}>
                <img src={photo.src} alt={photo.title} onError={(e) => { e.target.src = 'https://placehold.co/600x400/14213d/fca311?text=' + photo.title }} />
                <div className="gallery-overlay">
                  <h3>{photo.category}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="section rooms-section">
        <div className="container">
          <h2 className="section-title">Available Rooms</h2>
          <div className="features-grid">
            {roomTypes.map((room, idx) => (
              <div className="room-card" key={idx}>
                <img className="room-image" src={room.image} alt={room.type} onError={(e) => { e.target.src = 'https://placehold.co/600x400/14213d/fca311?text=' + room.type }} />
                <div className="room-content">
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{room.type}</h3>
                  <div className="room-price">{room.price}</div>
                  <ul className="room-features">
                    {room.features.map((feat, fidx) => (
                      <li key={fidx}><CheckCircle2 size={18} color="var(--primary-color)"/> {feat}</li>
                    ))}
                  </ul>
                  <a href={getWhatsAppLink(`Hi, I'm interested in the ${room.type} at ${propertyInfo.name}.`)} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
                    <MessageCircle size={20} /> Inquire Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Campuses */}
      <section className="section bg-color">
        <div className="container">
          <h2 className="section-title">Nearby Campuses</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
             {nearby.map((place, idx) => (
               <div key={idx} style={{ padding: '1rem 2rem', background: 'white', borderRadius: '50px', boxShadow: 'var(--shadow-sm)', fontWeight: '600' }}>
                 <MapPin size={18} style={{ color: 'var(--primary-color)', marginRight: '0.5rem', verticalAlign: 'middle' }} />
                 {place.text}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA / Footer */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to secure your spot?</h2>
          <p>Don't miss out on premium student accommodation close to campus. Contact us today on WhatsApp to arrange a viewing or secure your booking. Spaces are limited to max 20 occupants!</p>
          <a href={getWhatsAppLink("Hi, I want to secure my spot!")} className="btn btn-whatsapp" style={{ fontSize: '1.25rem', padding: '1rem 2.5rem' }} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={24} /> WhatsApp Us Now
          </a>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {propertyInfo.name}. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
