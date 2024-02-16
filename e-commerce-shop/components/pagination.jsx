'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Pagination } from "@nextui-org/react";

const CustomPagination = ({count, currentPage}) => {
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();

	const changePage = e => {
		const params = new URLSearchParams(searchParams.toString())
    params.set('page', e);
		console.log(params.toString())
		router.push(pathname + '?' + params.toString());
	};

	return (
		<Pagination className="flex justify-center" 
								total={Math.ceil(count/10)} 
								page = {Number(currentPage)} 
								onChange={changePage}/>
	);
};

export {CustomPagination};