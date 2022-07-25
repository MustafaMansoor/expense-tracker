import logo from './logo.svg';
import './App.css';
import { Header } from './trackercomponents/Header'
import { Balance } from './trackercomponents/Balance'
import { AccountsTrack } from './trackercomponents/AccountsTrack'
import { TransactionHistory } from './trackercomponents/TransactionHistory'
import { Addtransaction } from './trackercomponents/Addtransaction'
// Main code
function App() {
    return ( <
        div className = "App" >
        <
        Header > < /Header> <
        div className = "container" >
        <
        Balance > < /Balance> <
        AccountsTrack > < /AccountsTrack> <
        TransactionHistory > < /TransactionHistory> <
        Addtransaction > < /Addtransaction> <
        /div> <
        /div>

    );
}

export default App;