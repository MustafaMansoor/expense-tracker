import React, { useContext } from 'react'
import { Transactioncontex, Transactionprovider } from './Transactioncontext'

export const TransactionHistory = () => {
 let transaction = useContext(Transactioncontex);
  return (
    <Transactionprovider>
        <h3>Transaction History</h3>
        
        <ul className="list">
       {transaction.map((transobj) =>(
        <li className="plus">{transobj.disc} 
            <span>{transobj.amount}</span>
            <button className="delete-btn">X</button>
        </li>
       )
      )}
      </ul>
      </Transactionprovider>
  )
}
