import React, { Component } from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Pagination } from "../components/Pagination";

class Main extends Component {
	state = {
		movies: [],
		pagination: "1",
		loading: true,
		limit: 12,
	};

	onClickPagination = (e) => {
		this.setState({ pagination: e.target.innerText });
		this.searchMovies(this.state.pagination);
	};

	componentDidMount() {
		fetch(
			`https://yts.mx/api/v2/list_movies.json?page=1&limit=${this.state.limit}`,
			{
				method: "GET",
				mode: "cors",
			}
		)
			.then((response) => response.json())
			.then((data) =>
				this.setState({ movies: data.data.movies, loading: false })
			);
	}

	searchMovies = (str) => {
		fetch(
			`https://yts.mx/api/v2/list_movies.json?page=${this.state.pagination}&limit=${this.state.limit}`,
			{
				method: "GET",
				mode: "cors",
			}
		)
			.then((response) => response.json())
			.then((data) =>
				this.setState({ movies: data.data.movies, loading: false })
			);
	};

	render() {
		const { movies = [], loading } = this.state;

		if (movies) {
			return (
				<main className='container content'>
					{loading ? <Preloader /> : <Movies movies={movies} />}
					<Pagination
						moviesPerPage={this.state.limit}
						totalMovies={200}
						onClickPagination={this.onClickPagination}
					/>
				</main>
			);
		}
	}
}

export { Main };
