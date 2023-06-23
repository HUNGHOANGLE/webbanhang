import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import TableComponent from '../Table/Table';
import HisToryList from "../../../../assets/json/profileHistory.json";
import PenddingList from "../../../../assets/json/profilePendding.json";
import CurrentList from "../../../../assets/json/profileCurent.json";

const buyingTableHead = [
  "Item",
  "Style",
  "PurchaseDate",
  "Price",
  "Status"
]
const renderHead = (item, index) => <th key={index}>{item}</th>
const renderBody = (item, index) => (
  <tr>
    <td>
      <div className="description">{item.Desctition}</div>
      <div className="titlePro">{item.name}</div>
      <div className="size">Size: {item.Size}</div>
    </td>
    <td>{item.Style}</td>
    <td>{item.PurchaseDate}</td>
    <td>{item.Price}</td>
    <td>{item.Status}</td>
  </tr>
)
const Buying = () => {
  const [key, setKey] = React.useState('current');
  return (
    <div>
      <div className="header">
        <h3>Buying</h3>
      </div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="current" title="Current">
          <TableComponent
            limit='3'
            headData={buyingTableHead}
            renderHead={(item, index) => renderHead(item, index)}
            bodyData={CurrentList}
            renderBody={(item, index) => renderBody(item, index)}
          />

        </Tab>
        <Tab eventKey="pending" title="Pending">

          <TableComponent
            limit='3'
            headData={buyingTableHead}
            renderHead={(item, index) => renderHead(item, index)}
            bodyData={PenddingList}
            renderBody={(item, index) => renderBody(item, index)}
          />

        </Tab>
        <Tab eventKey="history" title="History">

          <TableComponent
            limit='3'
            headData={buyingTableHead}
            renderHead={(item, index) => renderHead(item, index)}
            bodyData={HisToryList}
            renderBody={(item, index) => renderBody(item, index)}
          />

        </Tab>
      </Tabs>
    </div>
  );
}

export default Buying;
