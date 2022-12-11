
import './App.css';
import Todo from './components/Todo'
import Title from './components/Title'
import Modal from './components/Modal'
import React, {useState, useEffect} from 'react'
import Counter from './components/Counter'

function App() {

  const [showModal, setShowModal] = useState(false)

    function onTodoDelete(){
      setShowModal(true)
      console.log('onTodoDelete()')
    }
    function cancelModal(){
      setShowModal(false)
    }
    function confirmModal(){
      setShowModal(false)

    }

    useEffect(() => {console.log('on mount')}, [])


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
      <Todo onTodoDelete={onTodoDelete} title="Finished frontend Simplfied"/>
      <Todo onTodoDelete={onTodoDelete} title="Finished interview Section"/>
      <Todo onTodoDelete={onTodoDelete} title="Land 100k job"/>
      </div>

      {showModal && <Modal asd123={cancelModal} confirmModal={confirmModal} title="Do you want to?"/>}
      
    </div>
  );
}

export default App;

