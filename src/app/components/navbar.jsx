"use client";
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineCog, HiOutlineSearch } from "react-icons/hi";
import { Popover, Transition, Menu } from "@headlessui/react";
import { Fragment } from "react";
import { useRouter } from "next/navigation";
import { DASHBOARD_SIDEBAR_LOGOUT_LINK } from "../_lib/constants/navigationLinks";

export default function Navbar() {
    const navigate = useRouter();
    return (
        <>
            <div className="bg-navbarColor px-3 h-16 flex flex-row justify-between items-center p-3 border-b border-gray-200">
                <div className="searchDiv flex flex-row items-center relative">
                    <HiOutlineSearch fontSize={18} className="absolute left-3 text-gray-500" />
                    <input type="search" placeholder="Search Here" className="p-2 focus:outline-none active:outline-none rounded-sm border border-gray pl-11 pr-4"></input>
                </div>
                <div className="sideButtons flex items-center gap-1 mr-6">
                    <Popover className="relative">
                        {({ open }) => (
                            <>
                                <Popover.Button
                                    className={open ? `inline-flex items-center rounded-md px-2 py-2 text-base font-medium hover:text-textHover focus:outline-none bg-themeColor2 focus-visible:ring-2 focus-visible:ring-white/75` : `inline-flex items-center rounded-md px-2 py-2 text-base font-medium hover:text-textHover focus:outline-none`}>
                                    <HiOutlineChatAlt fontSize={24} />
                                </Popover.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel className="absolute right-0 z-10 mt-4 w-[15rem] max-w-sm px-4 sm:px-0 lg:max-w-3xl">
                                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                                            <div className="relative bg-textHover p-4 text-white">
                                                <strong>Messages</strong>
                                                <div className="flex items-center py-1 mt-2">
                                                    <h1>This is message</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </>)}
                    </Popover>
                    <Popover className="relative">
                        {({ open }) => (
                            <>
                                <Popover.Button
                                    className={open ? `inline-flex items-center rounded-md px-2 py-2 text-base font-medium hover:text-textHover focus:outline-none bg-themeColor2 focus-visible:ring-2 focus-visible:ring-white/75` : `inline-flex items-center rounded-md px-2 py-2 text-base font-medium hover:text-textHover focus:outline-none`}>
                                    <HiOutlineBell fontSize={24} />
                                </Popover.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel className="absolute right-0 z-10 mt-4 w-[15rem] max-w-sm px-4 sm:px-0 lg:max-w-3xl">
                                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                                            <div className="relative bg-textHover p-4 text-white">
                                                <strong>Notifications</strong>
                                                <div className="flex items-center py-1 mt-2">
                                                    <h1>This is Notification</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </>)}
                    </Popover>                    
                    <Menu as="div" className="relative">
                        <div>
                            <Menu.Button className="ml-1 inline-flex rounded-full focus:outline-none focus:ring-2">
                                <span className="sr-only">Open Menu</span>
                                <div className="h-10 w-10 rounded-full bg-cover bg-no-repeat bg-center bg-sky-500" style={{ backgroundImage: 'url("https://source.unsplash.com/80x80?face")' }}>
                                    <span className="sr-only">Your Profile</span>
                                </div>
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute z-10 right-0 mt-2 w-[10rem] origin-top-right rounded-lg bg-textHover text-white shadow-md ring-1 ring-black/5 focus:outline-none">
                                    <div className="">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <div className={active ? "bg-neutral-600 rounded-t-lg " : "bg-neutral-600 rounded-t-lg "}>
                                                <button className="px-3 py-2 font-semibold" onClick={() => navigate.push("/products")}>Your Profile</button>
                                                </div>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <div className={active ? "bg-neutral-800 flex items-center px-2 gap-0" : "flex items-center px-2 gap-0"}>
                                                <span className="text-xl"><HiOutlineCog fontSize={20}/></span>
                                                <button className="px-4 py-2" onClick={() => navigate.push("/settings")}>Settings</button>
                                                </div>
                                            )}
                                        </Menu.Item>
                                        { DASHBOARD_SIDEBAR_LOGOUT_LINK.map((element) => (
                                            <Menu.Item key={element.key}>
                                            {({ active }) => (
                                                <div className={active ? "bg-neutral-800 border-b rounded-lg text-red-400 flex items-center px-3 gap-0" : "text-red-400 flex items-center px-3 gap-0"}>
                                                <span className="text-xl">{element.icon}</span>
                                                <button className="px-4 py-2" onClick={() => navigate.push(element.path)}>Logout</button>
                                                </div>
                                            )}
                                        </Menu.Item>
                                        ))}
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </div>
                    </Menu>
                </div>
            </div>
        </>
    )
}