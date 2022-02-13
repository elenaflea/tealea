import './App.css';
// import { useState } from 'react';

//import { data } from './data';
import Thes from './Thes';
// import Buttons from './Buttons';


function Home () {

 //   const [thes, setThes] = useState(data);

 //   const chosenThe = ( searchTerm ) => {
 //   const newThes = data.filter( element => element.searchTerm === searchTerm);
 //   setThes(newThes);
//  }

 // <Buttons filteredThes = { chosenThe } />

    return (
        <div className="App">
          <br/>
    
        <div className='App'>
            <p className='back'>Home /</p>
            <h3 className='tete'>Les Produits</h3>
          </div>

        <Thes />
            
        </div>
    )
}

export default Home;