export function Services() {

	return (
		fetch(
			"https://raw.githubusercontent.com/MuratN/muratn.github.io/main/kekstagram/source.json"
		)
			.then((response) => response.json())
			.then((data) => this.setState({ photos: data, loading: false }))

	);
}
