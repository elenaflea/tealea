import './App.css';
import { data } from './data';
import { useState } from 'react';



function Buttons ( { filteredThes } ) {

    const [thes, setThes] = useState(data);

    const chosenThe = ( searchTerm ) => {
    const newThes = thes.filter( element => element.searchTerm === searchTerm);
    setThes(newThes);
  }
return (

    <div className='column'>
        <button className='change vert' onClick = { () => chosenThe("vert") } > Thés verts </button>
        <button className='change noir' onClick = { () => chosenThe("noir") } > Thés noirs </button>
        <button className='change noel' onClick = { () => chosenThe("noel") } > Thés de Noël </button>
        <button className='change rouge' onClick = { () => chosenThe("rouge") } > Rooibos - Thés Rouges </button>
        <button className='change blanc' onClick = { () => chosenThe("blanc") } > Thés Blancs </button> 
        <button className='change detox' onClick = { () => chosenThe("detox") } > Bien-être - Détox </button> 
    </div>



)
}

export default Buttons;