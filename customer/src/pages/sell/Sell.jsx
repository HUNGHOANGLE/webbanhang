import React from 'react'
import './sell.css'

import DATA from '../../assets/json/productData.json'

const Sell = () => {
    const [searchValue, setSearchValue] = React.useState("");
    const [listData, setListData] = React.useState([]);
    
    const handleSearch = (e) => {
        
        console.log(searchValue);
        let searchList = DATA.filter(data => data.name.includes(searchValue));
        setListData(searchList);
    }
    return (
        <div className='sell_page'>
            <div className="title">
                Choose a product
            </div>
            <div className="title2">
                Find the product you're looking for to continue
            </div>
            <input
                type="search"
                name="search-form"
                id="search-form"
                className="search-input"
                placeholder="Search for..."
                value={searchValue}
                /*
                // set the value of our useState q
                //  anytime the user types in the search box
                */
                onChange={(e)=>{setSearchValue(e.target.value)}}
                onKeyDown={handleSearch}
            />
            <div className="body_area">
                {
                    listData.map((item, index) => (
                        <div className='item' key={index}>
                            <div className="item_left">
                                <img src={item.img} alt="item" className="item_image" />
                            </div>
                            <div className="item_right">
                                <div className="item_name">
                                    {item.name}
                                </div>
                                <div className="item_describe">
                                    {item.describe}
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Sell
