"use client"
import { Legend, PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

export default function BuyerChart() {
    return (
        <>
            <div className="w-[20rem] h-[15rem] bg-navbarColor rounded-sm border border-gray-200 p-3 flex flex-col">
                <h1 className="font-semibold text-gray-700">Buyer Profile</h1>
                <ResponsiveContainer width="100%" height="100%" className="text-xs flex-1 pb-5" >
                    <PieChart style={{width:"100%", height:"100%", paddingTop: "10%", paddingBottom: "10%"}}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="45%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={105}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>

            </div>
        </>
    )
}

const data = [
    { name: 'Male', value: 540 },
    { name: 'Female', value: 620 },
    { name: 'Other', value: 210 }
]

const RADIAN = Math.PI / 180
const COLORS = ['#00C49F', '#FFBB28', '#FF8042']

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    )
}