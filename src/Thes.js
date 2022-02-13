import './App.css';

import { useState } from 'react';
 import { data } from './data';

// import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';
//import Typography from '@mui/material/Typography';
//import Modal from '@mui/material/Modal';


function Thes ( {anyThe} ) {

  const [thes, setThes] = useState(data);

  //const [show, setShow] = useState(false);
  //const [open, setOpen] = useState(false);
  //const handleOpen = () => setOpen(true);
  //const handleClose = () => setOpen(false);

  const chosenThe = ( searchTerm ) => {
  const newThes = data.filter( element => element.searchTerm === searchTerm);
  setThes(newThes);
  }

   // const [anyT, setAnyT] = useState(anyThe);
   // const [showMore, setShowMore] = useState(false);

    const showShow = (id) => {
        const newTeas =[];
        thes.forEach( tea =>{ 
            if (tea.id === id) {        
            const changedTea = {...tea, showMore : !tea.showMore};
            newTeas.push(changedTea);
          //  console.log(tea.showMore, id);
            }
            else {
            newTeas.push(tea)
            }
        })
       // setShowMore(!showMore);
        
        setThes(newTeas);
        }

    return ( <div className='App'>
    <div className='column'>
        <button className='change vert' onClick = { () => chosenThe("vert") } > Thés verts </button>
        <button className='change noir' onClick = { () => chosenThe("noir") } > Thés noirs </button>
        <button className='change noel' onClick = { () => chosenThe("noel") } > Thés de Noël </button>
        <button className='change rouge' onClick = { () => chosenThe("rouge") } > Rooibos - Thés Rouges </button>
        <button className='change blanc' onClick = { () => chosenThe("blanc") } > Thés Blancs </button> 
        <button className='change detox' onClick = { () => chosenThe("detox") } > Bien-être - Détox </button> 
    </div>
<br/> <br/>

<div className=' products'>

{thes.map ( ( element => {
    const { id, name, price, image, ingredients, showMore} = element;
  //  const index = anyThe.indexOf(element);
    
    return (
        <div className='product-card'  key ={ id }>
            <div className='product-info'>
                <div className='frameimg'>
                <img className='phototea' src ={ image }  alt="the" />
                </div>
                
                <p className='teaname'>{ name } </p>
                <p className='ingredients'>  Sachet craft: 50g </p>
                <p className='price'>    { Math.round((price/10 + 2.2)*100) / 100} € </p>
                
                <p className='ingredients'> <span className="span-tea">Ingrédients:</span> { showMore ? ingredients : ingredients.substring(0, 5) + ".."} 
                <button className='btnMore' id = { id } onClick={ ()=> showShow(id) }> { showMore ?
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor"  viewBox="0 0 16 16">
                  <path  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                </svg>
                  : 
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor"  viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg>
                } </button>
                </p>

            <br/> <br/>
            </div>
        </div>
    )

}))}

</div>
</div>
)
}

export default Thes;