// import Oracle from './../assets/CompanyImg/Oracle_logo.png';
import Oracle from "./../assets/img/udemy.png";
// import Segment from './../assets/CompanyImg/segmentLogo.png';
// import Monday from './../assets/CompanyImg/MondayLogo.png';
// import Sumsung from './../assets/CompanyImg/SumsungLogo.png';

function CompanyService() {
    return (
        <div className="bg-white py-10 flex flex-col gap-10 mx-auto max-w-7xl items-center">
            <h3 className="font-bold text-xl text-center px-5 md:px-0">
                Trusted By Over 100+ Startups and Freelance Businesses
            </h3>
            <div className="company grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center px-5">
                <img className="w-[120px] md:w-[150px]" src={Oracle} alt="Oracle Logo" />
                <img className="w-[120px] md:w-[150px]" src={Oracle} alt="Segment Logo" />
                <img className="w-[120px] md:w-[150px]" src={Oracle} alt="Samsung Logo" />
                <img className="w-[120px] md:w-[150px]" src={Oracle} alt="Monday Logo" />
                <img className="w-[120px] md:w-[150px]" src={Oracle} alt="Segment Logo" />
            </div>
        </div>
    );
}

export default CompanyService;
