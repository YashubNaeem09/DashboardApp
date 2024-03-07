import { IoBagHandle, IoPieChart, IoPeople, IoCart } from "react-icons/io5";
export default function GridComp() {
    return (
        <>
            <div className="flex gap-4 w-full">
                <BoxWrapper>
                    <div className="totalSales flex">
                        <div className="iconDiv text-white bg-bgTheme p-3 rounded-full">
                            <IoBagHandle fontSize={28} />
                        </div>
                        <div className="contentDiv pl-4 font-light">
                            <span className="text-sm text-gray-500">Total Sales</span>
                            <div className="flex items-center">
                                <strong className="font-semibold text-lg">$34525.60</strong>
                                <span className="pl-2 font-light text-sm text-green-500">-343</span>
                            </div>
                        </div>
                    </div>
                </BoxWrapper>
                <BoxWrapper>
                    <div className="totalExpenses flex">
                        <div className="iconDiv text-white bg-orange-600 p-3 rounded-full">
                            <IoPieChart fontSize={28} />
                        </div>
                        <div className="contentDiv pl-4 font-light">
                            <span className="text-sm text-gray-500">Total Expenses</span>
                            <div className="flex items-center">
                                <strong className="font-semibold text-lg">$3423.60</strong>
                                <span className="pl-2 font-light text-sm text-green-500">-343</span>
                            </div>
                        </div>
                    </div>
                </BoxWrapper>
                <BoxWrapper>
                    <div className="totalExpenses flex">
                        <div className="iconDiv text-white bg-yellow-600 p-3 rounded-full">
                            <IoPeople fontSize={28} />
                        </div>
                        <div className="contentDiv pl-4 font-light">
                            <span className="text-sm text-gray-500">Total Customers</span>
                            <div className="flex items-center">
                                <strong className="font-semibold text-lg">$12313</strong>
                                <span className="pl-2 font-light text-sm text-red-500">-30</span>
                            </div>
                        </div>
                    </div>
                </BoxWrapper>
                <BoxWrapper>
                    <div className="totalExpenses flex">
                        <div className="iconDiv text-white bg-green-600 p-3 rounded-full">
                            <IoCart fontSize={28} />
                        </div>
                        <div className="contentDiv pl-4 font-light">
                            <span className="text-sm text-gray-500">Total Orders</span>
                            <div className="flex items-center">
                                <strong className="font-semibold text-lg">$16432</strong>
                                <span className="pl-2 font-light text-sm text-red-500">-43</span>
                            </div>
                        </div>
                    </div>
                </BoxWrapper>
            </div>
        </>
    )
}

function BoxWrapper({ children }) {
    return (
        <div className="bg-navbarColor rounded-sm w-full p-3 flex-1 flex items-center border border-gray-200">{children}</div>
    )
}