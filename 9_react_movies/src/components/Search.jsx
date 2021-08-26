import React from "react";

class Search extends React.Component {
	state = {
		search: "",
		type: "all",
	};

	handleKey = (e) => {
		if (e.key === "Enter") {
			this.props.searchMovies(this.state.search, this.state.type);
		}
	};

	handleFilter = (e) => {
		this.setState(
			() => ({ type: e.target.value }),
			() => {
				this.props.searchMovies(this.state.search, this.state.type);
			}
		);
	};

	render() {
		const { type } = this.state;
		return (
			<div className='row'>
				<div className='input-field'>
					<input
						placeholder='search'
						type='search'
						className='validate'
						value={this.state.search}
						onChange={(e) =>
							this.setState({ search: e.target.value })
						}
						onKeyDown={this.handleKey}
					/>
					<button
						className='btn search-btn'
						onClick={() =>
							this.props.searchMovies(
								this.state.search,
								this.state.type
							)
						}
					>
						Search
					</button>

					<div className='wropper'>
						<label>
							<input
								className='with-gap'
								name='type'
								type='radio'
								value='all'
								onChange={this.handleFilter}
								checked={type === "all"}
							/>
							<span>All</span>
						</label>
						<label>
							<input
								className='with-gap'
								name='type'
								type='radio'
								value='movie'
								onChange={this.handleFilter}
								checked={type === "movie"}
							/>
							<span>Movies only</span>
						</label>
						<label>
							<input
								className='with-gap'
								name='type'
								type='radio'
								value='series'
								onChange={this.handleFilter}
								checked={type === "series"}
							/>
							<span>Series only</span>
						</label>
					</div>
				</div>
			</div>
		);
	}
}

export { Search };
