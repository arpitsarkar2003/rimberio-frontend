import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Rating from '../common/Rating';

function Appoientment() {

  const [filterDoc, setFilterDoc] = useState(null);
  const [loading, setLoading] = useState(true);
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);

  const fetchDocInfo = async () => {
    setLoading(true);
    const docInfo = doctors.find(doc => doc._id === docId);
    setFilterDoc(docInfo);
    setLoading(false);
  }

  useEffect(() => {
    fetchDocInfo();
  }, [docId, doctors]);

  if (loading) {
    return <div className='flex justify-center items-center min-h-screen'>
      <img src='/spinner.gif' alt='Loading...' className='w-24' />
    </div>;
  }

  if (!filterDoc) {
    return <div>Doctor not found.</div>;
  }


  return (
    <div className='pt-10'>
      {/* Doctor Details */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img src={filterDoc.image || '/images/default-doctor.png'} className='bg-lime-500 w-full rounded-lg' alt={filterDoc.name} />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          <h1 className='flex items-center gap-2 text-2xl font-bold font-customcali italic'>
            <span className='pt-1 tracking-wide'>{filterDoc.name}</span>
            <img src="/images/verified_icon.svg" alt="" title='Verified' className='w-5' />
          </h1>

          <div className='flex items-center gap-2 mt-1'>
            <span>Status :</span>
            <p className={`${filterDoc.isAvailable === 'Available' ? 'text-green-500' : 'text-red-500'}`}>
              {filterDoc.isAvailable}
            </p>
          </div>



          <div className='flex flex-col gap-2 text-lg text-gray-600 mt-1 font-medium'>
            <div> <span>Degree : </span> <span className='font-bold tracking-wide'>{filterDoc.degree}</span></div>
            <div> <span>Speciality : </span> <span className='font-bold tracking-wide'>{filterDoc.speciality}</span></div>
            <div> <span>Years Of Experience : </span> <span className='font-bold'>{filterDoc.experience}</span></div>
            <div className='flex items-center'><Rating rating={filterDoc.rating} /> ({filterDoc.rating})</div>
          </div>

          <div>
            <p className='flex items-center gap-1 text-base font-medium text-gray-800'>
              <span className='pt-2'>About</span>
              <img src='/images/info_icon.svg' alt="" />
            </p>
            <p className=' text-gray-500 max-w-[700px] mt-1 tracking-wide'>{filterDoc.about}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appoientment