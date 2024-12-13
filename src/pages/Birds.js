/* Ashishkumar Talpada
Student Number - 8909834 */

import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { icon } from 'leaflet';
import '../styles/Birds.css';

// Full data for 12 birds with detailed descriptions
const birds = [
  {
    name: 'Blue Jay',
    description: 'The Blue Jay is a striking bird with vibrant blue plumage, a white chest, and a crest atop its head. Found throughout Canada, it is known for its intelligence and adaptability. Blue Jays are social birds, often seen in small family groups. They are vocal, mimicking other birds and even human sounds. They play a crucial role in forest regeneration by spreading acorns and seeds.',
    image: '/images/blue_jay.jpg',
    category: 'Common',
    habitat: [45.4215, -75.6992],
    diet: 'Nuts, seeds, and insects',
    lifespan: '7 years',
    wingspan: '13-17 inches'
  },
  {
    name: 'Cardinal',
    description: 'The Northern Cardinal is a medium-sized songbird with a vibrant red color, making it one of the most recognizable birds in North America. Males are brilliant red, while females are a soft brown with hints of red. Their melodic songs are a delight during early mornings. Cardinals prefer woodland edges, parks, and gardens.',
    image: '/images/cardinal.jpg',
    category: 'Common',
    habitat: [43.6532, -79.3832],
    diet: 'Seeds, fruits, and insects',
    lifespan: '3 years',
    wingspan: '10-12 inches'
  },
  {
    name: 'Canada Goose',
    description: 'The Canada Goose is a large waterfowl species native to North America. Recognizable by its black head and neck, white cheeks, and brown body, it is famous for its V-shaped migratory flight formation. Canada Geese are social creatures that often forage in groups and are found near lakes, ponds, and rivers.',
    image: '/images/canada_goose.jpg',
    category: 'Common',
    habitat: [45.4215, -75.6992],
    diet: 'Grass, grains, and aquatic plants',
    lifespan: '10-24 years',
    wingspan: '50-66 inches'
  },
  {
    name: 'Common Loon',
    description: 'The Common Loon is an iconic symbol of Canada. Known for its eerie, echoing calls, this bird thrives in freshwater lakes. With its black-and-white plumage and red eyes, the loon is a graceful diver, capable of swimming great distances underwater to catch fish. It nests near the waters edge in secluded areas.',
    image: '/images/common_loon.jpg',
    category: 'Common',
    habitat: [53.7267, -127.6476],
    diet: 'Fish and aquatic invertebrates',
    lifespan: '20-30 years',
    wingspan: '46-52 inches'
  },
  {
    name: 'Bald Eagle',
    description: 'The Bald Eagle is a powerful bird of prey and a symbol of freedom. Found near large bodies of open water, it builds massive nests in tall trees. With a striking white head and tail contrasting its dark brown body, the Bald Eagle is an apex predator, feeding primarily on fish. It is a conservation success story, recovering from the brink of extinction.',
    image: '/images/blad_eagle.jpg',
    category: 'Endangered',
    habitat: [55.0181, -127.6467],
    diet: 'Fish, small mammals, and carrion',
    lifespan: '20-30 years',
    wingspan: '71-91 inches'
  },
  {
    name: 'Peregrine Falcon',
    description: 'The Peregrine Falcon is the fastest animal on the planet, capable of diving at speeds of over 240 mph. With a slate-gray back and barred white underside, this bird of prey is a formidable hunter. Peregrines inhabit various landscapes, including cliffs and city skyscrapers, and their recovery from near extinction is a remarkable conservation success.',
    image: '/images/Peregrine_falcon.jpg',
    category: 'Endangered',
    habitat: [45.4215, -75.6992],
    diet: 'Small birds and mammals',
    lifespan: '15-20 years',
    wingspan: '37-46 inches'
  },
  {
    name: 'Snowy Owl',
    description: 'The Snowy Owl is a majestic bird with pristine white feathers and striking yellow eyes. Native to the Arctic tundra, it migrates south during winter. Snowy Owls are silent hunters, relying on their sharp vision and hearing to catch prey. They are highly territorial and often seen perched on open fields.',
    image: '/images/snowy_owl.jpg',
    category: 'Endangered',
    habitat: [60.1087, -109.5277],
    diet: 'Lemmings, small mammals, and birds',
    lifespan: '10-17 years',
    wingspan: '49-57 inches'
  },
  {
    name: 'Great Horned Owl',
    description: 'The Great Horned Owl is a versatile predator found across diverse habitats. With its tufted ears resembling horns, this owl is nocturnal and relies on its excellent night vision to hunt. Its powerful talons can capture prey much larger than itself. The owls haunting hoots are a common sound in the wilderness.',
    image: '/images/great_horned_owl.jpg',
    category: 'Common',
    habitat: [49.8951, -97.1384],
    diet: 'Rodents, birds, and reptiles',
    lifespan: '13 years',
    wingspan: '40-57 inches'
  },
  {
    name: 'Ruby-throated Hummingbird',
    description: 'The Ruby-throated Hummingbird is a tiny bird known for its iridescent feathers and rapid wing beats. It is the only hummingbird species that breeds in eastern North America. This bird can hover and fly backwards, feeding on nectar and insects. Its migration across the Gulf of Mexico is an incredible feat of endurance.',
    image: '/images/hummingbird.jpg',
    category: 'Common',
    habitat: [43.65107, -79.347015],
    diet: 'Nectar and small insects',
    lifespan: '3-5 years',
    wingspan: '3-4 inches'
  },
  {
    name: 'Red-tailed Hawk',
    description: 'The Red-tailed Hawk is a large bird of prey with a characteristic reddish tail. It soars high above open fields, hunting for rodents and other small animals. Its piercing call is a quintessential sound of the wild. Adaptable and widespread, this hawk is often seen perched along highways.',
    image: '/images/red_tailed_hawk.jpg',
    category: 'Common',
    habitat: [40.7128, -74.0060],
    diet: 'Rodents, birds, and reptiles',
    lifespan: '10-20 years',
    wingspan: '43-57 inches'
  },
  {
    name: 'Western Meadowlark',
    description: 'The Western Meadowlark is a cheerful songbird with bright yellow plumage and a distinctive black "V" on its chest. Found in grasslands and prairies, it builds its nest on the ground. Its flute-like song is a hallmark of open spaces, and it plays a crucial role in controlling insect populations.',
    image: '/images/western_meadowlark.jpg',
    category: 'Common',
    habitat: [45.5088, -73.5878],
    diet: 'Insects and seeds',
    lifespan: '6 years',
    wingspan: '14-16 inches'
  },
  {
    name: 'Yellow Warbler',
    description: 'The Yellow Warbler is a bright, sunny bird that flits among shrubs and trees, singing a sweet melody. Found across North America, it thrives in wetlands and forests. This insectivorous bird plays a vital role in pest control and is a joy to birdwatchers during its summer breeding season.',
    image: '/images/yellow_warbler.jpg',
    category: 'Common',
    habitat: [49.2827, -123.1207],
    diet: 'Insects and caterpillars',
    lifespan: '6-10 years',
    wingspan: '6-8 inches'
  }
];

const BirdCard = ({ bird }) => (
  <div className="bird-card">
    <img src={bird.image} alt={bird.name} className="bird-image" />
    <div className="bird-info">
      <h3>{bird.name}</h3>
      <p>{bird.description}</p>
    </div>
  </div>
);

const RandomBird = ({ bird }) => (
  <div className="random-bird-details">
    <div className="random-bird-image">
      <img src={bird.image} alt={bird.name} />
    </div>
    <div className="random-bird-info">
      <h3>{bird.name}</h3>
      <p>{bird.description}</p>
      <ul>
        <li><strong>Diet:</strong> {bird.diet}</li>
        <li><strong>Lifespan:</strong> {bird.lifespan}</li>
        <li><strong>Wingspan:</strong> {bird.wingspan}</li>
        <li><strong>Habitat:</strong> {bird.habitat.join(', ')}</li>
      </ul>
    </div>
  </div>
);

const Birds = () => {
  const [filter, setFilter] = useState('All');
  const [randomBird, setRandomBird] = useState(birds[0]);

  const filteredBirds = filter === 'All' ? birds : birds.filter(bird => bird.category === filter);

  const getRandomBird = () => {
    const randomIndex = Math.floor(Math.random() * birds.length);
    setRandomBird(birds[randomIndex]);
  };

  return (
    <div className="birds-container">
      {/* Bird Video Banner */}
      <section className="banner">
        <div className="banner-overlay">
          <div className="banner-content">
            <h1>Discover the Beauty of Birds</h1>
            <p>Explore breathtaking landscapes and the magnificent birds that inhabit Canada's wilderness.</p>
            <a href="#featured" className="btn">Start Exploring</a>
          </div>
        </div>
        <video autoPlay loop muted>
          <source src="/videos/bird-video.mp4" type="video/mp4" />
        </video>
      </section>

      {/* Bird Categories Filter */}
      <div className="category-buttons">
        <button onClick={() => setFilter('All')}>All Birds</button>
        <button onClick={() => setFilter('Common')}>Common Birds</button>
        <button onClick={() => setFilter('Endangered')}>Endangered Birds</button>
      </div>

      {/* Bird Grid */}
      <div className="bird-grid">
        {filteredBirds.map((bird, index) => (
          <BirdCard key={index} bird={bird} />
        ))}
      </div>

      {/* Random Bird Section */}
      <section className="random-bird">
        <h3>Random Bird of the Day</h3>
        <RandomBird bird={randomBird} />
        <button onClick={getRandomBird} className="btn">Get Random Bird</button>
      </section>

      {/* Bird Habitat Map */}
      <section id="map" className="map-section">
        <h2>Bird Habitat Map</h2>
        <MapContainer center={[45.4215, -75.6992]} zoom={4} style={{ width: '100%', height: '400px' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {birds.map((bird, index) => (
            <Marker key={index} position={bird.habitat} icon={icon({ iconUrl: '/images/bird-icon.png', iconSize: [30, 30] })}>
              <Popup>
                <h3>{bird.name}</h3>
                <p>{bird.description}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </section>

      {/* Additional Bird Facts */}
      <section className="bird-facts">
        <h3>Did You Know?</h3>
        <ul>
          <li>Canada is home to over 450 species of birds!</li>
          <li>Birdwatching is one of the fastest-growing hobbies worldwide.</li>
          <li>Many species of birds migrate thousands of kilometers every year.</li>
          <li>The Peregrine Falcon is the fastest animal in the world, reaching speeds of over 240 mph during a dive.</li>
        </ul>
      </section>
    </div>
  );
};

export default Birds;

