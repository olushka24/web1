'use client'
import { Grid } from "@/components/grid";
import { Suspense } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { SkeletonGrid } from "@/components/skeleton-grid";


export default function Home() {
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();
	const page = searchParams.get('page') ?? '1';
	
	const changePage = e => {
		const params = new URLSearchParams(searchParams.toString())
    params.set('page', e);
		router.push(pathname + '?' + params.toString());
	};

	return (
		<section>
			<Suspense key={page} fallback={<SkeletonGrid total={10}/>}>
        <Grid currentPage={page} onPageChange={changePage}/>
      </Suspense>
		</section>
	);
}
