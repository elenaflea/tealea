import './App.css';
import { useState } from 'react';
import { dataAbout } from './dataAbout';

function About () {
    const [about, setAbout] = useState(0);
    const {photo, heading, text } = dataAbout[about];

    const previousItem = () => {
        setAbout ((item => {
          item -- ;
          if (item < 0 ) {
            item = dataAbout.length -1;
          }
          return item;
        }))
        
      }
    
      const nextItem = () => {
    
        setAbout (( item => {
            item ++;
            if (item > dataAbout.length -1 ) {
              item = 0;
            }
            return item;
        }))
      }

    return (
        <div className='App'>
            <br/>
            <p className='back'>About /</p>
            <h3 className='tete'>Notre Histoire</h3>


            <div className="frameimg360" >
            <img className="phototea360" src={ photo } width="360px" alt="about"/>
            </div>

            <div className='btn'>
                <button onClick={previousItem} className='btnMore'>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"  viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                </svg>
                </button>
                <button onClick={nextItem} className='btnMore'>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"  viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
                    </button>
            </div>

            <p className="soutitre">{ heading }</p>
            <p className="about">{ text }</p>
            <br/> <br/>
          </div>
    )
}

export default About;