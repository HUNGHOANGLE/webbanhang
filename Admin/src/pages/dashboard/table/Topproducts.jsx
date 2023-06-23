import Badge from '../../../components/badge/Badge';
const data = [
{ category: "Chuck Taylor",name: "Anom", price: 19, status: "Hot" },
{ category: "Golf shoes",name: "Anom", price: 19, status: "Regular" },
{ category: "Hiking boots",name: "Anom", price: 19, status: "TopSeller" },
{ category: "High-tops",name: "Anom", price: 19, status: "Irregular" },
{ category: "Running shoes",name: "Anom", price: 19, status: "Regular" },
{ category: "Soccer shoes",name: "Anom", price: 19, status: "TopPick" },
{ category: "Sneakers",name: "Anom", price: 19, status: "Hot" },
{ category: "Soccer shoes",name: "Anom", price: 19, status: "TopPick" }
]

function Topproducts() {
  return (
    <div className="table-wrapper">
      <table className='table-basic'>
        <thead className='table-basic-thead'>
          <tr>
            <th>S.No</th>
            <th>Product Category</th>
            <th>Product Name</th>
            <th>Sale Value</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className='table-basic-tbody'>
          {data.map((val, key) => {
          return (
            <tr key={key}>
              <td> {key+1}</td>
              <td>{val.category}</td>
              <td>{val.name}</td>
              <td>{val.price}</td>
              <td>
                <Badge type = {[val.status]} content={val.status}/>
              </td>
            </tr>
          )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Topproducts;
