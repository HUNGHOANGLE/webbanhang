import React ,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import '../products/add_popup.css';
const Fix_customer = props => {
    let fixData = props.fixData;
  // Fake data
    const location_data = ['Quảng Trị', 'Quảng Nam', 'Tp HCM', 'Hà Nội', 'Đà Nẵng','VietNam']

  // Get data
  const [customerName, setCustomerName] = useState(fixData.name);
  const [customerEmail, setCustomerEmail] = useState(fixData.email);
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState(fixData.phone);

  const [customerTotalOrder, setCustomerTotalOrder] = useState(fixData.total_orders);
  const [customerTotalSpend, setCustomerTotalSpend] = useState(fixData.total_spend);
  const [customerLocation, setCustomerLocation] = useState(fixData.location);

  // SetData
  const setCustomerNameData = (e) => {
    setCustomerName(e.target.value);
  }
  const setCustomerEmailData = (e) => {
    setCustomerEmail(e.target.value);
  }
  const setCustomerPhoneNumberData = (e) => {
    setCustomerPhoneNumber(e.target.value);
  }
  const setCustomerTotalOrderData = (e) => {
    setCustomerTotalOrder(e.target.value);
  }
  const setCustomerTotalSpendData = (e) => {
    setCustomerTotalSpend(e.target.value);
  }
  const setCustomerLocationData = (event, value) => {
    setCustomerLocation(value);
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
    if (customerName == "" || customerName == null
      || customerEmail == null || customerEmail == ""
      || customerLocation == null || customerLocation == ""
      || customerPhoneNumber == null || customerPhoneNumber == ""
      || customerTotalOrder == null || customerTotalOrder == null
      || customerTotalSpend == "" || customerTotalSpend == null
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
                
                <input value={customerName} onChange={setCustomerNameData} className='add_popup_input' placeholder='Name of customer'/>
            </div>
            <div className="col-4">
                
                <input value={customerEmail} onChange={setCustomerEmailData} type="email" className='add_popup_input' placeholder='Email of customer'/>
            </div>
            <div className="col-4">

                <input value={customerPhoneNumber} onChange={setCustomerPhoneNumberData} className='add_popup_input' placeholder='Customer phone number'/>
            </div>
        </div>
        <div className="row">
            <div className="col-4">
                
                <input value={customerTotalOrder} onChange={setCustomerTotalOrderData} type="number" className='add_popup_input' placeholder='Total orders'/>
            </div>            
            <div className="col-4">
                
                <input value={customerTotalSpend} onChange={setCustomerTotalSpendData} type="number" className='add_popup_input' placeholder='Total spend'/>
            </div>
            <div className="col-4">
                
                <Autocomplete
                  value={customerLocation}
                  onChange={setCustomerLocationData}
                  options={location_data}
                  style={{ margin: 10}}
                  renderInput={(params) =>
                    <TextField {...params} label="Location" variant="standard"  />}
                />
            </div>
        </div>
        <div className="add_popup_footer">
            <button  className='btn__fix' onClick={handleAdd} > Fix </button>
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

export default Fix_customer;
