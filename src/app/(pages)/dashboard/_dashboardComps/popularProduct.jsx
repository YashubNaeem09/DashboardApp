import Link from "next/link"

export default function PopularProducts(){
    return(
        <>
        <div className="bg-navbarColor border border-gray-200 rounded-sm p-3 w-[20rem]">
        <h1 className="font-semibold text-gray-700">Popular Products</h1>
        <div className="flex flex-col mt-2 text-sm">
            {
              data.map((element) => (
				<Link href={`/products/${element.id}`} className="mb-2 flex flex-row">
					<div className="w-10 h-10 min-w-10 bg-gray-200 rounded-sm overflow-hidden">
						<img className="w-full h-full object-cover" src={element.product_thumbnail} alt={element.product_name} />
					</div>
					<div className="ml-2 flex-1">
						<p className="text-xs">{element.product_name}</p>
						<p className={element.product_stock === 0 ? "text-sm text-red-500" : element.product_stock > 50 ? "text-sm text-green-500" : "text-sm text-orange-500"}>{element.product_stock} in stock</p>
					</div>
					<div className="text-xs text-gray-500">
						{element.product_price}
					</div>
				</Link>
			  ))  
            }
        </div>
        </div>
        </>
    )
}

const data = [
	{
		id: '3432',
		product_name: 'Macbook M1 Pro 14"',
		product_thumbnail: 'https://source.unsplash.com/100x100?macbook',
		product_price: '$1499.00',
		product_stock: 341
	},
	{
		id: '7633',
		product_name: 'Samsung Galaxy Buds 2',
		product_thumbnail: 'https://source.unsplash.com/100x100?earbuds',
		product_price: '$399.00',
		product_stock: 24
	},
	{
		id: '6534',
		product_name: 'Asus Zenbook Pro',
		product_thumbnail: 'https://source.unsplash.com/100x100?laptop',
		product_price: '$899.00',
		product_stock: 56
	},
]