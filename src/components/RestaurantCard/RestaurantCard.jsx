export default function RestaurantCard({ name, rating, status, price, image }) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-4">
        <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg" />
        <h2 className="text-xl font-bold mt-4">{name}</h2>
        <p className="text-gray-600">Rating: {rating}</p>
        <p className="text-gray-600">Status: {status}</p>
        <p className="text-gray-600">Price: {price}</p>
      </div>
    );
  }