import React from 'react';
import data from '../../assets/json/allBids.json';
import './popup.css';
function ViewAsk (props) {
    return (
        
            <div className="viewBox">
                {props.content}
                <div className="viewBox_header">
                    <div className="header__content">
                        <h4>All Asks</h4>
                        <p>The data below is global and does not include applicable fees calculated at checkout.</p>
                    </div>
                    <button className='btn__del' onClick={props.handleClose} > X </button>
                </div>
                <hr />
                <div className="table-wrapper">
                    <table className='table-basic'>
                        <thead className='table-basic-thead'>
                        <tr>
                            <th>Quantity</th>
                            <th>Size</th>
                            <th>Ask Price</th>
                        </tr>
                        </thead>
                        <tbody className='table-basic-tbody'>
                        {data.map((val, key) => {
                        return (
                            
                            <tr key={key}>
                                <td>{val.quantity}</td>
                                <td>{val.size}</td>
                                <td>{val.price}</td>
                            </tr>
                            
                        )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        
    );}
export default ViewAsk
