import LeftContact from "./leftContact";
import RightContact from "./rightContact";

function LayoutOfContact() {
    return (
        <div className="dark:bg-black bg-white pb-20 pt-20 lg:px-8 text-white overflow-hidden border-b-[1px] border-transparent px-8 [border-image:linear-gradient(to_right,#0D1224,#9ca3af,#0D1224)_1] flex flex-col lg:flex-row">
            <LeftContact />
            <RightContact />
        </div>
    );
}

export default LayoutOfContact;