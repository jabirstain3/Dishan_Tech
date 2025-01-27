import CommonNavbar from "@/components/shared/navbar/CommonNavbar";
import Image from "next/image";

export const AcmeLogo = () => {
    return (
        <Image src="https://dishantech.com/wp-content/uploads/2023/08/Dishan-Tech-300-x-84.png" alt="Dishan Tech" width={300} height={80}/>
    );
};

const layout = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>

            <div className="w-fit m-auto my-4">
                <AcmeLogo />
            </div>
            
            <CommonNavbar />

            <div className="min-h-screen">
                {children}
            </div>
            
            <h1>Footer</h1>
        </div>
    );
};

export default layout;