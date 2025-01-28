const RestaurantCard = ({ restaurant }) => (
  <div className="border p-4 rounded-lg shadow-md">
    <h2 className="text-xl font-bold">{restaurant.name}</h2>
    <p className="text-gray-700">Rating: {restaurant.rating}</p>
    <img src={restaurant.logo} alt={restaurant.name} className="w-full h-48 object-cover mt-2 rounded" />
    <p className={`mt-2 ${restaurant.status === 'Open Now' ? 'text-green-500' : 'text-red-500'}`}>
      {restaurant.status}
    </p>
  </div>
);

export default RestaurantCard;