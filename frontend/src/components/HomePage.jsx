import About from "./About"
import Company from "./Company"
import CompanyService from "./CompanyService"
import Connection from "./Connection"
import { HeroPage } from "./HeroPage"
import OurService from "./OurService"
import Footer from "./Shared/Footer"
import { NavBar } from "./Shared/NavBar"
import SubscribeBox from "./SubscribeBox"
import VideoIntroduction from "./VideoIntroduction"

function HomePage() {
    return (
        <div>
            <NavBar />
            <HeroPage />
            <CompanyService />
            <OurService />
            <About />
            <VideoIntroduction />
            <Connection />
            <SubscribeBox />
            <Company />
            <Footer />
        </div>
    )
}

export default HomePage
