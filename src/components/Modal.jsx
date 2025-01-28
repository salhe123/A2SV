const Modal = ({ isOpen, onClose, onSave }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Add Food</h2>
        <form onSubmit={onSave} className="space-y-4">
          <label className="block">
            Food Name:
            <input name="food_name" type="text" required className="block w-full mt-1 p-2 border rounded" />
          </label>
          <label className="block">
            Food Rating:
            <input name="food_rating" type="number" required className="block w-full mt-1 p-2 border rounded" />
          </label>
          <label className="block">
            Food Image URL:
            <input name="food_image" type="url" required className="block w-full mt-1 p-2 border rounded" />
          </label>
          <div className="flex space-x-4">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Save</button>
            <button type="button" onClick={onClose} className="bg-gray-500 text-white py-2 px-4 rounded">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;