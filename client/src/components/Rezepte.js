import Rezept from './Rezept';

const Rezepte = ( {rezepte, onDelete} ) => {  

    return (
        <>
            {rezepte.map(rezept => (
                <Rezept key={rezept.id} rezept={rezept} onDelete={onDelete}/>
            ))}
        </>
    )
}

export default Rezepte
