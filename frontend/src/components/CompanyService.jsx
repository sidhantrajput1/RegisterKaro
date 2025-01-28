import Oracle from './../assets/CompanyImg/Oracle_logo.png'
import Segment from './../assets/CompanyImg/segmentLogo.png'
import Monday from './../assets/CompanyImg/MondayLogo.png'
import Sumsung from './../assets/CompanyImg/SumsungLogo.png'

function CompanyService() {
    return (
        <div className=" mt-8 flex flex-col gap-6 mx-auto max-w-7xl items-center">
            <h3>Trusted By Over 100+ Startups and freelance business</h3>
            <div className="company flex gap-10">
                <img className='w-[150px]' src={Oracle} alt="" />
                <img className='w-[150px]' src={Segment} alt="" />
                <img className='w-[150px]' src={Sumsung} alt="" />
                <img className='w-[150px]' src={Monday} alt="" />
                <img className='w-[150px]' src={Segment} alt="" />
            </div>
        </div>
    )
}

export default CompanyService
