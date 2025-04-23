import drImage from '../assets/doctor-sample.png';
const DoctorProfile = () => {
  // const {
  //   regNo,
  //   name,
  //   image,
  //   education,
  //   speciality,
  //   experience,
  //   designation,
  //   availability,
  // } = doctor;
  
  return (
    <div>
      {/* Doctors profile */}
      <section className="w-6xl mx-auto bg-white text-center px-14 py-16 rounded-2xl space-y-3">
        <h1 className="font-bold text-4xl">Doctor's Profile Details </h1>
        <p className="text-gray-600">All the doctors are life saver man. They comes by the law of Allah subahnahu ta ala. They always try to rescue our life from danger. They are the great man in the world's</p>
      </section>

      <section className='flex w-6xl mx-auto px-14 py-10 bg-white my-10 rounded-2xl gap-5'>
        <div>
          <img src={drImage} alt="" />
        </div>
        <div className='space-y-4 py-5'>
          <h3 className='font-bold text-2xl'>Dr. Cameron Williamson</h3>
          <p className='text-gray-600'>MBBS, MD </p>
          <p className='text-gray-600'>General Medicine, DNB</p>
          <p className='text-gray-600'>Working at </p>
          <h4 className='font-bold text-md'>TMSS Medical College & Rafatullah Community Hospital, Bogura</h4>
          <p className='text-gray-600'>Reg No: BD 12451254</p>

          <div className='flex gap-5 items-center'>
            <p className='font-bold'>Availability</p>
            <p className='bg-orange-50 border-1 border-orange-400 px-4 py-2 rounded-3xl text-orange-500'>Sunday</p>
            <p className='bg-orange-50 border-1 border-orange-400 px-4 py-2 rounded-3xl text-orange-500'>Monday</p>
            <p className='bg-orange-50 border-1 border-orange-400 px-4 py-2 rounded-3xl text-orange-500'>Thursday</p>
          </div>
          <p className='space-x-5'>Consultant Fee: 
            <span className='font-bold text-blue-600 ml-4'>Taka: 273</span>
            <span className='text-gray-500'>(incl.vat)</span>
            <span className='font-bold text-blue-600'>Per consultant</span></p>
        </div>
      </section>

      <section className='w-6xl mx-auto px-14 py-10 bg-white text-center space-y-5 rounded-2xl'>
        <h1 className='font-bold text-2xl'>Book an Appoinment</h1>
        <div className='flex justify-between border-1 border-dashed border-gray-500 p-2 rounded-md items-center'>
          <p className='font-bold'>Availability</p>
          <p className='bg-green-100 px-4 py-2 rounded-3xl text-green-800'>Doctor Available Today</p>
        </div>
        <p className='bg-orange-100 text-orange-400 rounded-md p-1'>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
        <button className='btn btn-primary font-bold text-white w-full rounded-3xl'>Book Appointment Now</button>
      </section>
    </div>
  );
};

export default DoctorProfile;
