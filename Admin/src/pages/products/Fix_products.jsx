import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './add_popup.css';
const Fix_products = props => {
    let fixData = props.fixData;
  // Fake data
  const category_data = ['Chuck Taylor', 'Golf Shoes', 'Hiking Boots', 'High-Tops', 'Running Shoes', 'Soccer Shoes', 'Sneakers', 'Soccer Shoes']
  const status_data = ['Hot', 'Regular', 'TopSeller', 'Irregular', 'TopPick']
  const size_data = ['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5']

  // Get data
  const [productName, setProductName] = useState(fixData.name);
  const [productImg, setProductImg] = useState();
  const [productCategory, setProductCategory] = useState(fixData.category);

  const [productDesc, setProductDesc] = useState();
  const [productNumber, setProductNumber] = useState(fixData.number);
  const [productStatus, setProductStatus] = useState(fixData.status);

  const [productSize, setProductSize] = useState();
  const [productPrice, setProductPrice] = useState(fixData.price);
  // SetData
  const setProductNameData = (e) => {
    setProductName(e.target.value);
  }
  const setProductImgData = (e) => {
    setProductImg(e.target.value);
  }
  const setProductCategoryData = (event, value) => {
    setProductCategory(value);
  }


  const setProductDescData = (e) => {
    setProductDesc(e.target.value);
  }
  const setProductNumberData = (e) => {
    setProductNumber(e.target.value);
  }
  const setProductStatusData = (event, value) => {
    setProductStatus(value);
  }

  const setProductSizeData = (event, value) => {
    setProductSize(value);
  }
  const setProductPriceData = (e) => {
    setProductPrice(e.target.value);
  }
  // Open validate
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [openAddOK, setOpenAddOK] = React.useState(false);
  
  const handleOpenAddOK = () => {
    setOpenAddOK(true);
  };
  const handleCloseAddOK = () => {
    setOpenAddOK(false);
  };
  // handleAdd
  const handleAdd = () => {
    if (productName == "" || productName == null
      || productImg == null || productImg == ""
      || productCategory == null || productCategory == ""
      || productNumber == null || productNumber == ""
      || productStatus == null || productSize == null
      || productPrice == "" || productPrice == null
    ) {
      handleClickOpen()
    } else {
      handleOpenAddOK()
    }
  }
  return (
    <div className="popup-box">
      <div className="box_Add_popup_admin">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
        <div className="row">
          <div className="col-4">
            <input value={productName} onChange={setProductNameData} className='add_popup_input' placeholder='Name of product' />
          </div>
          <div className="col-4">
            <input value={productImg} onChange={setProductImgData} className='add_popup_input' type='file' placeholder='Image of product' />
          </div>
          <div className="col-4">
            <Autocomplete
              value={productCategory}
              onChange={setProductCategoryData}
              options={category_data}
              style={{ margin: 10 }}
              renderInput={(params) =>
                <TextField {...params} label="Category" variant="standard" />}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">

            <input value={productDesc} onChange={setProductDescData} className='add_popup_input' placeholder='Product description' />
          </div>
          <div className="col-4">

            <input value={productNumber} onChange={setProductNumberData} type="number" className='add_popup_input' placeholder='Number of product' />
          </div>
          <div className="col-4">

            <Autocomplete
              value={productStatus}
              onChange={setProductStatusData}
              options={status_data}
              style={{ margin: 10 }}
              renderInput={(params) =>
                <TextField {...params} label="Status" variant="standard" />}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <Autocomplete
              value={productSize}
              onChange={setProductSizeData}
              options={size_data}
              style={{ margin: 10 }}
              renderInput={(params) =>
                <TextField {...params} label="Product size" variant="standard" />}
            />

          </div>
          <div className="col-4">
            <input value={productPrice} onChange={setProductPriceData} type="number" className='add_popup_input' placeholder='Price of product' />
          </div>
          <div className="col-4">
          </div>
        </div>
        <div className="add_popup_footer">
          <button className='btn__fix' onClick={handleAdd} > Fix </button>
          <button className='btn__del' onClick={props.handleClose} > Close </button>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style={{ color: "red" }} id="alert-dialog-title">
          {"Notification"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You are missing some fields
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openAddOK}
        onClose={handleCloseAddOK}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style={{ color: "green" }} id="alert-dialog-title">
          {"Congratulation"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your fixxing successfully
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddOK} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Fix_products;
