import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import './Footer.css'
const Footer = () => {
    return (
        <footer id='footer'>
            <div>
                <img src={icon1} alt="" />
                <h5>Free Shipping Method</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
                <img src={icon2} alt="" />
                <h5>Secure Payment System</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
                <img src={icon3} alt="" />
                <h5>Secure Payment System</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </footer>
    )
}


export default Footer;