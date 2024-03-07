import BuyerChart from "./_dashboardComps/buyerChart"
import GridComp from "./_dashboardComps/gridComp"
import TransactionChart from "./_dashboardComps/transactionChart"
export default function Dashboard() {
    return (
        <>
        <div className="flex flex-col">
        <GridComp/>
        <div className="pt-4 gap-5 flex flex-row">
        <TransactionChart/>
        <BuyerChart/>
        </div>
        </div>
        </>
    )
}