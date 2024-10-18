import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";

import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Job = ({job}) => {

    const {id, img, title, job_name, job_type, location, salary} = job;

    return (
        <section>
            <div className=" p-4 border border-gray-400 rounded-lg shadow-xl text-gray-500">
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

                <div className="mt-6">
                    <Link to={`/job/${id}`} href="#_" className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
                        <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                        <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                        <span className="relative z-20 flex items-center text-sm">
                        <svg className="relative w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        View Details
                    </span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

Job.propTypes = {
    job : PropTypes.object,
}

export default Job
