import About from "./About"
import Application from "./Application"
import Company from "./Company"
import CompanyService from "./CompanyService"
import Connection from "./Connection"
import DigitalTransformation from "./DigitalTransformation"
import { HeroPage } from "./HeroPage"
import ManageApp from "./ManageApp"
import OurService from "./OurService"
import Footer from "./Shared/Footer"
import { NavBar } from "./Shared/NavBar"
import SubscribeBox from "./SubscribeBox"
import VideoIntroduction from "./VideoIntroduction"
import Accordian from "./Accordian"
import HappyClients from "./HappyClients"
import Corousel from "./Corousel"
import Test from "./test"

function HomePage() {
    return (
        <div className="">
            <NavBar />
            <HeroPage />
            <CompanyService />
            <OurService />
            <About />
            <VideoIntroduction />
            <HappyClients />
            <Application />
            <DigitalTransformation />
            <Accordian/>
            <ManageApp />
            <Connection />
            <SubscribeBox />
            <Company />
            <Footer />
            <Corousel/>
            <Test/>
        </div>
    )
}

export default HomePage
