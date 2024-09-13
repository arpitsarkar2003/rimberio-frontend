import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

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
    return <div>Loading...</div>;
  }

  if (!filterDoc) {
    return <div>Doctor not found.</div>;
  }


  return (
    <div className='pt-10'>
      {/* Doctor Details */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img src={filterDoc.image || '/images/default-doctor.png'} className='bg-lime-500 max-w-[400px] rounded-lg' alt={filterDoc.name} />
        </div>

        <div>
          <h1>
            {filterDoc.name}
            <img src="/images/verified_icon.svg" alt="" title='Verified'/>
          </h1>

          <div>
            <p>{filterDoc.degree} - {filterDoc.speciality}</p>
            <button>{filterDoc.experience}</button>
          </div>

          <div>
            <p> About <img src='/images/info_icon.svg' alt="" /></p>
            <p>{filterDoc.about}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appoientment