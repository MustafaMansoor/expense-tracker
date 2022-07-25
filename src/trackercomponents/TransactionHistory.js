import React, { useContext } from 'react'
import { Transactioncontex } from './Transactioncontext'
export const TransactionHistory = () => {
 let transaction = useContext(Transactioncontex);
  return (
    <div>
        <h3>Transaction History</h3>
        <ul className="list">
       {transaction.map((transobj,index) =>(
        <li className="plus" key={index}>{transobj.disc} 
            <span>{transobj.amount}</span>
            <button className="delete-btn">X</button>
        </li>
       )
        )}
        </ul>
    
    
    
    
    </div>
  )
}
