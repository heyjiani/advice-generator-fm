import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

function App() {
  const [adviceSlip, setAdviceSlip] = useState({});

  useEffect(() => {
    axios
    .get('https://api.adviceslip.com/advice')
    .then(res => setAdviceSlip(res.data.slip))
    .catch(err => console.log(err))
  }, []);

  return (
    <div className="App">
      <Card {...adviceSlip}/>
    </div>
  );
}

export default App;
