import React from "react";
import Brand from '../../assets/img/brand.png'
import './productcard.css';
function BrandCard (){
    return(
        <div className="product__content">  
            <div className="product_card">  
                <img src={Brand} alt='Ảnh logo'/>
            </div>
            <div className="product_card">  
                <img src={Brand} alt='Ảnh logo'/>
            </div>
            <div className="product_card">  
                <img src={Brand} alt='Ảnh logo'/>
            </div>
            <div className="product_card">  
                <img src={Brand} alt='Ảnh logo'/>
            </div>
            <div className="product_card">  
                <img src={Brand} alt='Ảnh logo'/>
            </div>
        </div>
    );
}   
export default BrandCard