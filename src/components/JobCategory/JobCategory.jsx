

const JobCategory = () => {
    return (
        <section className="py-16">
            <div className="text-center">
                <h1 className="font-extrabold text-5xl mb-4">Job Category List</h1>
                <p className="text-gray-500 mb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="max-w-[90%] xl:max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            
                <div className="bg-gray-200 p-2 rounded-lg text-center">
                    <img className="mx-auto" src='https://img.icons8.com/?size=100&id=rS0iQ61DOzEQ&format=png' alt="" />
                    <h3 className="mt-3 mb-3 font-bold text-xl">Account & Finance</h3>
                    <p className="text-gray-500">300 Jobs Available</p>
                </div>
            
                <div className="bg-gray-200 p-2 rounded-lg text-center">
                    <img className="mx-auto" src='https://img.icons8.com/?size=100&id=TNMFlPDNS18k&format=png' alt="" />
                    <h3 className="mt-3 mb-3 font-bold text-xl">Creative Design</h3>
                    <p className="text-gray-500">300 Jobs Available</p>
                </div>
            
                <div className="bg-gray-200 p-2 rounded-lg text-center">
                    <img className="mx-auto" src='https://img.icons8.com/?size=100&id=iV2d2QjFyUYL&format=png' alt="" />
                    <h3 className="mt-3 mb-3 font-bold text-xl">Marketing & Sales</h3>
                    <p className="text-gray-500">300 Jobs Available</p>
                </div>
            
                <div className="bg-gray-200 p-2 rounded-lg text-center">
                    <img className="mx-auto" src='https://img.icons8.com/?size=100&id=22990&format=png' alt="" />
                    <h3 className="mt-3 mb-3 font-bold text-xl">Engineering Job</h3>
                    <p className="text-gray-500">300 Jobs Available</p>
                </div>

            </div>
        </section>
    )
}

export default JobCategory
