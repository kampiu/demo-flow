import { install as registerNodeA } from "./NodeA"
import { install as registerNodeB } from "./NodeB"
import { install as registerNodeC } from "./NodeC"

export const install = () => {
	registerNodeA()
	registerNodeB()
	registerNodeC()
}
