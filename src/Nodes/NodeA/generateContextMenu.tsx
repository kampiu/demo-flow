import { MenuProps } from "antd"

export default (): MenuProps["items"] => {
	
	return [
		{
			key: "itemA",
			label: "我是菜单A",
			onClick: (...p) => {
				console.log("-----", ...p)
			}
		},
		{
			key: "itemB",
			label: "我是菜单A",
			onClick: () => {
				console.log("-----")
			}
		},
		{
			key: "itemC",
			label: "我是菜单A",
			onClick: () => {
				console.log("-----")
			}
		}
	]
}
