import image from '../assets/banner-img-1.png'
import cardImage from '../assets/doctor-sample.png';
import icon from '../assets/success-review.png'
const Home = () => {
  return (
    <div>
      <div className="w-7xl mx-auto text-center my-5 space-y-3 border-3 border-white p-10 rounded-3xl shadow-sm bg-linear-to-b from-gray-100 to-white ">
        <h1 className="text-4xl font-bold">Dependable Care, Backed by Trusted <br />Professionals.</h1>
        <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
        <div className="flex gap-5 justify-center">
          <label className="input rounded-3xl">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" className="px-10" required placeholder="Search any doctor...." />
          </label>
          <button className="btn btn-primary rounded-3xl text-white">Search Now</button>
        </div>


        <div className='flex gap-10 my-10'>
          <img src={image} alt="" />
          <img src={image} alt="" />
        </div>
      </div>



      <div className="w-7xl mx-auto text-center my-5 p-10">
        <div className='space-y-3'>
          <h1 className='text-4xl font-bold'>Our Best Doctor</h1>
          <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
        </div>

        <div className='my-10 grid grid-cols-3 gap-5'>
          <div className="card bg-base-100 w-96 shadow-sm  rounded-2xl">
            <figure className="px-5 pt-10">
              <img
                src={cardImage}
                alt="Shoes"
                className="rounded-xl " />
            </figure>
            <div className="card-body">
              <div className='flex justify-start gap-5'>
                <h4 className='bg-green-100 px-4 py-2 rounded-3xl text-green-800'>Available</h4>
                <h4 className='bg-blue-100 px-4 py-2 rounded-3xl text-blue-800'>5+ Years experience</h4>
              </div>

              <div className='text-start space-y-2'>
                <h3 className='font-bold text-xl'>Dr.Cameron Williamson</h3>
                <p className='text-gray-500'>MBBS, MD - General Medicine, DNB</p>
                <p className='text-gray-500'>Reg No: BD 12451254</p>
                <div className="card-actions">
                  <button className="btn w-full rounded-3xl text-blue-500 font-bold text-md border border-blue-500">View Details</button>
                </div>
              </div>
            </div>
          </div>


          <div className="card bg-base-100 w-96 shadow-sm  rounded-2xl">
            <figure className="px-5 pt-10">
              <img
                src={cardImage}
                alt="Shoes"
                className="rounded-xl " />
            </figure>
            <div className="card-body">
              <div className='flex justify-start gap-5'>
                <h4 className='bg-green-100 px-4 py-2 rounded-3xl text-green-800'>Available</h4>
                <h4 className='bg-blue-100 px-4 py-2 rounded-3xl text-blue-800'>5+ Years experience</h4>
              </div>

              <div className='text-start space-y-2'>
                <h3 className='font-bold text-xl'>Dr.Cameron Williamson</h3>
                <p className='text-gray-500'>MBBS, MD - General Medicine, DNB</p>
                <p className='text-gray-500'>Reg No: BD 12451254</p>
                <div className="card-actions">
                  <button className="btn w-full rounded-3xl text-blue-500 font-bold text-md border border-blue-500">View Details</button>
                </div>
              </div>
            </div>
          </div>


          <div className="card bg-base-100 w-96 shadow-sm  rounded-2xl">
            <figure className="px-5 pt-10">
              <img
                src={cardImage}
                alt="Shoes"
                className="rounded-xl " />
            </figure>
            <div className="card-body">
              <div className='flex justify-start gap-5'>
                <h4 className='bg-green-100 px-4 py-2 rounded-3xl text-green-800'>Available</h4>
                <h4 className='bg-blue-100 px-4 py-2 rounded-3xl text-blue-800'>5+ Years experience</h4>
              </div>

              <div className='text-start space-y-2'>
                <h3 className='font-bold text-xl'>Dr.Cameron Williamson</h3>
                <p className='text-gray-500'>MBBS, MD - General Medicine, DNB</p>
                <p className='text-gray-500'>Reg No: BD 12451254</p>
                <div className="card-actions">
                  <button className="btn w-full rounded-3xl text-blue-500 font-bold text-md border border-blue-500">View Details</button>
                </div>
              </div>
            </div>
          </div>


          <div className="card bg-base-100 w-96 shadow-sm  rounded-2xl">
            <figure className="px-5 pt-10">
              <img
                src={cardImage}
                alt="Shoes"
                className="rounded-xl " />
            </figure>
            <div className="card-body">
              <div className='flex justify-start gap-5'>
                <h4 className='bg-green-100 px-4 py-2 rounded-3xl text-green-800'>Available</h4>
                <h4 className='bg-blue-100 px-4 py-2 rounded-3xl text-blue-800'>5+ Years experience</h4>
              </div>

              <div className='text-start space-y-2'>
                <h3 className='font-bold text-xl'>Dr.Cameron Williamson</h3>
                <p className='text-gray-500'>MBBS, MD - General Medicine, DNB</p>
                <p className='text-gray-500'>Reg No: BD 12451254</p>
                <div className="card-actions">
                  <button className="btn w-full rounded-3xl text-blue-500 font-bold text-md border border-blue-500">View Details</button>
                </div>
              </div>
            </div>
          </div>


          <div className="card bg-base-100 w-96 shadow-sm  rounded-2xl">
            <figure className="px-5 pt-10">
              <img
                src={cardImage}
                alt="Shoes"
                className="rounded-xl " />
            </figure>
            <div className="card-body">
              <div className='flex justify-start gap-5'>
                <h4 className='bg-green-100 px-4 py-2 rounded-3xl text-green-800'>Available</h4>
                <h4 className='bg-blue-100 px-4 py-2 rounded-3xl text-blue-800'>5+ Years experience</h4>
              </div>

              <div className='text-start space-y-2'>
                <h3 className='font-bold text-xl'>Dr.Cameron Williamson</h3>
                <p className='text-gray-500'>MBBS, MD - General Medicine, DNB</p>
                <p className='text-gray-500'>Reg No: BD 12451254</p>
                <div className="card-actions">
                  <button className="btn w-full rounded-3xl text-blue-500 font-bold text-md border border-blue-500">View Details</button>
                </div>
              </div>
            </div>
          </div>


          <div className="card bg-base-100 w-96 shadow-sm  rounded-2xl">
            <figure className="px-5 pt-10">
              <img
                src={cardImage}
                alt="Shoes"
                className="rounded-xl " />
            </figure>
            <div className="card-body">
              <div className='flex justify-start gap-5'>
                <h4 className='bg-green-100 px-4 py-2 rounded-3xl text-green-800'>Available</h4>
                <h4 className='bg-blue-100 px-4 py-2 rounded-3xl text-blue-800'>5+ Years experience</h4>
              </div>

              <div className='text-start space-y-2'>
                <h3 className='font-bold text-xl'>Dr.Cameron Williamson</h3>
                <p className='text-gray-500'>MBBS, MD - General Medicine, DNB</p>
                <p className='text-gray-500'>Reg No: BD 12451254</p>
                <div className="card-actions">
                  <button className="btn w-full rounded-3xl text-blue-500 font-bold text-md border border-blue-500">View Details</button>
                </div>
              </div>
            </div>
          </div>


          <div className="card bg-base-100 w-96 shadow-sm  rounded-2xl">
            <figure className="px-5 pt-10">
              <img
                src={cardImage}
                alt="Shoes"
                className="rounded-xl " />
            </figure>
            <div className="card-body">
              <div className='flex justify-start gap-5'>
                <h4 className='bg-green-100 px-4 py-2 rounded-3xl text-green-800'>Available</h4>
                <h4 className='bg-blue-100 px-4 py-2 rounded-3xl text-blue-800'>5+ Years experience</h4>
              </div>

              <div className='text-start space-y-2'>
                <h3 className='font-bold text-xl'>Dr.Cameron Williamson</h3>
                <p className='text-gray-500'>MBBS, MD - General Medicine, DNB</p>
                <p className='text-gray-500'>Reg No: BD 12451254</p>
                <div className="card-actions">
                  <button className="btn w-full rounded-3xl text-blue-500 font-bold text-md border border-blue-500">View Details</button>
                </div>
              </div>
            </div>
          </div>


          <div className="card bg-base-100 w-96 shadow-sm  rounded-2xl">
            <figure className="px-5 pt-10">
              <img
                src={cardImage}
                alt="Shoes"
                className="rounded-xl " />
            </figure>
            <div className="card-body">
              <div className='flex justify-start gap-5'>
                <h4 className='bg-green-100 px-4 py-2 rounded-3xl text-green-800'>Available</h4>
                <h4 className='bg-blue-100 px-4 py-2 rounded-3xl text-blue-800'>5+ Years experience</h4>
              </div>

              <div className='text-start space-y-2'>
                <h3 className='font-bold text-xl'>Dr.Cameron Williamson</h3>
                <p className='text-gray-500'>MBBS, MD - General Medicine, DNB</p>
                <p className='text-gray-500'>Reg No: BD 12451254</p>
                <div className="card-actions">
                  <button className="btn w-full rounded-3xl text-blue-500 font-bold text-md border border-blue-500">View Details</button>
                </div>
              </div>
            </div>
          </div>


          <div className="card bg-base-100 w-96 shadow-sm  rounded-2xl">
            <figure className="px-5 pt-10">
              <img
                src={cardImage}
                alt="Shoes"
                className="rounded-xl " />
            </figure>
            <div className="card-body">
              <div className='flex justify-start gap-5'>
                <h4 className='bg-green-100 px-4 py-2 rounded-3xl text-green-800'>Available</h4>
                <h4 className='bg-blue-100 px-4 py-2 rounded-3xl text-blue-800'>5+ Years experience</h4>
              </div>

              <div className='text-start space-y-2'>
                <h3 className='font-bold text-xl'>Dr.Cameron Williamson</h3>
                <p className='text-gray-500'>MBBS, MD - General Medicine, DNB</p>
                <p className='text-gray-500'>Reg No: BD 12451254</p>
                <div className="card-actions">
                  <button className="btn w-full rounded-3xl text-blue-500 font-bold text-md border border-blue-500">View Details</button>
                </div>
              </div>
            </div>
          </div>

        </div>

        <button className='btn btn-primary text-white font-bold rounded-3xl px-10'>View All Doctors</button>

      </div>

      <div className='w-7xl mx-auto text-center my-5 space-y-5 '>
        <div>
          <h2 className='font-bold text-2xl'>We Provide Best Medical Services</h2>
          <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
        </div>
      </div>
        <div className='w-13/15 mx-auto text-center my-5 flex justify-between gap-5'>
          <div className='w-[300px] bg-white px-10 py-10 rounded-2xl'>
            <img src={icon} alt="" />
            <h2 className='font-bold text-3xl text-start'>199+</h2>
            <p className='text-start'>Total Doctor</p>
          </div>
          <div className='w-[300px] bg-white px-10 py-10 rounded-2xl'>
            <img src={icon} alt="" />
            <h2 className='font-bold text-3xl text-start'>199+</h2>
            <p className='text-start'>Total Doctor</p>
          </div>
          <div className='w-[300px] bg-white px-10 py-10 rounded-2xl'>
            <img src={icon} alt="" />
            <h2 className='font-bold text-3xl text-start'>199+</h2>
            <p className='text-start'>Total Doctor</p>
          </div>
          <div className='w-[300px] bg-white px-10 py-10 rounded-2xl'>
            <img src={icon} alt="" />
            <h2 className='font-bold text-3xl text-start'>199+</h2>
            <p className='text-start'>Total Doctor</p>
          </div>
        </div>

      </div>


  );
};

export default Home;
