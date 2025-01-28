import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedRestaurants from '../components/FeaturedRestaurants';

const Home = () => {
  const sampleRestaurants = [
    {
      id: 1,
      name: 'Restaurant A',
      rating: 4.5,
      logo: 'https://via.placeholder.com/150',
      status: 'Open Now',
    },
    {
      id: 2,
      name: 'Restaurant B',
      rating: 4.0,
      logo: 'https://via.placeholder.com/150',
      status: 'Closed',
    },
    {
      id: 3,
      name: 'Restaurant C',
      rating: 4.8,
      logo: 'https://via.placeholder.com/150',
      status: 'Open Now',
    },
  ];

  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Food App</h1>
        <FeaturedRestaurants restaurants={sampleRestaurants} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;