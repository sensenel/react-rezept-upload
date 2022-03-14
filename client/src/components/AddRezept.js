import React, { useState } from 'react'
import axios from 'axios'
//import api from "./Api";

const AddRezept = ({ onAdd }) => {

    const [title, setTitle] = useState('');
    const [info, setInfo] = useState('');
    const [link, setLink] = useState('');
    const [text, setText] = useState('');
    const [image, setImage] = useState('');
    //Datum?

    const onChange = (e) => {
        setImage(e.target.files[0]);
    }
    //console.log(image);


        const onSubmit = async (e) => {
            e.preventDefault();
            //if(!title ){ alert('Rezept hat keinen Titel'); }
            
            onAdd( {title, info, link, text, image} );
            
            setTitle('');
            setInfo('');
            setLink('');
            setText('');
            //setImage('');

            const formData = new FormData();
            //formData.append("name", name);  
            formData.append("file", image);
          
           
                const res = await axios.post('/images', formData, {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                });
            
                //throw new Error('debug');

        }


    return (
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
                    acept='image/*'
                    onChange={ onChange }
                    />
            </div>

            <input style={{background: 'green'}} className='btn' type='submit' value='Speichern' />

        </form>
    )
}

export default AddRezept
