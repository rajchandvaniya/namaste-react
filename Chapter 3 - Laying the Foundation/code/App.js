import React from 'react';
import ReactDOM from 'react-dom';

const reactLogoUrl = 'https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png';


const HeaderComponent = () => {
    return (
        <div id='container' className='flex-container'>
            <div id='logo'><img src={reactLogoUrl}></img></div>
            <div id='searchbox'><input className='form-control' placeholder='search'/></div>
            <div id='user'><span className='glyphicon glyphicon-user'></span></div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeaderComponent />)