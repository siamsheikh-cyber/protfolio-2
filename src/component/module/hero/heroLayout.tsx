import LeftHero from "./heroLeft";
import RightHero from "./heroRight";

function LayoutOfHero() {
    return (
        <div className="flex flex-col md:flex-row gap-4 p-8 pt-22 ">

            <div className="md:basis-[60%] w-full dark:bg-none pt-14 bg-[url(../public/ex-2.png)] bg-cover bg-top" >
                <LeftHero />
            </div >

            <div className="md:basis-[40%] w-full">
                <RightHero />
            </div>
        </div >

    );
}

export default LayoutOfHero;