import React from 'react'

function Alert(props) {
    const capatailze = (word) => {
        if(word === "danger"){
          word = "error";
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{height:'40px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show container`} role="alert">
          <strong><center>{capatailze(props.alert.type)} : {props.alert.msg}</center></strong> 
          {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>}
    </div>
  )
}

export default Alert
