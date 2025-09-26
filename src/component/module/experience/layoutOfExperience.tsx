import RightExperience from "./leftExperience";
import LeftExperience from "./rightExperience";

function LayoutOfExperience() {
    return (
        <div className="flex flex-col gap-25 lg:flex-row lg:items-start p-8 pt-20 md:pt-45">

            <RightExperience />
            <LeftExperience />
        </div>
    );
}

export default LayoutOfExperience;