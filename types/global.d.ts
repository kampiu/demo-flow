declare module "*.svg" {
	const content: SVGRectElement | SVGRect | string
	export default content
}

declare module "*.less" {
	const content: {
		[className: string]: string
	}
	export = content
	export default content
}
