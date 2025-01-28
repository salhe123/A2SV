import RestaurantCard from './RestaurantCard';

const FeaturedRestaurants = ({ restaurants }) => {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Featured Restaurants</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedRestaurants;