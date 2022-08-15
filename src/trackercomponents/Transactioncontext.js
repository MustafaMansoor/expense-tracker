 import React,{ createContext,useReducer } from "react";
import TransactionReducer from './transactionreducer'
let transaction =
[
{amount:100,disc:"cash"},
{amount:-500,disc:"book"},
{amount:-100,disc:"mobile"}
 ]
 export const Transactioncontex=createContext(transaction)


export const Transactionprovider = ({children})=>{
    const [state, dispatch] = useReducer(TransactionReducer,transaction)
    function Addtransaction(transobj){
    dispatch({
        type: 'ADD',
        payload:
        {
            amount:transobj.amount,
            disc:transobj.disc
        }
        })
    }
    return (
    <Transactioncontex.Provider value={
        {
        transaction:state,
        Addtransaction:Addtransaction
        }
    }>
    {children}
    </Transactioncontex.Provider>
    );
}