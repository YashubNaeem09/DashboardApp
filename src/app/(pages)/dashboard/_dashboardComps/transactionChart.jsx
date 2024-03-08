"use client"
import { BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar } from "recharts"
export default function TransactionChart() {
    return (
        <>
            <div className="h-[15rem] bg-navbarColor rounded-sm border border-gray-200 flex-1 p-4 flex-col flex">
                <h1 className="font-semibold text-gray-700">Transactions</h1>
                <ResponsiveContainer width="100%" height="100%" className="text-xs flex-1 w-full mt-1" >
                    <BarChart width={500} height={300} data={data} margin={{ top: 20, right: 10, left: -10, bottom: 0 }} >
                        <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Income" fill="#0ea5e9" />
                        <Bar dataKey="Expense" fill="#ea580c" />
                    </BarChart>
                </ResponsiveContainer>
               
            </div>
        </>
    )
}

const data = [
    {
        name: 'Jan',
        Expense: 4000,
        Income: 2400
    },
    {
        name: 'Feb',
        Expense: 3000,
        Income: 1398
    },
    {
        name: 'Mar',
        Expense: 2000,
        Income: 9800
    },
    {
        name: 'Apr',
        Expense: 2780,
        Income: 3908
    },
    {
        name: 'May',
        Expense: 1890,
        Income: 4800
    },
    {
        name: 'Jun',
        Expense: 2390,
        Income: 3800
    },
    {
        name: 'July',
        Expense: 3490,
        Income: 4300
    },
    {
        name: 'Aug',
        Expense: 2000,
        Income: 9800
    },
    {
        name: 'Sep',
        Expense: 2780,
        Income: 3908
    },
    {
        name: 'Oct',
        Expense: 1890,
        Income: 4800
    },
    {
        name: 'Nov',
        Expense: 2390,
        Income: 3800
    },
    {
        name: 'Dec',
        Expense: 3490,
        Income: 4300
    }
]
