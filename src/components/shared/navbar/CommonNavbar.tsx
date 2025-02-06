'use client'

import { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input,  Navbar,  NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu, Avatar, } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// import Image from "next/image";



export const CartIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
    );
};

export const SearchIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
    );
};

const CommonNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const user = false
    const pathname = usePathname();

    const manu= <>
        <NavbarItem>
            <Link className={`navigationlink ${pathname === "/" ? "activelink" : ""}`} color="foreground" href="/" >
                Home
            </Link>
        </NavbarItem>

        <NavbarItem>
            <Link className={`navigationlink ${pathname === "/products" ? "activelink" : ""} `} href="/products">
            Shop
            </Link>
        </NavbarItem>

        <NavbarItem>
            <Link className={`navigationlink ${pathname === "/services" ? "activelink" : ""}`}  href="/services">
                Services
            </Link>
        </NavbarItem>

        <NavbarItem>
            <Link className={`navigationlink ${pathname === "/about_us" ? "activelink" : ""}`}  href="/about_us">
                About Us
            </Link>
        </NavbarItem>

        <NavbarItem>
            <Link className={`navigationlink ${pathname === "/contact" ? "activelink" : ""}`}  href="/contact">
                Contact Us
            </Link>
        </NavbarItem>

        <NavbarItem>
            <Link className={`navigationlink ${pathname === "/support" ? "activelink" : ""}`}  href="/support">
                Support
            </Link>
        </NavbarItem>

        <NavbarItem>
            <Link className={`navigationlink ${pathname === "/community" ? "activelink" : ""}`} href="/community">
                Community
            </Link>
        </NavbarItem>
    </>
    
    
    return (
        <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} className="border bg-blue-200" maxWidth="2xl">

            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="lg:hidden"/>
    
            <NavbarMenu className="z-50 top-0">
                <NavbarItem>
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="lg:hidden py-4"/>
                </NavbarItem>

                {manu}
            </NavbarMenu>
    
            <NavbarContent className="hidden lg:flex gap-4" justify="center">
                {manu}
            </NavbarContent>
    
            <NavbarContent justify="end">
                <Input
                    classNames={{
                        base: "max-w-[14rem] h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper:
                        "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Type to search..."
                    size="sm"
                    startContent={<SearchIcon />}
                    type="search"
                />

                <NavbarItem className="">
                    <Link className={`navigationlink ${pathname === "/cart" ? "activelink" : ""}`} href="#">
                        <CartIcon/>
                    </Link>
                </NavbarItem>

                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        {
                            user ? 
                            <Avatar isBordered as="button" className="transition-transform" color="secondary" name="Jason Hughes" size="sm" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" /> :
                            <Avatar isBordered showFallback as="button" className="transition-transform" size="sm" src="https://images.unsplash.com/broken" />
                        }
                    </DropdownTrigger>
        
                    <DropdownMenu aria-label="Profile Actions" variant="flat" >
                        {
                            user ?
                            <>
                                <DropdownItem key="profile" className="h-14 gap-2">
                                    <p className="font-semibold">Signed in as</p>
                                    <p className="font-semibold">zoey@example.com</p>
                                </DropdownItem>

                                <DropdownItem key="profile">
                                    Profile
                                </DropdownItem>
                                <DropdownItem key="settings">
                                    Settings
                                </DropdownItem>
                                <DropdownItem key="logout" >
                                    Log Out
                                </DropdownItem>
                            </> :
                            <>
                                <DropdownItem key="login" >
                                    <Link className={`navigationlink `} href="/login">Log In</Link>
                                </DropdownItem>

                                <DropdownItem key="signup" >
                                    <Link className={`navigationlink `} href="/registration">Sign Up</Link>                                    
                                </DropdownItem>
                            </> 
                        }
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    );
};

export default CommonNavbar;