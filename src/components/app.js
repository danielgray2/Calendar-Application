import React from 'react';
import UserInput from '../containers/userInput';
import '../styles/global-styles'
const App = () => (
    <div className = 'wrapper'>
        <img className = "opening-picture" src = 'http://3.bp.blogspot.com/-C6VyehnRW7Y/U1A06hp-ijI/AAAAAAAADXQ/n5gM4opylGM/s1600/zzbowhunt+foto.jpg'/>
        <h1>Buy a Bow:</h1>
        < UserInput/>
    </div>
)

export default App;