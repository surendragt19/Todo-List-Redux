import React from 'react'
import Todo from './component/Todo'
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
    <Todo/>
    <Toaster/>
    </>
  )
}

export default App