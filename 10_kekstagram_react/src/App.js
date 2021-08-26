import React from "react";

import { Main } from "./layout/Main";
import { Footer } from "./layout/Footer";

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			photo: {},
		};
	}

	render() {
		return (
			<>
				<Main />
				<Footer />
			</>
		);
	}
}
