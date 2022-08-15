import './App.css';
import { Header } from './trackercomponents/Header'
import { Balance } from'./trackercomponents/Balance'
import { AccountsTrack } from './trackercomponents/AccountsTrack'
import { TransactionHistory } from './trackercomponents/TransactionHistory'
import { Addtransaction } from './trackercomponents/Addtransaction'
import { Transactionprovider }from './trackercomponents/Transactioncontext'
 // Main code
function App() {
    return ( 
    <Transactionprovider>
        {/* // <div> */}
         <Header></Header>
         <div className="container"> 
         <Balance /> 
         <AccountsTrack />
         <TransactionHistory />
         <Addtransaction /> 
         </div> 
        {/* //   </div> */}
        </Transactionprovider>
    );
}
export default App;