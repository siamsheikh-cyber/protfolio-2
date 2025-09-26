import LeftAbout from "./leftAbout";
import RightAbout from "./rightAbout";

function LayoutOfAbout() {
    return (
        <>
            <div className="flex flex-col-reverse gap-5 items-center p-8 md:flex-row md:gap-0">

                <LeftAbout />
                <RightAbout />
            </div>
        </>
    );
}

export default LayoutOfAbout;