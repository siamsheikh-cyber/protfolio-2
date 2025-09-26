import RightExperience from "./leftExperience";
import LeftExperience from "./rightExperience";

function LayoutOfExperience() {
    return (
        <div className="flex flex-col gap-25 md:flex-row p-8 pt-45">

            <RightExperience />
            <LeftExperience />
        </div>
    );
}

export default LayoutOfExperience;