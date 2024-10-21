import logo from './logo.svg';
import './App.css';
import Gallery from './componants/gallery/Gallery';
import Navbar from './componants/navbar/Navbar';
import {useState} from 'react';

function App() {



  const [isChecked, setIsChecked] = useState(false); // حالة الشيك بوكس


  return (
    <div className="App ">
      <Navbar isChecked={isChecked} setIsChecked={setIsChecked}  />
      <Gallery isChecked={isChecked} setIsChecked={setIsChecked} />
    </div>
  );
}

export default App;
