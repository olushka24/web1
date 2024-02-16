import { Button } from "@nextui-org/react";

const ProductDetails = ({item}) => {

	return (
<div className="w-[450px] flex flex-col">
          <h2 className="font-extrabold text-[24px] mb-[15px]">{item.name  }</h2>
          <span>{item.price}р</span>
          <h3 className="font-extrabold text-[20px]">Описание</h3>
          <p>{item.description}</p>
          <Button className="mt-[15px]">Купить</Button>
        </div>
	);
};

export {ProductDetails};