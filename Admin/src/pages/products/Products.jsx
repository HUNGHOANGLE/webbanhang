import React,{useState,useEffect} from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import productsList from '../../assets/jsonData/products-list.json';
import Add_products from './Add_products';
import Fix_products from './Fix_products';
import './products.css';
// import Badge from '../../components/badge/Badge';
export default function Products() {
  //const [proDuctData,setproDuctData]= useState([]);
  const[AddProducts_page,setAddProducts_page] = useState(false);
  const[FixProducts_page,setFixProducts_page] = useState(false);

  // hanldeAdd
  const handleAddPage = () => {
    setAddProducts_page(!AddProducts_page)
  }

  //handle Fix
  const [checkbox1, setCheckbox1] = useState('');

  const showLogs2 = (e) => {
    setCheckbox1(e);
  };
  const handleFixPage = () => {
    setFixProducts_page(!FixProducts_page)
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
  // useEffect(()=>{
  //   let productData =[];
  //   productsList.map((item,index)=>{
  //     item.status = (
  //       <Badge content={item.status} />
  //     )
  //     productData.push(item);
  //   });
  //   setproDuctData(productData);
  //   console.log('product data:', productData)
  // }, [proDuctData])
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'ID',
        field: 'products_id',
        width: 150,
      },
      {
        label: 'Category',
        field: 'category',
        width: 150,
      },
      {
        label: 'Name',
        field: 'name',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Price',
        field: 'price',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'Number',
        field: 'number',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'Status',
        field: 'status',
        sort: 'disabled',
        width: 100,
      },
    ],
    rows: productsList
  });
  return  (
    <div className="row">
        <div className="col-12">
            <div className="card">
              <div className="card__body">
                <div className='card__body-header-cus'>
                    <h2>Products</h2>
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
          AddProducts_page && <Add_products handleClose={handleAddPage}/>
        }
        {
          FixProducts_page && <Fix_products fixData={checkbox1} handleClose={handleFixPage}/>
        }
    </div> 
  )
}