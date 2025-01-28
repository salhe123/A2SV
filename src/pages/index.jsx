import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedRestaurants from '../components/FeaturedRestaurants';

const Home = () => {
  const sampleRestaurants = [
    {
      id: 1,
      name: '$2.99',
      rating: 4.5,
      logo: 'https://images.app.goo.gl/G8tA7EnWpsMFp6jv9',
      status: 'Open Now',
    },
    {
      id: 2,
      name: '$5.99',
      rating: 4.0,
      logo: 'https://images.app.goo.gl/G8tA7EnWpsMFp6jv9',
      status: 'Closed',
    },
    {
      id: 3,
      name: '$3.99',
      rating: 4.8,
      logo: 'https://images.app.goo.gl/G8tA7EnWpsMFp6jv9',
      status: 'Open Now',
    },
    {
        id: 4,
        name: '$2.99',
        rating: 4.5,
        logo: 'https://via.placeholder.com/150',
        status: 'Open Now',
      },
      {
        id: 5,
        name: '$5.99',
        rating: 4.0,
        logo: 'https://via.placeholder.com/150',
        status: 'Closed',
      },
      {
        id: 6,
        name: '$3.99',
        rating: 4.8,
        logo: 'https://via.placeholder.com/150',
        status: 'Open Now',
      },
  ];

  return (
    <div>
      <Header />
      <main className="p-4">
        {/* <h1 className="text-3xl font-bold mb-4">Welcome to the Food App</h1> */}
        <FeaturedRestaurants restaurants={sampleRestaurants} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;