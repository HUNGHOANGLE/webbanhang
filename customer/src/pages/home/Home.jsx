import React from 'react';
import './home.css';
import Banner from '../../components/banner/Banner';
import Banner2 from '../../components/banner/Banner2';
import Banner3 from '../../components/banner/Banner3';
import ProductCard from '../../components/cards/productCard';
import BrandCard from '../../components/cards/brandCard';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <section className='homeheader'>
          <Link to='/sneaker' class='homeheader__Link'><h5>Sneaker</h5></Link>
          <Link to='/apparel' class='homeheader__Link'><h5>Apparel</h5></Link>
          <Link to='/electronics' class='homeheader__Link'><h5>Electronics</h5></Link>
          <Link to='/trading-cards' class='homeheader__Link'><h5>Trading Cards</h5></Link>
          <Link to='/collectibles' class='homeheader__Link'><h5>Collectibles</h5></Link>
          <Link to='/accessories' class='homeheader__Link'><h5>Accessories</h5></Link>
          <Link to='/nfts' class='homeheader__Link'><h5>NFTs</h5></Link>
      </section>
      <div className="homebanner">
        <Banner/>
      </div>
      <div className="popularbrand">
        <div className="headerList">
          <h3>Most Popular Sneakers</h3>
          <div className="headerList__right">
            <Link to='/product' class='headerList__right-link' >See all
              <i class='bx bxs-right-arrow-alt'></i>
            </Link>
          </div>
        </div>
        
        <div className="popularbrand__content">
          <ProductCard/>
        </div>        
      </div>
      <div className="popularbrand">
        <div className="headerList">
          <h3>Poppular Brands</h3>
          <div className="headerList__right">
            <Link to='/product' class='headerList__right-link' >See all
              <i class='bx bxs-right-arrow-alt'></i>
            </Link>
          </div>
        </div>
        
        <div className="popularbrand__content">
          <BrandCard/>
        </div>        
      </div>
      <div className="popularbrand">
        <h3>Featured Shoes</h3>
        <div className="popularbrand__content">
          <ProductCard/>
        </div>        
      </div>
      <div className="homebanner">
        <Banner2/>
      </div>
      <div className="popularbrand">
      <div className="headerList">
      <h3>Featured Trading Cards</h3>
          <div className="headerList__right">
            <Link to='/product' class='headerList__right-link' >See all
              <i class='bx bxs-right-arrow-alt'></i>
            </Link>
          </div>
        </div>
        
        <div className="popularbrand__content">
          <ProductCard/>
        </div>        
      </div>
      <div className="popularbrand">
      <div className="headerList">
      <h3>Collectibles Staff Picks</h3>
          <div className="headerList__right">
            <Link to='/product' class='headerList__right-link' >See all
              <i class='bx bxs-right-arrow-alt'></i>
            </Link>
          </div>
        </div>
        
        <div className="popularbrand__content">
          <ProductCard/>
        </div>        
      </div>
      <div className="homebanner">
        <Banner3/>
      </div>
      <div className="popularbrand">
      <div className="headerList">
      <h3>Trendding sneaker</h3>
          <div className="headerList__right">
            <Link to='/product' class='headerList__right-link' >See all
              <i class='bx bxs-right-arrow-alt'></i>
            </Link>
          </div>
        </div>
        
        <div className="popularbrand__content">
          <ProductCard/>
        </div>        
      </div>
      <div className="popularbrand">
      <div className="headerList">
      <h3>Release Calendar</h3>
          <div className="headerList__right">
            <Link to='/product' class='headerList__right-link' >See all
              <i class='bx bxs-right-arrow-alt'></i>
            </Link>
          </div>
        </div>
        
        <div className="popularbrand__content">
          <ProductCard/>
        </div>        
      </div>
    </div>
  );
}

export default Home;
