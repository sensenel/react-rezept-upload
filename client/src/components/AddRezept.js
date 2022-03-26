import React, { useState } from 'react'
import axios from 'axios'
//import FileUploader from './FileUploader';
//import api from "./Api";

//finale File Upload Lösung von hier: https://www.youtube.com/watch?v=b6Oe2puTdMQ&t=740s

const AddRezept = ({ onAdd }) => {

    const [title, setTitle] = useState('');
    const [info, setInfo] = useState('');
    const [link, setLink] = useState('');
    const [text, setText] = useState('');
    const [image, setImage] = useState('');
    const [imageName, setImageName] = useState('');
    //Datum?

    const onChange = event => {
        event.preventDefault();
        setImage(event.target.files[0]);
        setImageName(event.target.files[0].name);
    }
    //console.log(image);


        const onSubmit = async (e) => {
            e.preventDefault();
            //if(!title ){ alert('Rezept hat keinen Titel'); }
            onAdd( {title, info, link, text, imageName} );
            
/*             setTitle('');
            setInfo('');
            setLink('');
            setText('');
            setImage(''); */

            const formData = new FormData();
            //formData.append("name", name);  
            formData.append("file", image);
            //formData.append("imageName", imageName);
          
           
            const res = await axios.post('/images', formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
            });
            
            //throw new Error('debug');

        }


    return (
        <>
            <form className='add-form' onSubmit={ onSubmit }>
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
                    <input 
                        type='file'                    
                        accept='image/*'
                        onChange={ onChange }
                        />
                </div>

                <button style={{background: 'green'}} className='btn'>Speichern</button>

            </form>
                {/* <FileUploader /> */}
        </>
    )
}

export default AddRezept
