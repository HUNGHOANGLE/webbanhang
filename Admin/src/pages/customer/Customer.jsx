import React ,{useState}from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import customerList from '../../assets/jsonData/customer-list.json';
import Add_customer from './Add_customers';
import Fix_customer from './Fix_customer';
import './customer.css';

export default function Customer() {
  
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'ID',
        field: 'id',
        width: 150,
        
      },
      {
        label: 'Name',
        field: 'name',
        width: 270,
        attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Name',
          },
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'disabled',
        width: 200,
      },
      {
        label: 'Phone',
        field: 'phone',
        sort: 'disabled',
        width: 100,
      },
      {
        label: 'Total Orders',
        field: 'total_orders',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Total Spend',
        field: 'total_spend',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Location',
        field: 'location',
        sort: 'disabled',
        width: 200,
      },
    ],
    rows:customerList
  });
  const [checkbox1, setCheckbox1] = React.useState('');

  const showLogs2 = (e) => {
    setCheckbox1(e);
  };
  const[Add_customer_page,setAddCustomer_page] = useState(false);
  const[Fix_customer_page,setFixCustomer_page] = useState(false);

  const handleAddPage = () => {
    setAddCustomer_page(!Add_customer_page)
  }
  const handleFixPage = () => {
    setFixCustomer_page(!Fix_customer_page)
  }
  const checkFix = () =>{
    if (checkbox1){
      if (checkbox1.checked == true){
        handleFixPage()
      }else{
        alert("Please choose a field to continute");
      }
    } else{
      alert("Please choose a field to continute");
    }
  }
  const checkDelete = () =>{
    if (checkbox1){
      if (checkbox1.checked == true){
        alert("Delete successfully");
      }else{
        alert("Please choose a field to continute");
      }
    } else{
      alert("Please choose a field to continute");
    }
  }
  return  (
    <div className="row">
        <div className="col-12">
            <div className="card">
                <div className="card__body">
                  <div className='card__body-header-cus'>
                    <h2>Customer</h2>
                    <div className="card__body-header-right">
                      <button className='btn__add' onClick={handleAddPage}> Add </button>
                      <button className='btn__del' onClick={checkDelete}> Delete </button>
                      <button className='btn__fix' onClick={checkFix}> Fix</button>
                    </div>
                  </div>
                  
                  <MDBDataTableV5 
                    className='tableProducts'

                    hover
                    responsive

                    entriesOptions={[5, 10,20, 25]}  
                    entries={5} 
                    pagesAmount={4} 
                    data={datatable}                        
                    
                    //Cho thanh header có text màu trắng
                    theadTextWhite
                    //Cho thanh search lên top
                    searchTop
                    searchBottom={false}
                    //Tạo checkbox
                    // Tìm hiểu thêm tại trang https://mdbootstrap.com/docs/react/tables/datatables/#top-select-serach
                    checkbox
                    headCheckboxID='id2'
                    bodyCheckboxID='checkboxes2'
                    getValueCheckBox={(e) => {
                      showLogs2(e);
                    }}
                  />
                </div>
            </div>
        </div>
        {
          Add_customer_page && <Add_customer handleClose={handleAddPage}/>
        }
        {
          Fix_customer_page && <Fix_customer fixData={checkbox1} handleClose={handleFixPage}/>
        }
    </div> 
  )
}