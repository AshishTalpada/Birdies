// Ridham Patel 
// Student ID number - 8912325

import React, { useState, useEffect } from 'react';
import '../styles/Home.css'; 

const Home = () => {
  // Data for 5 extinct birds
  const extinctBirds = [
    {
      name: 'Passenger Pigeon',
      imgSrc: '/images/passenger_pigeon.jpg', 
      description: 'The passenger pigeon was once one of the most abundant bird species in North America, but was driven to extinction by hunting and habitat destruction.',
    },
    {
      name: 'Dodo',
      description: 'The dodo was a flightless bird that lived on the island of Mauritius. Overhunting and the introduction of non-native species led to its extinction.',
    },
    {
      name: 'Great Auk',
      imgSrc: '/images/great_auk.jpg', 
      description: 'The great auk was a large, flightless bird found in the North Atlantic. Overhunting for its feathers and eggs led to its extinction in the 19th century.',
    },
    {
      name: 'Carolina Parakeet',
      imgSrc: '/images/carolina_parakeet.jpg', 
      description: 'The Carolina parakeet was the only parrot species native to the eastern United States. Habitat destruction and hunting led to its extinction in the early 20th century.',
    },
    {
      name: 'Mauritius Kestrel',
      imgSrc: '/images/mauritius-kestrel.jpg', 
      description: 'The Mauritius kestrel was on the brink of extinction in the 1970s but was saved through a captive breeding program. It now survives in the wild but still remains critically endangered.',
    },
  ];

  // State for the current slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % extinctBirds.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + extinctBirds.length) % extinctBirds.length);
  };

  // Scroll animation hook
  useEffect(() => {
    const sections = document.querySelectorAll('.scroll-animate');
    const scrollAnimation = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop + 100) {
          section.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', scrollAnimation);
    scrollAnimation(); // Call immediately to trigger animations for already visible sections
  }, []);

  return (
    <div className="home">
      {/* Banner Section */}
      <section className="banner">
        <div className="banner-overlay">
          <div className="banner-content">
            <h1>Discover the Beauty of Canadian Birds</h1>
            <p>Explore breathtaking landscapes and the magnificent birds that inhabit Canada's wilderness.</p>
            <a href="#featured" className="btn">Start Exploring</a>
          </div>
        </div>
      </section>

      {/* Featured Birds Section */}
      <section id="featured" className="featured scroll-animate">
        <h2>Birds Loved By Everyone</h2>
        <div className="featured-cards">
          <div className="card">
            <img src={process.env.PUBLIC_URL + '/Images/Blue_Jay.jpg'} alt="Blue Jay" />
            <h3>Blue Jay</h3>
            <p>A vibrant blue bird, symbolizing intelligence and strength.</p>
          </div>
          <div className="card">
            <img src={process.env.PUBLIC_URL + '/Images/cardinal.jpg'} alt="Cardinal" />
            <h3>Cardinal</h3>
            <p>Known for their striking red feathers and winter presence.</p>
          </div>
          <div className="card">
            <img src={process.env.PUBLIC_URL + '/Images/canada_goose.jpg'} alt="Canada Goose" />
            <h3>Canada Goose</h3>
            <p>Famous for their honking sounds and migratory patterns.</p>
          </div>

          <div className="card">
            <img src={process.env.PUBLIC_URL + '/Images/common_loon.jpg'} alt="Common Loon" />
            <h3>Common Loon</h3>
            <p>A striking waterbird known for its distinctive calls and long migrations, found across Canada's lakes.</p>
          </div>

          <div className="card">
            <img src={process.env.PUBLIC_URL + '/Images/blad_eagle.jpg'} alt="Bald Eagle" />
            <h3>Bald Eagle</h3>
            <p>Canada's national bird, known for its strength, large size, and iconic white head and tail feathers.</p>
          </div>
        </div>
      </section>

      {/* Extinct Birds Slider Section */}
      <section id="slider" className="slider scroll-animate">
        <h2>Remembering Extinct</h2>
        <div className="slider-container">
          <button className="prev" onClick={prevSlide}>←</button>

          <div className="slider-content">
            <div className="bird-info">
              <h3>{extinctBirds[currentIndex].name}</h3>
              <p>{extinctBirds[currentIndex].description}</p>
            </div>

            <div className="bird-image">
              <img src={extinctBirds[currentIndex].imgSrc} alt={extinctBirds[currentIndex].name} />
            </div>
          </div>

          <button className="next" onClick={nextSlide}>→</button>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="facts scroll-animate">
        <h2>Fun Bird Facts</h2>
        <div className="fact-item">
          <h3>Did You Know?</h3>
          <p>Canada is home to over 450 bird species! Many of them are migratory, traveling thousands of kilometers annually.</p>
        </div>
        <div className="fact-item">
          <h3>Birdwatching Benefits</h3>
          <p>Birdwatching can help reduce stress, improve focus, and connect you with nature. It's also a great activity for all ages!</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about scroll-animate">
        <h2>Why Explore Birds?</h2>
        <p>Birdwatching is a way to reconnect with nature and appreciate the stunning wildlife that surrounds us. It allows us to learn, relax, and find peace in nature's beauty.</p>
      </section>

      {/* Call to Action Section */}
      <section className="cta scroll-animate">
        <h2>Join Us in Our Journey</h2>
        <p>Help us protect Canada's diverse bird population. Become a part of our community and get involved.</p>
        <a href="/contact" className="btn">Contact Us</a>
      </section>
    </div>
  );
};

export default Home;
