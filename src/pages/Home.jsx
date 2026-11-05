import Hero from "../components/sections/Hero"
import FeaturedProjects from "../components/sections/FeaturedProjects";
import AboutPreview from "../components/sections/AboutPreview"
import SkillPreview from "../components/sections/SkillPreview"
import EducationPreview from "../components/sections/EducationPreview"
import Contact from "../components/sections/Contact";


function Home(){
    return(
        <>
            <Hero />
            <FeaturedProjects />
            <br />
            <AboutPreview />
            <br />
            <SkillPreview />
            <br />
            <EducationPreview />
            <br />
            <Contact />
        </>
    )
}

export default Home