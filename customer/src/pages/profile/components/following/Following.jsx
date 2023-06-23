import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import TableComponent from '../Table/Table';
import FlowingList from "../../../../assets/json/profileFollowing.json";
import "./following.css"
const buyingTableHead = [
  "Name",
  "Market Value",
  "Lowest Ask",
  "Last Sale",
  ""
]
const renderHead = (item, index) => <th key={index}>{item}</th>
const renderBody = (item, index) => (
  <tr>
    <td>
      <div className="item__">
        <img src={item.Image_url} style={{ width: 100 }} />
        <div>
          <div className='Item_title' >{item.Name}</div>
          <div className='Item_size'>{item.Size}</div>
        </div>
      </div>
    </td>
    <td>{item.MarketValue}</td>
    <td>{item.LowestAsk}</td>
    <td>{item.LastSale}</td>
    <td><i class='bx bxs-trash delete_item'style={{fontSize:24}}></i></td>
  </tr>
)
const Following = () => {
  const [key, setKey] = React.useState('current');
  return (
    <div>
      <h3>Following</h3>
      <TableComponent
        limit='5'
        headData={buyingTableHead}
        renderHead={(item, index) => renderHead(item, index)}
        bodyData={FlowingList}
        renderBody={(item, index) => renderBody(item, index)}
      />
    </div>
  );
}

export default Following;
