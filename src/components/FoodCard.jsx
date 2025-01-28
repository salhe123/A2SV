const FoodCard = ({ food }) => (
  <div className="border p-4 rounded-lg shadow-md">
    <h2 className="text-xl font-bold">{food.name}</h2>
    <p className="text-gray-700">Rating: {food.rating}</p>
    <img src={food.image} alt={food.name} className="w-full h-48 object-cover mt-2 rounded" />
  </div>
);

export default FoodCard;