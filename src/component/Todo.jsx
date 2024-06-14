import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { addTodo, deleteTodo, removeTodo } from '../action/index';
import { useSelector, useDispatch } from "react-redux";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.toDoReducer.list);
  const dispatch = useDispatch();

  const shouldShowRemoveAllButton = list.length >= 1;

  return (
    <>
      <div className="flex justify-center h-screen items-center container overflow bg-[url('https://images.pexels.com/photos/4195401/pexels-photo-4195401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]">
        <div className="bg-white md:h-[600px] md:w-96 rounded-xl w-80 h-[500px]">
          <div className="h-12 bg-slate-200 items-center flex justify-center rounded">
            <h2 className="text-black font-semibold text-lg">TODO APP</h2>
          </div>
          <div className='flex justify-around my-5'>
            <input
              type='text'
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              placeholder='Enter Task'
              className="border-solid border-2 border-indigo-600 rounded-md py-1 pl-5 pr-2 md:w-[300px] w-56"
            />
            <button className="bg-blue-300 p-3 rounded-md" onClick={() => dispatch(addTodo(inputData), setInputData(""))}>+</button>
          </div>
          <div className='my-5 px-5'>
            <ol className='text-xl'>
              {list.map((ele) => {
                return (
                  <li key={ele.id} className='flex'>{ele.data}
                    <RxCross2
                      className='mt-1.5 ml-3 hover:text-red-700 cursor-pointer hover:text-[22px]'
                      onClick={() => dispatch(deleteTodo(ele.id))} 
                    />
                  </li>
                );
              })}
            </ol>
            {shouldShowRemoveAllButton && (
              <div className="flex justify-center">
                <button className="bg-black md:p-2 text-white rounded-md hover:bg-blue-800 hover:text-black p-1.5 text-left text-sm mt-4" onClick={()=>dispatch(removeTodo())}>Remove All List</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo;