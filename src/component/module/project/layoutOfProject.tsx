import BottomProject from "./bottomProject";
import TopProject from "./topProject";


function LayoutOfProject() {
    return (
        <div className="p-8 mt-10 sm:mt-20 mb-0 sm:mb-10 md:mb-20">
            <TopProject />
            <BottomProject />

        </div>
    );
}

export default LayoutOfProject;