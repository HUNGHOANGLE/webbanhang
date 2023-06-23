import React from "react";
import bannerimg3 from '../../assets/img/bannerss2_3.png';
import bannerimg4 from '../../assets/img/bannerss2_4.png';
import './banner.css';
function Banner3(){
    return(
      <div className="banner2">
          <div className="banner3_1">
            <img src={bannerimg3} alt="Quảng cáo 3" />
          </div>
          <div className="banner3_2">
            <img src={bannerimg4} alt="Quảng cáo 4" />
          </div>
        
      </div>  
    );
}
export default Banner3