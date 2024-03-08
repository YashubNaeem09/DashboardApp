import Sidebar from "../components/sidebar"
import Navbar from "../components/navbar";
export default function Layout({ children }) {
    return (
        <>
            <div className="flex flex-row bg-themeColor1 h-screen w-screen overflow-hidden">
                <Sidebar />
                <div className="flex-1">
                    <Navbar />
                    <main className="p-2">{children}</main>
                </div>
            </div>
        </>
    )
}