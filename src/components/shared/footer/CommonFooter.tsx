'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const TheLogo = () => {
    return (
        <Image src="https://dishantech.com/wp-content/uploads/2023/08/Dishan-Tech-300-x-84.png" alt="Dishan Tech" width={300} height={80}/>
    );
};

const CommonFooter = () => {
    const pathname = usePathname();

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

                <Link className={`navigationlink ${pathname === "/products" ? "activelink" : ""} `} href="/products">Shop</Link> 
                <Link className={`navigationlink  `} href="">Upcoming</Link> 
                <Link className={`navigationlink  `} href="#">Project</Link> 
                <Link className={`navigationlink  `} href="#">lab</Link> 
            </nav>

            <nav className=" w-40 font-medium text-lg grid grid-cols-1 gap-1">
                <h6 className="mb-2 font-semibold text-xl">Company</h6>

                <Link className={`navigationlink ${pathname === "/about_us" ? "activelink" : ""}`} href="/about_us">About Us</Link> 
                <Link className={`navigationlink ${pathname === "/contact" ? "activelink" : ""}`} href="/contact">Contact Us</Link> 
                <Link className={`navigationlink ${pathname === "/support" ? "activelink" : ""}`} href="/support">Support</Link> 
                <Link className={`navigationlink ${pathname === "/community" ? "activelink" : ""}`} href="/community">Community</Link> 
            </nav>

            <nav className=" w-40 font-medium text-lg grid grid-cols-1 gap-1">
                <h6 className="mb-2  font-semibold text-xl ">Legal</h6>

                <Link className={`navigationlink ${pathname === "/terms_of_service" ? "activelink" : ""}`} href="/terms_of_service">Terms of service</Link> 
                <Link className={`navigationlink `} href="/">Terms of return</Link> 
                <Link className={`navigationlink ${pathname === "/privacy_&_policy" ? "activelink" : ""}`} href="/privacy_&_policy">Privacy & policy</Link> 
                <Link className={`navigationlink ${pathname === "/cookie_policy" ? "activelink" : ""}`} href="/cookie_policy">Cookie policy</Link> 
            </nav>
        </footer>
    );
};

export default CommonFooter;