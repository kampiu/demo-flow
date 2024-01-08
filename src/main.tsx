import ReactDOM from "react-dom/client"
import "antd/dist/reset.css"
import "simplebar-react/dist/simplebar.min.css"
import "reactflow/dist/style.css"
import App from "./App"
import "@/assets/styles/init.less"

/** 渲染入口 */
function render() {
	// @ts-ignore
	const root = ReactDOM.createRoot(document.getElementById("root"))
	root.render(<App/>)
}

render()
