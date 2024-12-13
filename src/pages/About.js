// Jayati Dalwadi
// Student ID Number - 

import React from 'react';
import '../styles/About.css'; 

const About = () => (
  <div className="about-container">
    <h2>About Birdes</h2>
    <p>
      Birdes is dedicated to showcasing Canadian birds. Our mission is to inspire people to appreciate the beauty of nature and take action to preserve our avian wildlife. From birdwatching to conservation efforts, we aim to be your go-to source for everything about birds in Canada.
    </p>

    {/* Video Section */}
    <div className="about-video">
      <h3>Discover the Beauty of Birds</h3>
      <video controls>
        <source src={`${process.env.PUBLIC_URL}/images/Flying_Brids_vid.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    {/* Upcoming Events */}
    <section className="events">
      <h3>Upcoming Bird-Related Events</h3>
      <ul>
        <li>
          <img src={`${process.env.PUBLIC_URL}/images/great_canadian_birdathon.jpg`} alt="Great Canadian Birdathon" />
          <strong>Great Canadian Birdathon</strong> - May 2024: A nationwide event encouraging birdwatching to support bird conservation efforts.
        </li>
        <li>
          <img src={`${process.env.PUBLIC_URL}/images/migratory_day.jpg`} alt="World Migratory Bird Day" />
          <strong>World Migratory Bird Day</strong> - October 2024: Celebrating the migration of birds across continents, with interactive workshops and guided tours.
        </li>
        <li>
          <img src={`${process.env.PUBLIC_URL}/images/avian_exhibition.jpg`} alt="Avian Art & Photography Exhibition" />
          <strong>Avian Art & Photography Exhibition</strong> - June 2024, Vancouver: Featuring bird-themed art and photography by talented artists.
        </li>
        <li>
          <img src={`${process.env.PUBLIC_URL}/images/birds_of_prey.jpg`} alt="Birds of Prey Showcase" />
          <strong>Birds of Prey Showcase</strong> - September 2024, Toronto: An educational event highlighting raptors and their role in ecosystems.
        </li>
      </ul>
    </section>

    {/* Memorial Places */}
    <section className="memorial-places">
      <h3>Bird Memorial Places Across Canada</h3>
      <ul>
        <li>
          <img src={`${process.env.PUBLIC_URL}/images/point_pelee.jpg`} alt="Point Pelee National Park" />
          <strong>Bird Sanctuary - Point Pelee National Park</strong>: Located in Ontario, this sanctuary is home to migratory birds and serves as a hub for bird enthusiasts.
        </li>
        <li>
          <img src={`${process.env.PUBLIC_URL}/images/reifel_sanctuary.jpg`} alt="George C. Reifel Migratory Bird Sanctuary" />
          <strong>George C. Reifel Migratory Bird Sanctuary</strong>: Found in British Columbia, this sanctuary provides a refuge for thousands of bird species.
        </li>
        <li>
          <img src={`${process.env.PUBLIC_URL}/images/inglewood_sanctuary.jpg`} alt="Inglewood Bird Sanctuary" />
          <strong>Inglewood Bird Sanctuary</strong>: Situated in Calgary, Alberta, this historic park is a haven for bird species and nature lovers.
        </li>
        <li>
          <img src={`${process.env.PUBLIC_URL}/images/presquile_park.jpg`} alt="Presqu'ile Provincial Park" />
          <strong>Presqu'ile Provincial Park</strong>: A well-known spot in Ontario for birdwatching and conservation education.
        </li>
      </ul>
    </section>

    {/* Website Insights */}
    <section className="website-insights">
      <h3>Website Insights</h3>
      <p>
        Since its inception, Birdes has become a trusted resource for bird enthusiasts across Canada. Here’s what makes us special:
      </p>
      <ul>
        <li>Showcasing over 450 bird species found in Canada.</li>
        <li>Interactive bird habitat maps and random bird generators to keep you engaged.</li>
        <li>Educational resources on bird conservation and migration patterns.</li>
        <li>A community-driven platform where bird lovers can share experiences and insights.</li>
      </ul>
    </section>
  </div>
);

export default About;
