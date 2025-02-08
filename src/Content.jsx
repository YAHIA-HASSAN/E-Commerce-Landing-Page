import item1 from './assets/product1.png';
import item2 from './assets/product2.png';
import item3 from './assets/product3.png';
import './Content.css'
const Content = () => {
    return (
        <section id="content">
            <h2>New Arrivals</h2>
            <div id="show-items">
                <div className="item">
                    <img src={item1} alt="" />
                    <p>
                        Thermo Ball Etip Gloves
                        <br />
                        <span className='price'>$ 45,743</span>
                    </p>
                </div>
                <div className="item">
                    <img src={item2} alt="" />
                    <p>
                        Thermo Ball Etip Gloves
                        <br />
                        <span className='price'>$ 45,743</span>
                    </p>
                </div>
                <div className="item">
                    <img src={item3} alt="" />
                    <p>
                        Thermo Ball Etip Gloves
                        <br />
                        <span className='price'>$ 45,743</span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Content;