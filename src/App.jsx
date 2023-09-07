
import './App.css'
import Counter from './Counter';
import Team from './Team';
import User from './User';
import Friends from './Friends';

function App() {
  function handleClick(){
    alert('Hello World!')
  }
  
  const handleClick2 = () =>{
    alert('Hello World 2!');
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      
      <h3>React core concept 2</h3>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => {alert('Third clicked')}}>Third</button>
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
