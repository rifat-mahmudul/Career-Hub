import { useEffect, useState } from 'react'
import Job from '../Job/Job';

const Jobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() =>{
        fetch('../../../public/Data.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[]);


    return (
        <section className='pb-16'>

            <div className="text-center">
                <h1 className="font-extrabold text-5xl mb-4">Job Category List</h1>
                <p className="text-gray-500 mb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='max-w-[90%] xl:max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {jobs.slice(0,6).map(job => <Job key={job.id} job={job}></Job>)}
            </div>

            <div className='text-center mt-16 '>
                <button href="#_" className="relative px-6 py-3 font-bold text-black group">
                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                    <span className="relative">See All Jobs</span>
                </button>
            </div>

        </section>
    )
}

export default Jobs
