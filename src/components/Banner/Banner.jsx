import { Link } from 'react-router-dom';
import image from '../../assets/images/user.png'

function Banner() {
    return (
            <section className='pb-16'>
                <div className="max-w-[90%] xl:max-w-6xl mx-auto sm:flex justify-between items-center">
                    <div className='sm:w-[45%]'>
                        <h1 className='text-5xl font-extrabold'>One Step Closer To Your <span className='class="text-2xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%'>Dream Job</span></h1>
                        <p className='text-gray-500 mt-4 mb-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        
                        <Link href="#_" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Get Start</span>
                            <span className="relative invisible">Get Start</span>
                        </Link>
                    </div>

                    <div className='sm:w-[45%]'>
                        <img src={image} alt="" />
                    </div>
            </div>
            </section>
    );
}

export default Banner;
