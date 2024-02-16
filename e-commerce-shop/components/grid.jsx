import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import Link from "next/link";
import { CustomPagination } from "./pagination";

const fetchProducts = async (page) => {
	const res = await fetch(`http://localhost:8000/products?page=${page}`, {cache: 'no-cache'});
 
  if (!res.ok) {
    throw new Error('Ошибка получения данных.')
  }

  return res.json()
};

const Grid = async ({currentPage}) => {
	const products = await fetchProducts(currentPage);

	if (!products || !products.results) return null

	return (
		<div className="relative w-full flex flex-col">
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
									className="w-full object-cover h-[200px]"
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
			<CustomPagination count={products.count} currentPage={currentPage}/>
		</div>
	);
};

export {Grid};