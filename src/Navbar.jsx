import logoIMG from './assets/logo.png'
import './navbar.css'
const Navbar = ()=>{
  return(  
<nav id="navbar">
   <img src={logoIMG} alt="logo" /> 
   <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Contact</a></li>
   </ul>
   
</nav>
  )
}

export default Navbar