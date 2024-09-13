import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { specialityData } from '../common/assets';
import { FaFilter } from 'react-icons/fa'; // React Icons for filter
import Modal from 'react-modal'; // Import modal for mobile filters
import { IoSearch } from 'react-icons/io5';

function Doctors() {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAvailable, setIsAvailable] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false); // For filter modal in mobile view

  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    let filtered = doctors;
    if (speciality) {
      filtered = filtered.filter(item => item.speciality === speciality);
    }
    if (isAvailable) {
      filtered = filtered.filter(item => item.isAvailable); // Assuming `isAvailable` is a property
    }
    if (searchTerm) {
      filtered = filtered.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    setFilterDoc(filtered);
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality, isAvailable, searchTerm]);

  const removeAllFilters = () => {
    setSearchTerm('');
    setIsAvailable(false);
    navigate('/doctors'); // Reset the speciality filter
  };

  // Handling modal for mobile filter
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  // Check if any filter is applied to show "Remove All Filters" button
  const showRemoveFilterButton = searchTerm || isAvailable || speciality;

  return (
    <div className="container mx-auto p-6">

      {/* Search and Filters Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <div className="w-full sm:w-[40%]">
          <div className="flex items-center border">
            <input
              type="text"
              className="w-full p-2 italic focus:ring-2 focus:ring-green-300 focus:outline-none"
              placeholder="Search doctors by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="border-l p-3" onClick={() => applyFilter()}>
              <IoSearch />
            </button>
          </div>
        </div>

        {/* Mobile Filter Button */}
        <button className="sm:hidden p-2 bg-gray-200 rounded-md mt-4" onClick={openModal}>
          <FaFilter />
        </button>

        {/* Speciality Filter */}
        <div className="hidden sm:flex items-center gap-4">
          <select
            value={speciality || ''}
            onChange={(e) => navigate(`/doctors/${e.target.value}`)}
            className="border p-2 rounded-md"
          >
            <option value="">Speciality</option>
            {specialityData.map((item, index) => (
              <option key={index} value={item.speciality}>
                {item.speciality}
              </option>
            ))}
          </select>

          {/* Availability Filter */}
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={isAvailable}
              onChange={() => setIsAvailable(!isAvailable)}
              className="h-5 w-5 text-green-500 border-gray-300 rounded"
            />
            Available
          </label>
        </div>
      </div>

      {/* Remove All Filters Button */}
      {showRemoveFilterButton && (
        <button
          onClick={removeAllFilters}
          className="bg-red-500 text-white px-4 py-2 mb-4 rounded-md hover:bg-red-600 transition-all"
        >
          Remove All Filters
        </button>
      )}

      {/* Mobile Filter Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Filter Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="p-4">
          <h2 className="text-lg font-bold mb-4">Filters</h2>
          <div className="flex flex-col gap-4">
            {specialityData.map((item, index) => (
              <button
                key={index}
                onClick={() => { navigate(`/doctors/${item.speciality}`); closeModal(); }}
                className={`w-full pl-3 py-2 border border-gray-300 rounded-md transition-all cursor-pointer ${speciality === item.speciality ? 'bg-lime-200' : 'hover:bg-lime-200'}`}
              >
                {item.speciality}
              </button>
            ))}
            <label className="flex items-center gap-2 text-gray-900">
              <input
                type="checkbox"
                checked={isAvailable}
                onChange={() => setIsAvailable(!isAvailable)}
                className="h-5 w-5 text-green-500 border-gray-300 rounded"
              />
              Available
            </label>
            <button className="bg-lime-500 text-white px-4 py-2 rounded-md hover:bg-lime-600" onClick={() => { applyFilter(); closeModal(); }}>Apply Filters</button>
          </div>
        </div>
      </Modal>

      {/* Doctors List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5">
        {filterDoc.length > 0 ? (
          filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              key={index}
              className="border border-lime-300 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-300 hover:shadow-md group"
            >
              <img
                className="bg-lime-500 group-hover:bg-lime-700 transition-all duration-300 w-full"
                src={item.image}
                alt={item.name}
              />
              <div className="pb-4 pt-3 px-4">
                <div className="flex items-center gap-2 text-sm text-green-500">
                  <p className="w-2 h-2 rounded-full bg-green-500"></p>
                  <p>{item.isAvailable ? 'Available' : 'Not Available'}</p>
                </div>
                <p className="text-lg text-gray-900 font-bold group-hover:text-lime-800">{item.name}</p>
                <p className="text-sm text-gray-600">{item.speciality}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No doctors found</p>
        )}
      </div>
    </div>
  );
}

export default Doctors;
