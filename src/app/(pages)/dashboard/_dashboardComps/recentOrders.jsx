import { formatRevalidate } from "next/dist/server/lib/revalidate"
import Link from "next/link"

export default function RecentOrders() {
	return (
		<>
		{/* <div className="flex-1 ml-4 pt-3 px-3 pb-4">
		<table className="w-full text-left text-sm text-gray-700 leading-loose">
						<thead className="tracking-normal">
							<tr>
								<th>ID</th>
								<th>Product ID</th>
								<th>Customer Name</th>
								<th>Order Date</th>
								<th>Price</th>
								<th>Shipment Address</th>
								<th>Order Status</th>
							</tr>
						</thead>
						<tbody className="">
								{
									data.map((element) => (	
										   <tr key={element.id} className="ml-8">
											<td>#{element.id}</td>
											<td>{element.product_id}</td>
											<td>{element.customer_name}</td>
											<td>{new Date(element.order_date).toLocaleDateString()}</td>
											<td>{element.order_total}</td>
											<td> {element.shipment_address} </td>
											<td>{element.current_order_status}</td>
										   </tr>
											
									))
								}
						</tbody>
					</table>
		</div>
		 */}
			<div className="flex-1 px-4 pb-1 pt-1 bg-navbarColor border rounded-sm border-gray-200">
				<h1 className="font-semibold text-gray-700">Recent Orders</h1>
				<div className="mt-1">
				<table className="w-full text-left text-xs text-gray-700 leading-5 border border-x border-gray-200 ">
						<thead className="tracking-normal bg-gray-200">
							<tr className="font-semibold leading-8">
								<th className="px-3">ID</th>
								<th>Product ID</th>
								<th>Customer Name</th>
								<th>Order Date</th>
								<th>Price</th>
								<th>Shipment Address</th>
								<th>Order Status</th>
							</tr>
						</thead>
						<tbody className="">
								{
									data.map((element) => (	
										   <tr key={element.id} className="mx-8">
											<td>
												<Link className="text-sky-700 px-2" href={`/orders/${element.id}`}>#{element.id}</Link></td>
											<td>
												<Link className="text-sky-700" href={`/products/${element.product_id}`}>{element.product_id}</Link></td>
											<td>{element.customer_name}</td>
											<td>{new Date(element.order_date).toLocaleDateString()}</td>
											<td>{element.order_total}</td>
											<td> {element.shipment_address} </td>
											<td className="cursor-pointer">{getOrderStatus(element.current_order_status)}</td>
										
										   </tr>
											
									))
								}
						</tbody>
					</table>
				</div>
			</div>
		</>
	)
}

const data = [
	{
		id: '1',
		product_id: '4324',
		customer_id: '23143',
		customer_name: 'Shirley A. Lape',
		order_date: '2022-05-17T03:24:00',
		order_total: '$435.50',
		current_order_status: 'PLACED',
		shipment_address: 'Cottage Grove, OR 97424'
	},
	{
		id: '7',
		product_id: '7453',
		customer_id: '96453',
		customer_name: 'Ryan Carroll',
		order_date: '2022-05-14T05:24:00',
		order_total: '$96.35',
		current_order_status: 'CONFIRMED',
		shipment_address: 'Los Angeles, CA 90017'
	},
	{
		id: '2',
		product_id: '5434',
		customer_id: '65345',
		customer_name: 'Mason Nash',
		order_date: '2022-05-17T07:14:00',
		order_total: '$836.44',
		current_order_status: 'SHIPPED',
		shipment_address: 'Westminster, CA 92683'
	},
	{
		id: '3',
		product_id: '9854',
		customer_id: '87832',
		customer_name: 'Luke Parkin',
		order_date: '2022-05-16T12:40:00',
		order_total: '$334.50',
		current_order_status: 'SHIPPED',
		shipment_address: 'San Mateo, CA 94403'
	},
	{
		id: '4',
		product_id: '8763',
		customer_id: '09832',
		customer_name: 'Anthony Fry',
		order_date: '2022-05-14T03:24:00',
		order_total: '$876.00',
		current_order_status: 'OUT_FOR_DELIVERY',
		shipment_address: 'San Mateo, CA 94403'
	},
	{
		id: '5',
		product_id: '5627',
		customer_id: '97632',
		customer_name: 'Ryan Carroll',
		order_date: '2022-05-14T05:24:00',
		order_total: '$96.35',
		current_order_status: 'DELIVERED',
		shipment_address: 'Los Angeles, CA 90017'
	}
]

export function getOrderStatus(status){
		switch (status) {
			case "PLACED" :
				return(
					<span className="text-xs px-1 text-sky-600 bg-sky-100 rounded-md">{status}</span>
				)
			case "CONFIRMED" :
				return(
					<span className="text-xs px-1 text-orange-600 bg-orange-100 rounded-md">{status}</span>
				)
			case "SHIPPED" :
				return(
					<span className="text-xs px-1 text-teal-600 bg-teal-100 rounded-md">{status}</span>
				)
			case "OUT_FOR_DELIVERY" :
				return(
					<span className="text-xs px-1 text-yellow-600 bg-yellow-100 rounded-md">{status.replaceAll('_', " ")}</span>
				)
			case "DELIVERED" :
				return(
					<span className="text-xs px-1 text-gray-600 bg-gray-100 rounded-md">{status.replaceAll('_', " ")}</span>
				)
			default : 
			return (
				<span className="text-sm px-1 text-red-600 bg-red-100 rounded-md">{status.replaceAll('_', " ")}</span>
			)
		} 
	
}