import { ProductDetails } from "@/components/product-details";
import {Button, Card, CardBody, CardFooter, Image} from "@nextui-org/react";

async function getProduct(productId) {
  const res = await fetch(`http://localhost:8000/product/${productId}`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}

export default async function ProductPage({params}) {
	const item = await getProduct(params.id);

	return (
    <div className="flex flex-col lg:flex-row gap-[50px]">
			<div className="flex-1">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.name}
              className="w-full object-cover"
              src={item.photo}/>
        </div>
        <ProductDetails item={item}/>
      </div>  
	);
}
