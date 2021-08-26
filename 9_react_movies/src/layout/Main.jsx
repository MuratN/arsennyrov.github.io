import React, { Component } from "react";
import { Movies } from "../components/Movies";
import { Search } from "../components/Search";
import { Preloader } from "../components/Preloader";

const API_KEY = "f726b500";

class Main extends Component {
	state = {
		movies: [],
		loading: true,
	};

	componentDidMount() {
		fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=matrix`)
			.then((response) => response.json())
			.then(
				(data) => this.setState({ movies: data.Search, loading: false })
				/*             .catch(
					(err) => {
						console.error(err);
						this.setState({ loading: true });
					}
				) */
			);
	}

	searchMovies = (str, type = "all") => {
		this.setState({ loading: true });
		fetch(
			`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${str}${
				type !== "all" ? `&type=${type}` : ""
			}`
		)
			.then((response) => response.json())
			.then((data) =>
				this.setState({ movies: data.Search, loading: false })
			);
	};

	render() {
		const { movies = [], loading } = this.state;

		if (movies) {
			return (
				<main className='container content'>
					<Search searchMovies={this.searchMovies} />
					{loading ? <Preloader /> : <Movies movies={movies} />}
				</main>
			);
		}
	}
}

export { Main };
