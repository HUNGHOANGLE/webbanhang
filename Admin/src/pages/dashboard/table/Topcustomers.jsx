import '../../../components/table/table.css'
const data = [
{ name: "Cara Delevingne", orders: 192, spending: 69504 },
{ name: "Ivanka Trump", orders: 192, spending: 69504 },
{ name: "Kate Upton", orders: 192, spending: 69504 },
{ name: "Dakota Johnson", orders: 192, spending: 69504 },
{ name: "Bella Hadid", orders: 192, spending: 69504 },
]

function Topcustomers() {
  return (
    <div className="table-wrapper">
      <table className='table-basic'>
        <thead className='table-basic-thead'>
          <tr>
            <th>User</th>
            <th >Total Orders</th>
            <th>Total Spending ($)</th>
          </tr>
        </thead>
        <tbody className='table-basic-tbody'>
          {data.map((val, key) => {
          return (
            <tr key={key}>              
              <td>{val.name}</td>
              <td>{val.orders}</td>
              <td>{val.spending}</td>
            </tr>
          )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Topcustomers;
