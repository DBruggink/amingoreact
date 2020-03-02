import React from 'react'
import Logo from './AlphaSportBlack.png'

function Footer(){
    
    const footerStyle={
       
        display: 'inline',
        color:'#343a40'
        
        

    }

    const listStyle={
        display: 'inline-block',
       margin: '2em'
    }

    const boxStyle={
         marginTop:'-100px',
        display: 'inline',
        
    }

    const logoStyle ={
        width:'150px',
        alt: '300px',
        marginBottom:'-30px'
    }
    
    
    return(

        
        <div className='footer-navigation-links'style={footerStyle}>
            <img src={Logo} style={logoStyle}/>
            <div>
            <ul style={boxStyle} >
            <li style={listStyle}><a href=''>Home</a> </li>
            

            <li style={listStyle}><a href=''>About Us</a></li>
            
            <li style={listStyle}><a href=''>Profile</a></li>

            <li style={listStyle}><a href=''>Feed</a></li>
            <li style={listStyle}><a href=''>Login</a></li>

            <li style={listStyle}><a href=''>Registration</a></li>            
            </ul>
            </div>



        </div>

)
}

export default Footer