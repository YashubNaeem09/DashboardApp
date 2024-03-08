import BuyerChart from "./_dashboardComps/buyerChart"
import GridComp from "./_dashboardComps/gridComp"
import TransactionChart from "./_dashboardComps/transactionChart"
import RecentOrders from "./_dashboardComps/recentOrders"
import PopularProducts from "./_dashboardComps/popularProduct"
export default function Dashboard() {
    return (
        <>
            <div className="flex flex-col">
                <div className="">
                    <GridComp />
                </div>
                <div className="pt-2 gap-4 flex flex-row">
                    <TransactionChart />
                    <BuyerChart />
                </div>
                <div className="pt-2 w-full flex flex-row gap-4">
                    <RecentOrders />
                    <PopularProducts />
                </div>
            </div>
        </>
    )
}