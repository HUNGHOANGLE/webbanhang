import React from 'react';
import Banner from '../../assets/img/bannerSNK.png';
import './product.css';
import sizeData from '../../assets/json/size.json';
import {Form} from 'react-bootstrap';
import ProductList from '../../components/cards/ProductList';

function SizeBtn (props){
  return(
    
    <button className='sizeBtn'>
      {props.size}
    </button>
  );
}

function Products () {
  
  return (
    <div className='productList'>
      <div className="banner">
        <img style={{width:'1264px'}} src={Banner} alt="banner" />
      </div>
      <div className="body">
        <div className="body__left">
            {/* Tên loại sản phẩm */}
            <h6>SNEAKER</h6>
            
            {/* Tên thương hiệu */}
            <div className="component">
              <h6>ADIDAS</h6>
              <h6>AIR JORDAN</h6>
              <h6>NIKE</h6>
              <h6>NEW BALANCE</h6>
              <h6>REEBOK</h6>
              <h6>OTHER BRANDS</h6>
              <h6>LUXURY BRANDS</h6>
              <h6>COLLECTIONS</h6>
            </div>
            
            {/* Tên loại kích thước */}
            <div className="component">
              <h6>SIZE TYPES</h6>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      Men
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      Women
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      Child
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      Preschool
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      Infant
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      Toddler
                    </label>
                </div>
            </div>

            {/* Kích thước */}
            <div className="component">
              <h6>SIZES</h6>
              {
                sizeData.map((item,index)=>(
                  <SizeBtn size = {item.size}/>
                ))
              }
            </div>

            {/* Giá cả */}
            <div className="component">
              <h6>PRICES</h6>
              <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      Under $100
                    </label>
                </div>
              <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      $100 - $200
                    </label>
                </div>
              <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      $200 - $300
                    </label>
                </div>
              <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      $300 - $400
                    </label>
                </div>
              <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      $400 - $500
                    </label>
                </div>
              <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      $500 - $600
                    </label>
                </div>
              <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      $600 - $700
                    </label>
                </div>
              <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      $700 +
                    </label>
                </div>
            </div>

            {/* Năm phát hành */}
            <div className="component">
              <h6>RELEASE YEARS</h6>
              <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      2022
                    </label>
                </div>
              <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      2021
                    </label>
                </div>
              <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      2020
                    </label>
                </div>
              <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      2019
                    </label>
                </div>
              <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      2018
                    </label>
                </div>
              <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      2017
                    </label>
                </div>
            </div>
        </div>
        <div className="body__right">
          <div className="header">
            <h6>Sort by</h6>
            <div className="header__sort">
              <Form.Select aria-label="Default select example">
                <option>Most popular</option>
                <option value="1">Featured Shoes</option>
                <option value="2">Trading Cards</option>
                <option value="3">Collectibles Staff Picks</option>
                <option value="4">Trendding sneaker</option>
                <option value="5">Release Calendar</option>
              </Form.Select>
            </div>
          </div>
          <div className="content">
            <h5>PRODUCT LIST</h5>
            {/* Giá trị limit là số lượng sản phẩm hiện lên mỗi trang */}
            <ProductList limit = '20'/>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Products;
