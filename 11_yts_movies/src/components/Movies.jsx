import React, { useState } from "react";
import { Movie } from "./Movie";
import { Moviedetalis } from "./Movie-detalis";

function Movies(props) {
	const { movies = [] } = props;

	const [visible, setVisible] = useState(false);
	const [url0, setUrl] = useState("");
	const [index, setIndex] = useState(0);
	const [classnameoverlay, setClassnameoverlay] = useState("movie-detalis");

	function onDeleteOverlay(e) {
		setClassnameoverlay("movie-detalis hidden");
		setVisible(false);
	}

	function onClick(e) {
		if (e.target.alt !== "basket") {
			if (e.target.localName === "img") {
				setVisible(true);
				setUrl(e.target.src);

				setIndex(
					movies.findIndex(
						(movie) => movie.medium_cover_image === e.target.src
					)
				);
				setClassnameoverlay("movie-detalis");
			}
		}
	}

	return (
		<>
			<div className='movies' onClick={onClick}>
				<br />
				{movies.length ? (
					movies.map((movie) => <Movie {...movie} />)
				) : (
					<h4>Nothing found</h4>
				)}
				{visible ? (
					<Moviedetalis
						url0={url0}
						indexd={index}
						movie={movies[index]}
						onDeleteOverlay={onDeleteOverlay}
					/>
				) : (
					""
				)}
			</div>
		</>
	);
}
export { Movies };
