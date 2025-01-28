import RestaurantCard from './RestaurantCard';
import { restaurants } from '../../utils/constants';

export default function FeaturedRestaurants() {
  return (
    <section className="w-full h-[1274px] bg-white py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <RestaurantCard key={index} {...restaurant} />
          ))}
        </div>
      </div>
    </section>
  );
}