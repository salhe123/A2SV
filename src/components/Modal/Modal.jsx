import { useState } from 'react';

export default function Modal({ isOpen, onClose }) {
  const [foodName, setFoodName] = useState('');
  const [foodRating, setFoodRating] = useState('');
  const [foodImage, setFoodImage] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantLogo, setRestaurantLogo] = useState('');
  const [restaurantStatus, setRestaurantStatus] = useState('Open Now');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!foodName) newErrors.foodName = 'Food Name is required';
    if (!foodRating || isNaN(foodRating)) newErrors.foodRating = 'Food Rating must be a number';
    if (!foodImage) newErrors.foodImage = 'Food Image URL is required';
    if (!restaurantName) newErrors.restaurantName = 'Restaurant Name is required';
    if (!restaurantLogo) newErrors.restaurantLogo = 'Restaurant Logo URL is required';
    if (!['Open Now', 'Closed'].includes(restaurantStatus)) newErrors.restaurantStatus = 'Restaurant Status must be "Open Now" or "Closed"';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission (e.g., save data to state or API)
      console.log({
        foodName,
        foodRating,
        foodImage,
        restaurantName,
        restaurantLogo,
        restaurantStatus,
      });
      onClose(); // Close the modal after submission
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-[612px]">
        <h2 className="text-2xl font-bold mb-4">Add Food</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Food Name</label>
            <input
              type="text"
              name="food_name"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter food name"
            />
            {errors.foodName && <p className="text-red-500 text-sm">{errors.foodName}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Food Rating</label>
            <input
              type="number"
              name="food_rating"
              value={foodRating}
              onChange={(e) => setFoodRating(e.target.value)}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter food rating"
            />
            {errors.foodRating && <p className="text-red-500 text-sm">{errors.foodRating}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Food Image URL</label>
            <input
              type="text"
              name="food_image"
              value={foodImage}
              onChange={(e) => setFoodImage(e.target.value)}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter food image URL"
            />
            {errors.foodImage && <p className="text-red-500 text-sm">{errors.foodImage}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Restaurant Name</label>
            <input
              type="text"
              name="restaurant_name"
              value={restaurantName}
              onChange={(e) => setRestaurantName(e.target.value)}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter restaurant name"
            />
            {errors.restaurantName && <p className="text-red-500 text-sm">{errors.restaurantName}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Restaurant Logo URL</label>
            <input
              type="text"
              name="restaurant_logo"
              value={restaurantLogo}
              onChange={(e) => setRestaurantLogo(e.target.value)}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter restaurant logo URL"
            />
            {errors.restaurantLogo && <p className="text-red-500 text-sm">{errors.restaurantLogo}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Restaurant Status</label>
            <select
              name="restaurant_status"
              value={restaurantStatus}
              onChange={(e) => setRestaurantStatus(e.target.value)}
              className="w-full p-2 border rounded-lg"
            >
              <option value="Open Now">Open Now</option>
              <option value="Closed">Closed</option>
            </select>
            {errors.restaurantStatus && <p className="text-red-500 text-sm">{errors.restaurantStatus}</p>}
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}