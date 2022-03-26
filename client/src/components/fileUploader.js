import React from 'react';
import axios, { post } from 'axios';

//von hier abgeleitet: https://gist.github.com/AshikNesin/e44b1950f6a24cfcd85330ffc1713513/revisions

class FileUploader extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    })
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }
  fileUpload(file){
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

  render() {
    return (
        <form onSubmit={ this.onFormSubmit }>
            <div className='form-control'>
                <label>Bild hinzufügen</label>
                <input type="file" onChange={this.onChange} />
            </div>
            <button style={{background: 'green'}} className='btn' type="submit">Upload</button>
        </form>
   )
  }
}



export default FileUploader