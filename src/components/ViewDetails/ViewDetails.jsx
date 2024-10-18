import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { Link, useLoaderData, useParams } from 'react-router-dom'

const ViewDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams();
    const job = jobs.find(job => job.id == id)
    const {img, title, job_name, job_type, location, salary, email, phone, address} = job;

    return (
        <section className=" pt-16 pb-20">
            <div className="flex flex-col justify-center items-center">
                <div className=" w-[400px] p-4 border border-gray-400 rounded-lg shadow-xl text-gray-500">
                    <figure>
                        <img
                        className='h-[90px] w-full'
                        src={img}
                        alt="Shoes" />
                    </figure>
                    <div>
                        <h2 className="font-bold text-xl mt-5">{title}</h2>
                        <p className='mt-3 text-gray-500'>{job_name}</p>
                        <button className='border border-primary py-2 px-5 mt-4 rounded-md text-primary font-bold'>{job_type}</button>
                    </div>

                    <div className="flex gap-6 mt-4">
                        <p className="flex gap-2 items-center">
                            <CiLocationOn />
                            <span>{location}</span>
                        </p>

                        <p className="flex gap-2 items-center">
                            <CiDollar />
                            <span>Salary : {salary}</span>
                        </p>
                    </div>

                    <p className="mt-4 text-black font-semibold">Email : {email}</p>
                    <p className="mt-3 mb-3 text-black font-semibold">Phone : {phone}</p>
                    <p className="text-black font-semibold">Address : {address}</p>

                    <button className="mt-5">
                        <Link to={'/'} href="#_" className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-primary rounded-lg group">
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                            <span className="relative">Back Home</span>
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ViewDetails
