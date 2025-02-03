import Image from "next/image";
import Link from "next/link";


const CommonFooter = () => {
    return (
        <footer className="border w-full max-w-[1536px] mx-auto px-5 py-10 lg:py-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center">
            <aside className="w-fit">
                <div className="border w-fit rounded-lg mb-3 shadow-md">
                    <Image src="https://dishantech.com/wp-content/uploads/2023/08/Dishan-Tech-300-x-84.png" alt="Dishan Tech" width={300} height={80}/>
                </div>
                <p>Dishan Tech Ltd.<br/>House:53, Road:12, Sector 10, Uttara<br/>
                Dhaka-1230, Bangladesh</p>
            </aside>

            <nav className="border w-60 text-based dark:text-basel font-medium text-lg grid grid-cols-1 gap-1">
                <h6 className="mb-2 font-semibold text-xl">Services</h6>

                <Link className="hover:text-scnd active:text-scnd" href="#">Shop</Link> 
                <Link className="hover:text-scnd active:text-scnd" href="#">Upcoming</Link> 
                <Link className="hover:text-scnd active:text-scnd" href="#">Project</Link> 
                <Link className="hover:text-scnd active:text-scnd" href="#">lab</Link> 
            </nav>
            
            <nav className="border w-60 text-based dark:text-basel font-medium text-lg grid grid-cols-1 gap-1">
                <h6 className="mb-2  font-semibold text-xl">Company</h6>

                <Link className="hover:text-scnd active:text-scnd" href="">About Us</Link> 
                <Link className="hover:text-scnd active:text-scnd" href="">Contact Us</Link> 
                <Link className="hover:text-scnd active:text-scnd" href="">Support</Link> 
                <Link className="hover:text-scnd active:text-scnd" href="">Community</Link> 
            </nav>

            <nav className="border w-60 text-based dark:text-basel font-medium text-lg grid grid-cols-1 gap-1">
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