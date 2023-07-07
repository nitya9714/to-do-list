import React, { useState, useEffect } from 'react'
import "./App.css"
import TodoInput from './components/TodoInput'
import Todolist from './components/TodoList';
function App() {
  const getLocalList = () => {
    let list = localStorage.getItem('lists');

    if (list) {
      return JSON.parse(localStorage.getItem('lists'));
    }
  }
  const [listTodo, setListTodo] = useState(getLocalList());
  let addList = (inputText) => {
    if (inputText !== '')
      setListTodo([...listTodo, inputText]);
  }
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1)
    setListTodo([...newListTodo])
  }
  const deleteAllItems = () => {
    let newListTodo = [...listTodo];
    newListTodo = []
    setListTodo([...newListTodo])
  }
  // const deleteCheckedItems = () => {
  //   let newListTodo = [...listTodo];
  //   // {
  //   //   listTodo.map((listItem, i) => {

  //   //   })
  //   // }
  //   setListTodo([...newListTodo])
  // }
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(listTodo))
  }, [listTodo])

  return (
    <div className="main-container">
      <div className="full-container">
        <div className="center-container">
          <h1 className="app-heading">TO-DO-LIST</h1>
          <TodoInput addList={addList} />
          <div className="content">
            {listTodo.map((listItem, i) => {
              return (
                <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem} />
              )
            })}
          </div>
        </div>
        <div className="buttons">
          <button className='clear-all' onClick={() => {
            deleteAllItems()
          }}> Clear All tems</button>
          {/* <button className='clear-checked' onClick={() => {
            deleteCheckedItems()
          }}> Clear Completed Items</button> */}
        </div>
      </div>
    </div>
  )
}

export default App