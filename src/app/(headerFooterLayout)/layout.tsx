import CommonNavbar from "@/components/shared/navbar/CommonNavbar";


const layout = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            <CommonNavbar />

            <div className="min-h-screen">
                {children}
            </div>
            
            <h1>Footer</h1>
        </div>
    );
};

export default layout;