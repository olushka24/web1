import { title } from "@/components/primitives";
import {Image} from "@nextui-org/react";

export default function AboutPage() {
	return (
		<div>
			<h1 className={title()}>О нас</h1>
			<div> 
				<Image
				isZoomed
				width={240}
				alt="Печать футболок"
				src="https://businessman.ru/static/img/n/6/3/3/0/6/5/i/633065.jpg"/>
				<p>Мы производим футболки с различными изображениями. </p>
			</div>
			
		</div>
	);
}