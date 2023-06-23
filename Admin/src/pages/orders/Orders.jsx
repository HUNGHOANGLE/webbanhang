import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import ordersList from '../../assets/jsonData/orders-list.json';
import Badge from '../../components/badge/Badge';

export default function Orders() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'ID',
        field: 'order_id',
        width: 150,
        
      },
      {
        label: 'Ngày tạo',
        field: 'date_create',
        sort: 'disabled',
        width: 150,
        
      },
      {
        label: 'Người bán',
        field: 'seller',
        width: 270,
        attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Name',
          },
      },
      {
        label: 'Người mua',
        field: 'buyer',
        width: 200,
      },
      {
        label: 'Tổng cộng',
        field: 'price',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Trạng thái',
        field: 'status',
        sort: 'disabled',
        width: 100,
      },
    ],
    rows:ordersList
  });
//   <Badge type = {[val.status]} content={val.status}/> Dòng này để thêm màu cho status mà chưa được
  const [checkbox1, setCheckbox1] = React.useState('');

  const showLogs2 = (e) => {
    setCheckbox1(e);
  };
  return  (
    
    <div className="row">
        <div className="col-12">
            <div className="card">
                <div className="card__body">
                <div className='card__body-header-cus'>
                    <h2>Orders page</h2>
                    <div className="card__body-header-right">
                      <button className='btn__add'> Add </button>
                      <button className='btn__del'> Delete </button>
                      <button className='btn__fix'> Fix</button>
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
    </div> 
  )
}