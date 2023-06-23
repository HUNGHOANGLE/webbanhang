import React from "react";
import bannerimg1 from '../../assets/img/bannerss2_1.png';
import bannerimg2 from '../../assets/img/bannerss2_2.png';
import './banner.css';
function Banner2(){
    return(
      <div className="banner2">
          <div className="banner2_1">
            <img src={bannerimg1} alt="Quảng cáo 1" />
          </div>
          <div className="banner2_2">
            <img src={bannerimg2} alt="Quảng cáo 2" />
          </div>
        
      </div>  
    );
}
export default Banner2