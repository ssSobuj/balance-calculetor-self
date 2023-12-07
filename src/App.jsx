// import './App.css'
import AddTransaction from "./component/AddTransaction";
import Balance from "./component/Balance";
import IncomeExpens from "./component/IncomeExpens";
import TransactionList from "./component/TransactionList";
import GlobalContext from "./context/GlobalContext";

function App() {
  return (
    <GlobalContext>
      <Balance />
      <IncomeExpens />
      <AddTransaction />
      <TransactionList />
    </GlobalContext>
  );
}

export default App;
