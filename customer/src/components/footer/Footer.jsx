import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
const footer = () => {
  return (
    <div className="footer">
      <div className='row'>
        <div className="col-1"></div>
        <div className="col-3">
          <div className="footer-left">
            <h3 className="name-logo">
              SZF Shop
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad alias, dignissimos odio libero natus similique veniam dolor neque aspernatur quae! Mollitia obcaecati nostrum minus repellat odio impedit magni, ipsum eveniet?
            </p>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-1">
          <div className="row">
            <h6>PRODUCTS</h6>
            <Link class="link-footer" to='/hom'>Home</Link>
            <Link class="link-footer" to='/hom'>Home</Link>
            <Link class="link-footer" to='/hom'>Home</Link>
            <Link class="link-footer" to='/hom'>Home</Link>
            <Link class="link-footer" to='/hom'>Home</Link>
          </div>
        </div>
        <div className="col-1">
          <div className="row">
            <h6>BRANDS</h6>
            <Link class="link-footer" to='/hom'>Home</Link>
            <Link class="link-footer" to='/hom'>Home</Link>
            <Link class="link-footer" to='/hom'>Home</Link>
            <Link class="link-footer" to='/hom'>Home</Link>
            <Link class="link-footer" to='/hom'>Home</Link>
          </div>
        </div>
        <div className="col-1">
          <div className="row">
            <h6>LINKS</h6>
            <Link class="link-footer" to='/hom'>Home</Link>
            <Link class="link-footer" to='/hom'>Home</Link>
            <Link class="link-footer" to='/hom'>Home</Link>
            <Link class="link-footer" to='/hom'>Home</Link>
            <Link class="link-footer" to='/hom'>Home</Link>
          </div>
        </div>
        <div className="col-1">
          <div className="row">
            <h6>ABOUT US</h6>
            <Link class="link-footer" to='/hom'>Home</Link>
            <Link class="link-footer" to='/hom'>Home</Link>
            <Link class="link-footer" to='/hom'>Home</Link>
            <Link class="link-footer" to='/hom'>Home</Link>
            <Link class="link-footer" to='/hom'>Home</Link>
          </div>
        </div>
        <div className="col-1">
          <div className="row">
            <h6>CONTACT</h6>
            <Link class="link-footer" to='/hom'>Home</Link>
            <Link class="link-footer" to='/hom'>Home</Link>
            <Link class="link-footer" to='/hom'>Home</Link>
            <Link class="link-footer" to='/hom'>Home</Link>
            <Link class="link-footer" to='/hom'>Home</Link>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default footer;
