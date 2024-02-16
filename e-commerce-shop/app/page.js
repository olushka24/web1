import { Grid } from "@/components/grid";
import { Suspense } from "react";
import { SkeletonGrid } from "@/components/skeleton-grid";

export default function Home({searchParams}) {
	const page = searchParams.page || 1;
	
	return (
		<section>
			<Suspense key={page} fallback={<SkeletonGrid total={10}/>}>
        <Grid currentPage={page}/>
      </Suspense>
		</section>
	);
}
