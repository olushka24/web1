import {Card, CardBody, CardFooter, Image, Pagination} from "@nextui-org/react";
import Link from "next/link";

const fetchProducts = async (page) => {
	const res = await fetch(`http://localhost:8000/products/?page=${page}`);
 
  if (!res.ok) {
    throw new Error('Ошибка получения данных.')
  }

  return res.json()
};

const Grid = async ({currentPage, onPageChange}) => {
	const products = await fetchProducts(currentPage);
	if (!products || !products.results) return null
	return (
		<div className="flex flex-col">
			<div className="gap-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{products.results.map(item => (
						<Card key={item.id} shadow="sm" isPressable>
							<Link  href={`product/${item.id}`} className="w-full">
							<CardBody className="overflow-visible p-0">
								<Image
									shadow="sm"
									radius="lg"
									width="100%"
									alt={item.name}
									className="w-full object-cover h-[140px]"
									src={item.photo}
								/>
							</CardBody>
							</Link>
							<CardFooter className="text-small justify-between">
								<b>{item.name}</b>
								<p className="text-default-500">{item.price} ₽</p>
							</CardFooter>
						</Card>
				))}
			</div>
			<Pagination className = "fixed bottom-[15px] left-1/2 z-50" total={Math.ceil(products.count/10)} page = {Number(currentPage)} onChange={page => onPageChange(page)}/>
		</div>
	);
};

export {Grid};