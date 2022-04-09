import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

function App() {
  const [adviceSlip, setAdviceSlip] = useState({});

  const fetchData = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then(res => setAdviceSlip(res.data.slip))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="layout">
      <Card {...adviceSlip} handleClick={fetchData} />
    </main>
  );
}

export default App;
