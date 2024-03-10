"use client";
import { FcBullish } from "react-icons/fc";
import {IoChevronBackOutline} from "react-icons/io5";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_LOGOUT_LINK } from "../_lib/constants/navigationLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
export default function Sidebar() {
    const pathname = usePathname();
    const [expanded, setExpanded] = useState(true);
    return (
        <>
            <div className={`bg-sidebarColor ${expanded ? "w-[15rem]" : "w-[5rem]"} p-6 flex flex-col relative`}>
                <div className="topPart flex-auto">
                    <div className="flex flex-row">
                    <div className={`flex justify-between items-center px-1 py-1 gap-2`}>
                        <FcBullish fontSize={22} />
                        <h1 className={`${expanded ? "" : "hidden"} text-lg font-medium text-textColor1`}>OpenShop</h1>
                    </div>
                    <div className={`${expanded ? "flex justify-end mb-6 ml-10 py-1 translate-x-12 overlay" : "flex justify-end py-1 translate-x-8"}`}>
                        <button className="fixed p-1 rounded-full bg-textHover" onClick={() => setExpanded(!expanded)}><IoChevronBackOutline className="text-white" fontSize={23} /></button>
                    </div>
                    </div>

                    <div className={`flex-1 mt-4 text-textColor2 ${expanded ? "" : "hidden"} duration-500`}>
                        {DASHBOARD_SIDEBAR_LINKS.map((element) => {
                            const isActive = pathname.startsWith(element.path);
                            return (
                                <>
                                    <Link key={element.key} className={isActive ? "bg-neutral-800 text-textColor1" : "bg-red"} href={element.path}>
                                        <div className="flex items-center gap-2 py-2 hover:bg-textHover hover:text-textColor1 px-2">
                                            <span className="text-xl">{element.icon}</span>
                                            <h1 className="text-lg font-medium cursor-pointer" key={element.key}>{element.label}</h1>
                                        </div>
                                    </Link>
                                </>
                            )
                        })}
                    </div>
                </div>
                <div className={`bottomPart border-t border-textColor2 flex-1 ${!expanded && 'opacity-0 translate-x-28 overflow-auto'}`}>
                    <div className="py-2">
                        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((element) => (
                            <>
                                <Link href={element.path} key={element.key}>
                                    <div className="flex items-center gap-2 py-2 text-textColor2  hover:bg-textHover hover:text-textColor1 px-2">
                                        <span className="text-xl">{element.icon}</span>
                                        <h1 className="text-lg font-medium cursor-pointer" key={element.key}>{element.label}</h1>
                                    </div>
                                </Link>
                            </>
                        ))}
                        {
                            DASHBOARD_SIDEBAR_LOGOUT_LINK.map((element) => (
                                <Link href={element.path} key={element.key}>
                                    <div className="text-red-800 flex items-center gap-2 py-2 hover:bg-textHover hover:text-red-500 px-2">
                                        <span className="text-xl">{element.icon}</span>
                                        <h1 className="text-lg font-medium cursor-pointer" key={element.key}>{element.label}</h1>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className={`responsiveSidebar ${expanded ? "hidden" : ""} flex-auto flex flex-col items-center`}>
                    <div className="mb-32">
                    {
                        DASHBOARD_SIDEBAR_LINKS.map((element) => (
                            <Link href={element.path} key={element.key}>
                                <div className="py-2 text-textColor2 hover:bg-textHover hover:text-textColor1 px-2">
                                    <span className="text-2xl">{element.icon}</span>
                                </div>
                            </Link>
                        ))
                    }
                    </div>
                    <div className="py-1 border-t border-textColor2">
                    {
                        DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((element) => (
                            <Link href={element.path} key={element.key}>
                            <div className="py-2 text-textColor2 hover:bg-textHover hover:text-textColor1 px-2">
                                <span className="text-2xl">{element.icon}</span>
                            </div>
                        </Link>
                        ))
                    }
                    </div>
                    <div className="mb-4">
                    {
                            DASHBOARD_SIDEBAR_LOGOUT_LINK.map((element) => (
                                <Link href={element.path} key={element.key}>
                                    <div className="text-red-800 flex items-center gap-2 py-2 hover:bg-textHover hover:text-red-500 px-2">
                                        <span className="text-xl">{element.icon}</span>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>

                </div>
            </div>
        </>
    )
}