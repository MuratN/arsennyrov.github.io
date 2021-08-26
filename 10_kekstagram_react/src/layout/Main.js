import React from "react";
import { Photos } from "../components/Photos";
import { Upload } from "../components/Upload";
import { Header } from "./Header";

class Main extends React.Component {
	state = {
		photos: [],
		photos0: [],
		clonephotos: [],
		loading: true,
		srcupload: "",
		classname: 'upload-overlay hidden'
	};

	componentDidMount() {
		fetch(
			"https://raw.githubusercontent.com/MuratN/muratn.github.io/main/kekstagram/source.json"
		)
			.then((response) => response.json())
			.then((data) => this.setState({ photos: data, photos0: data, loading: false }));
	}

	onChangeUp = (e) => {
		this.setState({srcupload: "../../photos/" + e.target.files[0].name });
		this.setState({classname: 'upload-overlay'})   
	};

	onDeleteUp = () => {
		this.setState({classname: 'upload-overlay hidden'}) 
	};

	onChangeHeader = (e) => {
		const clonephotos = this.state.photos0.slice();

		switch(e.target.value) {
			case 'recommend':

/* 				setState - асинхронная функция и обновлять его можно только так
					через функцию коллбэк - иначе нормально работать не будет.
				Причем обновлять надо именно state, а не объект. */ 
				// Важно: используем `state` вместо `this.state` при обновлении.

				this.setState((state) => {return {photos: state.photos0 }});
				break;
			case 'popular':				
		        clonephotos.sort((a, b) => a.likes > b.likes ? -1 : 1);
				this.setState((state) => {return {photos: clonephotos }});
				break;

			case 'discussed':				
				clonephotos.sort((a, b) => b.comments.length - a.comments.length);
				this.setState((state) => {return {photos: clonephotos }});
				break;

			case 'random':				
		        /*    перетасовка массив arrRand случайным образом     */
		        const arrRand = [];
		        let a1;
		        let b1;
		        const onLoad1 = [];
		        for (let i = 0; i < 25; i++) {
            		arrRand[i] = i;
		        };

		        for (let i = 0; i < 25; i++) {
	            a1 = Math.floor(Math.random() * 24);
            	b1 = arrRand[a1];
	            arrRand[a1] = arrRand[i];
    	        arrRand[i] = b1;
        	};

	        for (let i = 0; i < 25; i++) {
    	        onLoad1[i] = this.state.photos0[arrRand[i]];
        	};

	        for (let i = 0; i < 10; i++) {
    	        clonephotos[i] = onLoad1[i];
        	};
			this.setState((state) => {return {photos: clonephotos.slice(0, 10) }});
				break;	
				default:
				}
	
	}

	render() {
		const { srcupload, photos = [], classname } = this.state;


		return (

			<>
			
{/* 		Для получения номера выбранного в модуле Header пункта меню
			отправляю onChangeHeader={this.onChangeHeader} в Header,
			чтобы он там сработал при нажатии на пункте меню.
			Результат нажатия в том модуле отразится здесь внутри функции 
			onChangeHeader в этом модуле Main. */}

			<Header photos={photos} onChangeHeader={this.onChangeHeader} />

			<main className='main content'>
				<form
					className='upload-form'
					id='upload-select-image'
					method='post'
					encType='multipart/form-data'
					autoComplete='off'
				>
					<div className='upload-image'>
						<input
							type='file'
							id='upload-file'
							className='upload-input'
							name='filename'
							required
							onChange={this.onChangeUp}
						/>
						<label
							className='upload-file upload-control'
							htmlFor='upload-file'
						></label>
					</div>

 						   {
							<Upload 
								srcupload={srcupload} 
								onDeleteUp={this.onDeleteUp}
								classname={classname}
								/>
						   }

 					<div className='upload-message hidden'>
						<div className='upload-message-container'></div>
					</div> 

				</form>

			<div className='form-header'
					omChange={this.onChangeHeader}
			>

			</div>


				<Photos photos={photos} />
			</main>
		</>
		);
	}
}

export { Main };

