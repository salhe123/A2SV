import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from '../components/Modal';

const AddFood = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleSave = (event) => {
    event.preventDefault();
    // Handle form submission logic
    handleCloseModal();
  };

  return (
    <div>
      <Header />
      <main className="p-4">
        <button onClick={handleOpenModal} className="bg-blue-500 text-white py-2 px-4 rounded">Add Food</button>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} onSave={handleSave} />
      </main>
      <Footer />
    </div>
  );
};

export default AddFood;