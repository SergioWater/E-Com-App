
import './App.css';
import Todo from './components/Todo'
import Title from './components/Title'
import Modal from './components/Modal'
import React, {useState} from 'react'
import Counter from './components/Counter'

function App() {


  return <Counter/>
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      
      <Title/>
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }}/>
        <button onClick={() => setShowModal(true)}> Add todo </button>
      </div>

      <div className='todo__wrapper'>
      <Todo title="Finished frontend Simplfied"/>
      <Todo title="Finished interview Section"/>
      <Todo title="Land 100k job"/>
      </div>

      {showModal && <Modal title="Do you want to?"/>}
      
    </div>
  );
}

export default App;

