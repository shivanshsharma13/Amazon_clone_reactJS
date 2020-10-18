import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://fortheloveblog.com/wp-content/uploads/2016/07/Amazon-Prime-Banner.jpg" alt="main_image"></img>
                
                <div className="home__row">
                    <Product title="Macbook Pro" 
                            image="https://images-na.ssl-images-amazon.com/images/I/61Ph%2BWQVT5L._AC_SL1400_.jpg" 
                            price="999.99" 
                            rating={4}/>
                    <Product title="Mivi Duo Pods" 
                            image="https://images-na.ssl-images-amazon.com/images/I/715gxRXsIDL._SL1500_.jpg" 
                            price="40.54" 
                            rating={5}/>
                </div>

                <div className="home__row">
                <Product title="Corporate Business Diary" 
                            image="https://images-na.ssl-images-amazon.com/images/I/61xbCQegkNL._SL1000_.jpg" 
                            price="19.67" 
                            rating={3}/>
                
                <Product title="Apple Watch" 
                            image="https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_SL1500_.jpg" 
                            price="99.89" 
                            rating={4}/>
                
                <Product title="NVIDIA GeForce RTX 2070" 
                            image="https://images-na.ssl-images-amazon.com/images/I/61EyqvcmZKL._AC_SL1500_.jpg" 
                            price="700.00" 
                            rating={5}/>
                </div>

                <div className="home__row">
                <Product title="Ultra wide Monitor" 
                            image="https://icdn3.digitaltrends.com/image/digitaltrends/asus-rog-strix-xg49vq-500x500.jpg" 
                            price="980.00" 
                            rating={4}/>
                </div>


            </div>
        </div>
    )
}

export default Home 
