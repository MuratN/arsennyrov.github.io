import React, { useState } from "react";
import { Photo } from "./Photo";
import { Photooverlay } from "./Photooverlay";

function Photos(props) {
	const { photos = [] } = props;

	const [visible, setVisible] = useState(false);
	const [url0, setUrl] = useState("");
	const [index, setIndex] = useState(0);
	const [classnameoverlay, setClassnameoverlay] = useState(
		"gallery-overlay hidden"
	);

	function onDeleteOverlay() {
		setClassnameoverlay("gallery-overlay hidden");
		setVisible(false);
	}

	function onClick(e) {
		if (e.target.localName === "img") {
			setVisible(true);
			setUrl(e.target.src);
			setClassnameoverlay("gallery-overlay");
			setIndex(e.target.src.match(/\/([0-9]*).\s*[^.]+$/)[1] - 1);
		}
	}

	return (
		<div className='pictures container' onClick={onClick}>
			{photos.map((photo) => (
				<Photo key={photo.url} {...photo} />
			))}

			{visible ? (
				<Photooverlay
					url0={url0}
					index={index}
					photos={photos}
					onDeleteOverlay={onDeleteOverlay}
					classnameoverlay={classnameoverlay}
				/>
			) : (
				""
			)}
		</div>
	);
}
export { Photos };
