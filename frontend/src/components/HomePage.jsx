import CompanyService from "./CompanyService"
import { HeroPage } from "./HeroPage"
import { NavBar } from "./Shared/NavBar"

function HomePage() {
    return (
        <div>
            <NavBar />
            <HeroPage />
            <CompanyService />
        </div>
    )
}

export default HomePage
