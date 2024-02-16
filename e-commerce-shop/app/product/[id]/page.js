import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

async function getProduct(productId) {
  const res = await fetch(`http://localhost:8000/product/${productId}`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  console.log(res.json())
  return res.json()
}

export default async function ProductPage({params}) {
	const item = getProduct(params.id);
  console.log(item);
	return (
			<Card shadow="sm" className="flex-1">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.name}
              className="w-full object-cover h-[140px]"
              src={item.photo}
            />
						<p>
							{item.description}
						</p>
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.name}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
	);
}
