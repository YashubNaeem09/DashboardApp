"use client";
import { FcBullish } from "react-icons/fc";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_LOGOUT_LINK } from "../_lib/constants/navigationLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Sidebar() {
    const pathname = usePathname();
    return (
        <>
            <div className="bg-sidebarColor w-60 p-6 flex flex-col">
                <div className="topPart flex-auto">
                    <div className="flex items-center px-1 py-1 gap-2">
                        <FcBullish fontSize={22} />
                        <h1 className="text-lg font-medium text-textColor1">OpenShop</h1>
                    </div>
                    <div className="flex-1 mt-6 text-textColor2">
                        {DASHBOARD_SIDEBAR_LINKS.map((element) => {
                            const isActive = pathname.startsWith(element.path);
                            return (
                                <>
                                    <Link className={isActive ? "bg-neutral-800 text-textColor1" : "bg-red" } href={element.path} key={element.key}>
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
                <div className="bottomPart border-t border-textColor2 flex-1">
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
            </div>
        </>
    )
}