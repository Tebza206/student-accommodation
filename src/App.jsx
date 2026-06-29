import React from 'react';
import { Bed, Users, Bath, UserCheck, Wind, Banknote, FileX, Award, Shield, Zap, Briefcase, ShieldCheck, BellRing, Clock, MapPin, CheckCircle2, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { propertyInfo, features, security, nearby, galleryPhotos, roomTypes } from './data';
import './App.css';
import SuspensionOverlay from './SuspensionOverlay';
import { Analytics } from "@vercel/analytics/react";

const IS_ACCOUNT_ACTIVE = true;

// Detect bots/crawlers/lighthouse
const isBot = typeof window !== 'undefined' && 
  window.navigator && 
  /googlebot|bingbot|yandex|baiduspider|duckduckbot|slurp|chrome-lighthouse|lighthouse|bot|crawl|spider/i.test(window.navigator.userAgent);

// Helper to disable animations for search engine crawlers so they index all content
const motionProps = (initial, target, type = 'whileInView', extra = {}) => {
  if (isBot) return {};
  return {
    initial,
    [type]: target,
    ...extra
  };
};

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

  if (!IS_ACCOUNT_ACTIVE) {
    return <SuspensionOverlay />;
  }

  return (
    <div className="App">
      <Analytics />
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
          <motion.div 
            className="hero-badges"
            {...motionProps({ opacity: 0, y: 20 }, { opacity: 1, y: 0 }, 'animate', { transition: { duration: 0.6, delay: 0.1 } })}
          >
            <span className="badge success"><Award size={16} /> NSFAS Accredited</span>
            <span className="badge"><MapPin size={16} /> {propertyInfo.location}</span>
          </motion.div>
          <motion.h1 
            {...motionProps({ opacity: 0, y: 20 }, { opacity: 1, y: 0 }, 'animate', { transition: { duration: 0.6, delay: 0.2 } })}
          >
            {propertyInfo.name}
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            {...motionProps({ opacity: 0, y: 20 }, { opacity: 1, y: 0 }, 'animate', { transition: { duration: 0.6, delay: 0.3 } })}
          >
            Premium student living situated conveniently close to key university campuses. Secure, furnished, and ready for you.
          </motion.p>
          <motion.div 
            {...motionProps({ opacity: 0, y: 20 }, { opacity: 1, y: 0 }, 'animate', { transition: { duration: 0.6, delay: 0.4 } })}
          >
             <a href="#rooms" className="btn btn-primary" style={{ marginRight: '1rem' }}>View Rooms</a>
             <a href="#gallery" className="btn btn-primary" style={{ background: 'transparent', border: '2px solid white' }}>View Gallery</a>
          </motion.div>
        </div>
      </section>

      {/* Features & Security */}
      <section className="section bg-color">
        <div className="container">
          <motion.h2 
            className="section-title"
            {...motionProps({ opacity: 0, y: 20 }, { opacity: 1, y: 0 }, 'whileInView', { viewport: { once: true, margin: "-100px" } })}
          >
            Property Features
          </motion.h2>
          <div className="features-grid" style={{ marginBottom: '4rem' }}>
            {features.map((feature, idx) => (
              <motion.div 
                className="card" 
                key={idx}
                {...motionProps(
                  { opacity: 0, y: 30 },
                  { opacity: 1, y: 0 },
                  'whileInView',
                  {
                    viewport: { once: true, margin: "-50px" },
                    transition: { duration: 0.5, delay: idx * 0.1 }
                  }
                )}
              >
                <div className="card-icon">{getIcon(feature.icon)}</div>
                <h3>{feature.text}</h3>
              </motion.div>
            ))}
          </div>

          <motion.h2 
            className="section-title"
            {...motionProps({ opacity: 0, y: 20 }, { opacity: 1, y: 0 }, 'whileInView', { viewport: { once: true, margin: "-100px" } })}
          >
            Top-Tier Security
          </motion.h2>
          <div className="security-grid">
            {security.map((item, idx) => (
              <motion.div 
                className="card" 
                key={idx}
                {...motionProps(
                  { opacity: 0, y: 30 },
                  { opacity: 1, y: 0 },
                  'whileInView',
                  {
                    viewport: { once: true, margin: "-50px" },
                    transition: { duration: 0.5, delay: idx * 0.1 }
                  }
                )}
              >
                <div style={{ color: '#25D366' }} className="card-icon">{getIcon(item.icon)}</div>
                <h3>{item.text}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section gallery-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            {...motionProps({ opacity: 0, y: 20 }, { opacity: 1, y: 0 }, 'whileInView', { viewport: { once: true, margin: "-100px" } })}
          >
            Photo Gallery
          </motion.h2>
          <div className="gallery-grid">
            {galleryPhotos.map((photo, idx) => (
              <motion.div 
                className="gallery-item" 
                key={idx}
                {...motionProps(
                  { opacity: 0, scale: 0.9 },
                  { opacity: 1, scale: 1 },
                  'whileInView',
                  {
                    viewport: { once: true, margin: "-50px" },
                    transition: { duration: 0.5, delay: idx * 0.1 }
                  }
                )}
              >
                <img src={photo.src} alt={photo.title} onError={(e) => { e.target.src = 'https://placehold.co/600x400/14213d/fca311?text=' + photo.title }} />
                <div className="gallery-overlay">
                  <h3>{photo.category}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="section rooms-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            {...motionProps({ opacity: 0, y: 20 }, { opacity: 1, y: 0 }, 'whileInView', { viewport: { once: true, margin: "-100px" } })}
          >
            Available Rooms
          </motion.h2>
          <div className="features-grid">
            {roomTypes.map((room, idx) => (
              <motion.div 
                className="room-card" 
                key={idx}
                {...motionProps(
                  { opacity: 0, y: 40 },
                  { opacity: 1, y: 0 },
                  'whileInView',
                  {
                    viewport: { once: true, margin: "-50px" },
                    transition: { duration: 0.6, delay: idx * 0.15 }
                  }
                )}
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Campuses */}
      <section className="section bg-color">
        <div className="container">
          <motion.h2 
            className="section-title"
            {...motionProps({ opacity: 0, y: 20 }, { opacity: 1, y: 0 }, 'whileInView', { viewport: { once: true, margin: "-100px" } })}
          >
            Nearby Campuses
          </motion.h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
             {nearby.map((place, idx) => (
               <motion.div 
                 key={idx} 
                 style={{ padding: '1rem 2rem', background: 'white', borderRadius: '50px', boxShadow: 'var(--shadow-sm)', fontWeight: '600' }}
                 {...motionProps(
                   { opacity: 0, x: -20 },
                   { opacity: 1, x: 0 },
                   'whileInView',
                   {
                     viewport: { once: true, margin: "-50px" },
                     transition: { duration: 0.4, delay: idx * 0.1 }
                   }
                 )}
               >
                  <MapPin size={18} style={{ color: 'var(--primary-color)', marginRight: '0.5rem', verticalAlign: 'middle' }} />
                  <span>
                    {place.text}
                    {place.distance && place.distance !== 'Unknown' && (
                      <span style={{ fontSize: '0.85em', color: '#6b7280', marginLeft: '0.5rem', fontWeight: '400' }}>
                        ({place.distance})
                      </span>
                    )}
                  </span>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA / Footer */}
      <section className="cta-section">
        <div className="container">
          <motion.h2
            {...motionProps({ opacity: 0, y: 20 }, { opacity: 1, y: 0 }, 'whileInView', { viewport: { once: true } })}
          >
            Ready to secure your spot?
          </motion.h2>
          <motion.p
            {...motionProps(
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0 },
              'whileInView',
              {
                viewport: { once: true },
                transition: { delay: 0.1 }
              }
            )}
          >
            Don't miss out on premium student accommodation close to campus. Contact us today on WhatsApp to arrange a viewing or secure your booking. Spaces are limited to max 20 occupants!
          </motion.p>
          <motion.div
            {...motionProps(
              { opacity: 0, scale: 0.9 },
              { opacity: 1, scale: 1 },
              'whileInView',
              {
                viewport: { once: true },
                transition: { delay: 0.2 }
              }
            )}
          >
            <a href={getWhatsAppLink("Hi, I want to secure my spot!")} className="btn btn-whatsapp" style={{ fontSize: '1.25rem', padding: '1rem 2.5rem' }} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={24} /> WhatsApp Us Now
            </a>
          </motion.div>
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
