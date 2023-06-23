import React, {useState} from "react";
import {Card} from "react-bootstrap";
import ProductData from '../../assets/json/productData.json';
import sneaker from '../../assets/img/sneaker.jpg';
import { Link } from "react-router-dom";
import './productcard.css';
function CardItem (props){
    return(
        <Card style={{ width: '12rem' , paddingTop: '10px', }}>
        <Card.Img variant="top" src={props.img} style={{ width: '8rem', margin:'auto' }} />
        <Card.Body>
            <Card.Text style={{ textOverflow:'ellipsis', whiteSpace:"nowrap", overflow:'hidden'}}>
              {props.describe}
            </Card.Text>
            <Card.Title>${props.price}</Card.Title>
            <button className="card__sold">{props.sold} sold</button>
        </Card.Body>
        </Card>
    );
}   
function ProductList (props) {
    const initialDataShow = props.limit && ProductData ? ProductData.slice(0,Number(props.limit)): ProductData

    const [datashow, setdatashow] = useState(initialDataShow);

    let pages = 1;

    let range =[];

    if (props.limit !== undefined){
        let page = Math.floor(ProductData.length / Number(props.limit))
        pages = ProductData.length & Number(props.limit) === 0 ? page : page + 1
        range = [...Array(pages).keys()]
    }

    const [currPage,setCurrPage] = useState(0)

    const selectPage = page =>{
        const start = Number(props.limit) * page
        const end = start + Number(props.limit)

        setdatashow(ProductData.slice(start,end))
        setCurrPage(page)
    }
    return (
        <div>
        <div className="product__list">
            {
                datashow.map((item,index)=>(
                  <div className="product_card__" >
                      <Link className="product_card__Link"
                        to= "/productdetail"
                        state={{
                            name: item.name,
                            img: item.img,
                            describe: item.describe,
                        }}
                        
                      >
                        <CardItem key ={index}
                            // img = {item.img} đáng ra là code này nhưng tôi chưa biết cách đưa ảnh vào json nên để tạm
                            img = {item.img}
                            describe ={item.describe}
                            price = {item.price}
                            sold = {item.sold}    
                        />
                      </Link>  
                  </div>
              )) 

            }
            
        </div>
        {
              pages > 1 ? (
                  <div className="table__pagination">
                      {
                          range.map((item,index)=>(
                              <div key = {index} className={`table__pagination-item ${currPage === index ? 'active': ''}`} 
                                  onClick ={() => selectPage(index)}
                              >
                                  
                                  {item + 1}
                              </div>
                          ))
                      }
                  </div>
              ) : null
            }
        </div>
    );
}
 
export default ProductList