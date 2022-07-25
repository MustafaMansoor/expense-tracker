import React, { useState } from 'react'

export const Addtransaction = () => {
let [getdec,setdic]=useState();
let [gettrans,settrans]=useState();
    return (
    <div>
<h3>Add Transaction</h3>
<form>
<div className="form-control">
    <label htmlFor='Description'>
        Description
    </label>
    
    <input type="text" 
    id="Description" 
    placeholder="Details of transaction"
    value={getdec}
    onChange={(obj)=>{setdic(obj.target.value)}}
    />
</div>
<div className="form-control">
    
<label htmlFor='Transactionamount'> 
         Transaction Amount
    </label>
    
    <input type="number" 
    id="Transactionamount" 
    placeholder="Enter the transaction amount"
    value={gettrans}
    onChange={(obj)=>{settrans(obj.target.value)}}
    />
</div>
<button className="btn">Add Transaction</button>
</form>

    </div>
  )
}
