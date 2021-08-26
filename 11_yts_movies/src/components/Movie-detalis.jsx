import React, { useState } from "react";
import CommentsList from "./CommentsList";

export function Moviedetalis(props) {
	const { movie = {}, onDeleteOverlay } = props;

	const [message, setMessage] = useState("");
	const [comments, setComments] = useState(
		JSON.parse(localStorage.getItem(movie.id))
			? JSON.parse(localStorage.getItem(movie.id))
			: []
	);

	const [pushed, setPushed] = useState(0);

	function readComments(id) {
		setComments(JSON.parse(localStorage.getItem(id)));
	}

	function writeComments(id, arr) {
		localStorage.setItem(id, JSON.stringify(arr));

		setMessage("");
	}

	function onChangeMessage(e) {
		setMessage(e.target.value);
	}

	function onClickMessage(e) {
		readComments(movie.id);
		setPushed(comments.push(message));
		setComments(comments);
		writeComments(movie.id, comments);
	}

	function onDeleteComm(e) {
		setComments(comments.splice(+e.target.alt, 1));
		writeComments(movie.id, comments);
		readComments(movie.id);
	}

	return (
		<div className='movie-detalis'>
			<span
				className='movie-detalis-close'
				onClick={() => onDeleteOverlay()}
			>
				&times;
			</span>
			<div className='wropper-comment'>
				<img
					src={movie.medium_cover_image}
					className='movie-image'
					alt='overlay'
				/>

				<textarea
					className='comment'
					name='message'
					value={message}
					placeholder='Введите комментарий'
					onChange={onChangeMessage}
				></textarea>

				<button
					className='btn send'
					value='send'
					onClick={onClickMessage}
				>
					Send
				</button>
			</div>
			<div className='comment-line'>
				<CommentsList comments={comments} onDeleteComm={onDeleteComm} />
			</div>
		</div>
	);
}
