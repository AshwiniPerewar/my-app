import logo from './logo.svg';
import './App.css';
import Company from './components/company';
import Name from './components/name';

function App() {
  let company=[{com:"Mobile Operating System"},
{com:"Mobile Manufactures"}];

  let info=[{name:"Android"},
  {name:"Blackberry"},
  {name:"iPhone"},
  {name:"windows iPhone"}];

  let info2=[{name:"Samsung"},
  {name:"HTC"},
  {name:"Micromax"},
  {name:"Apple"}];
  return (
    <div className="App">
      <Company {...company[0]}/>
  
        {info.map((user)=>
        (
          <div className="list">
          <Name {...user}/>
          </div>
        ))}
        <Company {...company[1]}/>
        {info2.map((user)=>
        (
          <div className="list">
          <Name {...user}/>
          </div>
        ))}
    </div>
  );
}

export default App;
