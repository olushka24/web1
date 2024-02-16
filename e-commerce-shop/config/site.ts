export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Shop",
	navItems: [
		{
			label: "Главная",
			href: "/",
		},
		{
		label: "Корзина",
		href: "/cart",
		},
		{
			label: "О нас",
			href: "/about",
			},
	],
};
