import Image from "next/image";
import Link from "next/link";

export const TheLogo = () => {
    return (
        <Image src="https://dishantech.com/wp-content/uploads/2023/08/Dishan-Tech-300-x-84.png" alt="Dishan Tech" width={300} height={80}/>
    );
};

const CommonFooter = () => {
    return (
        <footer className=" w-full max-w-[1536px] mx-auto px-5 py-10 lg:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 justify-items-start lg:justify-items-center">
            <aside className=" w-fit">
                <div className="border w-[300px] rounded-lg mb-3 shadow-md">
                    <TheLogo/>
                </div>
                <p className="w-[300px]">Dishan Tech Ltd.<br/>House:53, Road:12, Sector 10, Uttara, Dhaka-1230, Bangladesh</p>
            </aside>

            <nav className=" w-40 font-medium text-lg grid grid-cols-1 gap-1">
                <h6 className="mb-2 font-semibold text-xl ">Services</h6>

                <Link className="hover:text-scnd active:text-scnd" href="#">Shop</Link> 
                <Link className="hover:text-scnd active:text-scnd" href="#">Upcoming</Link> 
                <Link className="hover:text-scnd active:text-scnd" href="#">Project</Link> 
                <Link className="hover:text-scnd active:text-scnd" href="#">lab</Link> 
            </nav>

            <nav className=" w-40 font-medium text-lg grid grid-cols-1 gap-1">
                <h6 className="mb-2 font-semibold text-xl">Company</h6>

                <Link className="hover:text-scnd active:text-scnd" href="">About Us</Link> 
                <Link className="hover:text-scnd active:text-scnd" href="">Contact Us</Link> 
                <Link className="hover:text-scnd active:text-scnd" href="">Support</Link> 
                <Link className="hover:text-scnd active:text-scnd" href="">Community</Link> 
            </nav>

            <nav className=" w-40 font-medium text-lg grid grid-cols-1 gap-1">
                <h6 className="mb-2  font-semibold text-xl ">Legal</h6>

                <Link className="hover:text-scnd active:text-scnd" href="/termsofservice">Terms of service</Link> 
                <Link className="hover:text-scnd active:text-scnd" href="/termsofservice">Terms of return</Link> 
                <Link className="hover:text-scnd active:text-scnd" href="/privacypolicy">Privacy & policy</Link> 
                <Link className="hover:text-scnd active:text-scnd" href="#">Cookie policy</Link> 
            </nav>
        </footer>
    );
};

export default CommonFooter;