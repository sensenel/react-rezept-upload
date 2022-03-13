import { FaTimes } from 'react-icons/fa';

const Rezept = ( {rezept, onDelete} ) => {
    return (
        <div className='rezept'>
            <div className='rezept-img'>
                <img 
                    src={rezept.image[0].name ? '/images/' + rezept.image[0].name : '/images/default.png'} 
                    alt={`${rezept.title} Bild`} />
            </div>
            <div className='rezept-title flex'>
            <h3>{rezept.title}</h3>
                <p><FaTimes 
                    style={ {color:'red', cursor: 'pointer'}}
                    onClick={() => onDelete(rezept.id)}
                    />
                </p>
            </div>
            <div className='rezept-content'>
                <p>{rezept.info}</p>
                <a href={rezept.link} target="_blank">Link</a>
            </div>
        </div>
    )
}

export default Rezept
