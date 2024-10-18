const getStoredApplication = () => {
    const storedApplication = localStorage.getItem('job-application');
    if(storedApplication){
        return JSON.parse(storedApplication);
    }
}

const saveJobApplication = id =>{
    const storedApplications = getStoredApplication();
    const isExist = storedApplications.find(jobId => jobId == id);
    if(!isExist){
        storedApplications.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedApplications));
    }
}

export {getStoredApplication, saveJobApplication}