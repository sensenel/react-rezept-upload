import { useState } from 'react';
import Header from './components/Header';
import Rezepte from './components/Rezepte';
import AddRezept from './components/AddRezept';

function App() {

  const [rezepte, setRezepte] = useState([
    {
        id: 1, 
        title: 'Rezept 1',
        info: 'gut zu wissen',
        link: 'https://google.com',
        text: 'Zubereitung etc',
        image: 'default.png'
      },
      {
        id: 2, 
        title: 'Rezept 2',
        info: 'gut zu wissen',
        link: 'https://google.com',
        text: 'Zubereitung etc',
        image: 'default.png'
    },
    {
        id: 3, 
        title: 'Rezept 3',
        info: 'gut zu wissen',
        link: 'https://google.com',
        text: 'Zubereitung etc',
        image: 'default.png'

    },
    {
        id: 4, 
        title: 'Rezept 4',
        info: 'gut zu wissen',
        link: 'https://google.com',
        text: 'Zubereitung etc',
        image: 'default.png'
    }
  ]);

  console.log(rezepte);

// Add Rezept
  const addRezept = (rezept) => {
    const id = rezepte.length + 1;
    
    const newRezept = { id, ...rezept};
    setRezepte([...rezepte, newRezept]);
    //console.log(rezept);
  }

//Delete Rezept 
  const deleteRezept = (id) => {
    
    if(window.confirm('Rezept wirklich löschen?')) {
      if(window.confirm('Jetz echt??')) {
        setRezepte(rezepte.filter((rezept) => rezept.id !== id));
      }
    } else {
      rezepte.map(rezept => {
        if(rezept.id === id) {alert(`Löschen abgebrochen! \nCool! \n${rezept.title} bleibt uns erhalten!`)}

      })
    }
  }

  return (
    <div className="App">
      <Header />
      <AddRezept onAdd={addRezept}/>
      <div className='rezepte-container flex'>
        { rezepte.length > 0 ? 
          <Rezepte rezepte={rezepte} 
              onDelete={deleteRezept}
          /> 
          : <h3>Bisher keine Rezepte</h3>
        }
      </div>
    </div>
  );
}

export default App;
