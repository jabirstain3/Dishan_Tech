'use client'

import { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input,  Navbar,  NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu, Avatar, NavbarBrand, } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";


export const AcmeLogo = () => {
    return (
        <Image src="https://dishantech.com/wp-content/uploads/2023/08/Dishan-Tech-300-x-84.png" alt="Dishan Tech" width={300} height={80}/>
    );
};

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

const manu= <>
    <NavbarItem>
        <Link color="foreground" href="#" className="">
            Home
        </Link>
    </NavbarItem>

    <Dropdown placement="bottom-start">
        <NavbarItem >
            <DropdownTrigger>
                {/* <Button disableRipple className="border p-0 bg-transparent data-[hover=true]:bg-transparent">Shop</Button> */}
                <Link color="foreground" href="#">
                    Shop
                </Link>
            </DropdownTrigger>
        </NavbarItem>

        <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="components">
                Components
            </DropdownItem>

            <DropdownItem key="onsale">
                On Sale
            </DropdownItem>

            <DropdownItem key="toolsequepment">
                Tools & Equepment
            </DropdownItem>

            <DropdownItem key="robotsparts">
                Robots & Parts
            </DropdownItem>

            <DropdownItem key="robotkits">
                Robot Kits
            </DropdownItem>
        </DropdownMenu>
    </Dropdown>

    <NavbarItem>
        <Link color="foreground" href="#">
            Services
        </Link>
    </NavbarItem>

    <NavbarItem>
        <Link color="foreground" href="#">
            About
        </Link>
    </NavbarItem>

    <NavbarItem>
        <Link color="foreground" href="#">
            Contact
        </Link>
    </NavbarItem>

    <NavbarItem>
        <Link color="foreground" href="#">
            Support
        </Link>
    </NavbarItem>

    <NavbarItem>
        <Link color="foreground" href="#">
            Community
        </Link>
    </NavbarItem>
</>

const CommonNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const user = false
    
    return (
        <div>
            <div className=" w-full max-w-[1536px] mx-auto px-6 py-1 md:flex  justify-between " >
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
                <AcmeLogo />
            </div>

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
                        <Link href="#">
                            <CartIcon/>
                        </Link>
                    </NavbarItem>

                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            {
                                user ? 
                                <Avatar
                                isBordered
                                as="button"
                                className="transition-transform"
                                color="secondary"
                                name="Jason Hughes"
                                size="sm"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                /> :
                                <Avatar
                                isBordered
                                showFallback
                                as="button"
                                className="transition-transform"
                                size="sm"
                                src="https://images.unsplash.com/broken"
                                />
                            }
                            
                        </DropdownTrigger>
            
                        <DropdownMenu aria-label="Profile Actions" variant="flat">
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
                                    <DropdownItem key="login" color="danger">
                                        Log In
                                    </DropdownItem>

                                    <DropdownItem key="signup" color="danger">
                                        Sign Up
                                    </DropdownItem>
                                </> 
                            }
                        </DropdownMenu>
                    </Dropdown>
                </NavbarContent>


            </Navbar>
        </div>
    );
};

export default CommonNavbar;