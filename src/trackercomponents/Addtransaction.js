export const Addtransaction = () => {
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
    />
</div>
<div className="form-control">
    
<label htmlFor='Transactionamount'> 
         Transaction Amount
    </label>    
    <input type="number" 
    id="Transactionamount" 
    placeholder="Enter the transaction amount"
    />
</div>
<button className="btn">Add Transaction</button>
</form>
    </div>
)}
