import { Skeleton } from "@nextui-org/react";

const SkeletonGrid = ({total = 0}) => {
	return (
		<div className="gap-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{
				Array.apply(null, Array(total)).map((val, idx) => <Skeleton key={idx} className="pb-[100%] rounded-md"/>)
			}
		</div>
	);
};

export {SkeletonGrid};