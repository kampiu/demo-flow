import React, { Component } from "react"
import DemoA from "./views/DemoA"
import { install } from "./Nodes"

install()

function App() {
	return (
		<div>
			<DemoA />
		</div>
	)
}

export default App
