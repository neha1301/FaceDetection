import { useState } from 'react';
import '../Transaction/transaction.css';

function TransactionPage() {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [balance, setBalance] = useState(0);
  const [transactionHistory, setTransactionHistory] = useState([]);

  const handleAddAmount = () => {
    const newAmount = parseFloat(amount);
    const newBalance = balance + newAmount;
    setBalance(newBalance);
    setTransactionHistory([...transactionHistory, `Added Rs ${newAmount.toFixed(2)} to account`]);
    setAmount('');
    setDescription('');
  };

  const handleWithdrawAmount = () => {
    const newAmount = parseFloat(amount);
    const newBalance = balance - newAmount;
    setBalance(newBalance);
    setTransactionHistory([...transactionHistory, `Withdrew Rs ${newAmount.toFixed(2)} from account`]);
    setAmount('');
    setDescription('');
  };

  const handleShowBalance = () => {
    const historyEntry = `Checked balance: Rs ${balance.toFixed(2)}`;
    setTransactionHistory([...transactionHistory, historyEntry]);
    setBalanceShown(true);
  };

  const handleTransactionHistory = () => {
    alert(transactionHistory.join('\n'));
  };

  const [balanceShown, setBalanceShown] = useState(false);

  return (
    <div className='container'>
      <div className='box1'>
        <label htmlFor="amount-input">Transaction Amount:</label>
        <input type="number" id="amount-input" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div className='box2'>
        <label htmlFor="description-input">Description:</label>
        <input type="text" id="description-input" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className='box3'>
        <button onClick={handleAddAmount}>Add Amount</button>
        <button onClick={handleWithdrawAmount}>Withdraw Amount</button>
        <button onClick={handleShowBalance}>Show Balance</button>
        <button onClick={handleTransactionHistory}>Transaction History</button>
      </div>
      <div className='box'>
        {balanceShown && <label>Balance: Rs {balance.toFixed(2)}</label>}
      </div>
    </div>
  );
}

export default TransactionPage;
