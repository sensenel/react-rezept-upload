import React, {useRef} from 'react';

const FileUploader = ( {onFileSelect} ) => {

    const fileInput = useRef(null);

    const handleFileInput = (e) => {

    // handle validations      
        const file = e.target.files[0];

/*         if (file.size > 4096) {
            onFileSelectError({ error: "File size cannot exceed more than 4MB" });
        } else {
            onFileSelectSuccess(file);
        } */
    };

    return (

        <div className="form-control">
            <label>Bild hinzufügen</label>
            <input type="file" onChange={handleFileInput} />
            <button 
                style={{background: 'green'}}
                onClick={e => fileInput.current && fileInput.current.click()} 
                className="btn"
                value='Speichern'>Speichern
            </button>
        </div>
    )
}

export default FileUploader