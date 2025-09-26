import LayoutOfAbout from "@/component/module/about/layoutOfAbout";
import LayoutOfExperience from "@/component/module/experience/layoutOfExperience";
import LayoutOfHero from "@/component/module/hero/heroLayout";
import LayoutOfProject from "@/component/module/project/layoutOfProject";

function Home() {
    return (
        <div>
            <LayoutOfHero />
            <LayoutOfAbout />
            <LayoutOfExperience />
            <LayoutOfProject />

        </div>
    );
}

export default Home;