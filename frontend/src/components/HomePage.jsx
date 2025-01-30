import About from "./About"
import CompanyService from "./CompanyService"
import { HeroPage } from "./HeroPage"
import OurService from "./OurService"
import Footer from "./Shared/Footer"
import { NavBar } from "./Shared/NavBar"
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
            <Footer />
        </div>
    )
}

export default HomePage
