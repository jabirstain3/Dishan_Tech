import CommonFooter from "@/components/shared/footer/CommonFooter";
import CommonNavbar from "@/components/shared/navbar/CommonNavbar";
import Image from "next/image";

export const TheLogo = () => {
    return (
        <Image src="https://dishantech.com/wp-content/uploads/2023/08/Dishan-Tech-300-x-84.png" alt="Dishan Tech" width={300} height={80}/>
    );
};

const layout = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            {/* top navbar */}
            <div>
                <div className=" w-full max-w-[1536px] mx-auto px-6 py-1 md:flex  justify-between text-sm" >
                    <div className=" w-fit mx-auto md:mx-0">
                        <p>
                            +88 01828 004746 | mrjabir229@gmail.com
                        </p>
                    </div>

                    <div className=" w-fit mx-auto md:mx-0 flex gap-2">
                        <p>
                            f
                        </p>

                        <p>
                            Y
                        </p>
                    </div>

                </div>

                <div className="border-t-1 flex justify-center p-2">
                    <TheLogo/>
                </div>
            </div>

            {/* navbar */}
            <CommonNavbar />

            {/* main content */}
            <div className="min-h-screen">
                {children}
            </div>

            {/* footer */}
            <CommonFooter/>
        </div>
    );
};

export default layout;