import React, { useState } from 'react';
import axios, { post } from 'axios';

//von hier abgeleitet: https://gist.github.com/AshikNesin/e44b1950f6a24cfcd85330ffc1713513/revisions

/* WICHTIG:
 * per default muss im dev-Server der pfad in das files hochgeladen werden, von der Watch-Liste genommen werden!
 * reload Page nach Upload deaktivieren: 
 * /Applications/MAMP/htdocs/react-rezepte/react-rezept-upload/client/node_modules/webpack/package.json
 * "<rootDir>/.public/images"
 * UPDATE: bisher immer noch sehr willkürlich und unzuverlässig 
 */

//class FileUploader extends React.Component {
const FileUploader = ( {onAdd} ) => {
/*   constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  } */

  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const [link, setLink] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const [imageName, setImageName] = useState('');


  const onFormSubmit = (e) => {
    e.preventDefault() // Stop form submit

	onAdd( {title, info, link, text, image} );

    fileUpload(image).then((response)=>{
      //console.log(response.data);
    })
  }
  const onChange = (e) => {
    setImage(e.target.files[0]);
  }
  const fileUpload = (file)=> {
    const url = '/images';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        credentials: 'include',
        method: 'POST',
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }

	return (
		<form onSubmit={ onFormSubmit }>
			<div className='form-control'>
				<label>Rezept</label>
				<input 
					type='text' 
					placeholder='Rezept rein da'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					/>
			</div>
			<div className='form-control'>
				<label>Info</label>
				<input 
					type='text' 
					placeholder='Info / Bemerkung' 
					value={info}
					onChange={(e) => setInfo(e.target.value)}
					/>
			</div>
			<div className='form-control'>
				<label>Zubereitung</label>
				<textarea 
					rows='4' 
					placeholder='Zubereitung'
					value={text}
					onChange={(e) => setText(e.target.value)}>
				</textarea>
			</div>
			<div className='form-control'>
				<label>Link zum Rezept?</label>
				<input 
					type='text' 
					placeholder='URL vorhanden?' 
					value={link}
					onChange={(e) => setLink(e.target.value)}
					/>
			</div>		
			<div className='form-control'>
				<label>Bild hinzufügen</label>
				<input type="file" onChange={onChange} />
			</div>
			<button style={{background: 'green'}} className='btn' type="submit">Upload</button>
		</form>
	)

}



export default FileUploader