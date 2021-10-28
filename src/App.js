import './App.css';
import Photo from './Profile/ProfilePhoto';
import Name from './Profile/FullName';
import Address from './Profile/Address'
function App() {
  return (
    <div className="App">
     <Photo className='pho'> </Photo>
     <div className='text'>
      <Name/>
      <Address/>
      </div>
    </div>
  );
}

export default App;
