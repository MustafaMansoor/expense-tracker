import { createContext } from "react";
let transaction =
[
{amount:100,disc:"cash"},
{amount:-500,disc:"book"},
{amount:-100,disc:"mobile"}
 ]
 export const Transactioncontex=createContext(transaction);