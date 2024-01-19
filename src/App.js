import React from 'react'
import { useSelector } from 'react-redux'
import Footer from './Components/Footer'
import InputForm from './Components/InputForm'
import Category from "./Components/category/Category"
import Header from './Components/Header'

function App () {
  const todosItem = useSelector((state) => state.todos.todosList);

  return (
    <>
    <Header />
    <div className="w-full min-h-screen pt-4 font-bodyFont bg-gradient-to-t from-blue-600 via-blue-400 to-blue-300 text-white px-4 flex flex-col gap-10 justify-center items-center">

<div className="w-full lgl:w-[850px] h-full bg-bodyColor p-4 lgl:p-10 flex flex-col gap-10 rounded-xl">
        <InputForm />
        <Footer />
      </div>
      {
        todosItem.length>0?  <Category />:""
      }
      
    </div>
    </>
    
  )
}

export default App