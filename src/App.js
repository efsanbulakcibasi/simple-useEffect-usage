import './App.css';
import { useEffect, useState } from 'react';

function App() {


  const [nazlı, setNazlı] = useState(0)
  const [ece, setEce] = useState(0)

  useEffect(()=> {
    console.log("bu şekilde kullanılırsa her seferinde çalışır.Yani sayfa her rander olduğunda çalışır.")
  })

  useEffect(()=>{
    console.log("Bu şekilde kullanımında sadece sayda ilk render olduğunda çalışır.")
  },[])
  useEffect(() =>{
    console.log("Bu şekilde kullanımında ise ilk kez render edildiğinde ve köşeli içine yazılan değer-değerlerde bir değişiklik olduğunda çalışır.")
  },[nazlı,ece])

  //çalıştırıp konsoldan bakmak yardımcı olur.
  return (
    <div className="App">
      <div className='place'>
        <button onClick={() => setNazlı(nazlı + 1)}>Nazlı ++</button>
        <div className='text'>Nazlı:{nazlı}</div>
      </div>
      <div className='place'>
        <button onClick={() => setEce(ece + 1)}>Ece ++</button>
        <div className='text'>Ece:{ece}</div>
      </div>
    </div>
  );
}

export default App;
