import React from 'react';

import Statuscard from './statuscard/Statuscard';
import statusCards from '../../assets/jsonData/status-card-data.json';
import './dashboard.css';
import ChartsPage from './chart/Chart';
import ChartsCicle from './chart/ChartCircle';
import Topcustomers from './table/Topcustomers';
import Topproducts from './table/Topproducts';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
        <h2 className="page-header">Dashboard</h2>
        <div className="row">
          <div className="col-12">
            <div className="row">
              {
                statusCards.map((item,index)=>(
                 <div className='col-3'>
                    {/* Đây là chỗ để mấy cái card */}
                    <Statuscard
                      icon = {item.icon}
                      count = {item.count}
                      title = {item.title}
                    />
                 </div> 
                ))
              }
            </div>
          </div>
          <div className="col-8">
            <div className="card full-height">
              {/* Phần biểu đồ */}
              <ChartsPage/> 
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card__header">
                <h6>Top customers</h6>
                <div className="card__header__right">
                  <Link to='/customer'> view all </Link>
                </div>
              </div>
              <div className="card__body">
                {/*Bảng*/}
                <Topcustomers/>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className='card__header'>
                  <h6>TOP PRODUCTS</h6>
                  <div className="card__header__right">
                    <Link to='/products'> view all </Link>
                </div>
              </div>
              <div className="card__body">
                {/*Bảng*/}
                <Topproducts/>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className='card__header'>
                  <h6>RECENT TRANSCATION</h6>
                  <div className="card__header__right">
                    <Link to='/chart'> view all </Link>
                </div>
              </div>
              <div className="card__body">
                {/*Biểu đồ hình tròn*/}
                <ChartsCicle/>
              </div>
            </div>
          </div>
        </div>
        
    </div>
  );
}

export default Dashboard;
