import React,{useState} from 'react'
import {TextField,Button,Select,menuItem} from "@material-ui/core"

export default function Form(props) {
    const [value,setValue]=useState({
        vendorName: "",
        vendorEmail:"",
        vendorMobile:"",
        vendorAddress:"",
        vendorSpeciality:"",
        vendorStatus:""


    })
    const onChange=(e)=>{
      
      setValue({...value,[e.target.name]:e.target.value})
      console.log(value)
    }
    const onSubmit=(e)=>{
     
        alert(e.value)
    }
    return (
        <card className="container">

            <form onSubmit={e=>onSubmit(e)
            
            }>
        


                <div className="input-group mb-3">
                   
                    <TextField label="Vendor Name" placeholder=" enter vendor name" variant="outlined" value={value.vendorName} name= "vendorName" onChange={e=>onChange(e)}/>
                </div>
                <div className="input-group mb-3">
                   
                    <TextField label="Vendor Address" placeholder=" enter vendor Address" variant="outlined"  value={value.vendorAddress} name= "vendorAddress" onChange={e=>onChange(e)}/>
                </div>
                <div className="input-group mb-3">
                    
                    <TextField label="Vendor Email" placeholder=" enter vendor Email" variant="outlined"  value={value.vendorEmail} name= "vendorEmail" onChange={e=>onChange(e)}/>
                </div>
                <div className="input-group mb-3">
                    <TextField label="Vendor Mobile" placeholder=" enter vendor Mobile" variant="outlined"  value={value.vendorMobile} name= "vendorMobile" onChange={e=>onChange(e)}/>
                </div>
                <div className="input-group mb-3">
                    <TextField label="Vendor Speciality" placeholder=" enter vendor Speciality" variant="outlined" value={value.vendorSpeciality} name= "vendorSpeciality" onChange={e=>onChange(e)}/>
                    <Select>
                    <menuItem value={1}>Available</menuItem>
                    <menuItem value={2}>Not Available</menuItem>

                    </Select>
                </div>
                <div className="input-group mb-3">
                    <TextField label="Status" placeholder=" enter vendor Status" variant="outlined"  value={value.vendorStatus} name= "vendorStatus" onChange={e=>onChange(e)}/>
                </div>
                <div className="input-group mb-3">
                    <Button color="secondary" variant="contained" >
                        Submit
                    </Button>
                </div>



            </form>
        </card>             

    )
}
