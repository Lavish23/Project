"use client"
import React, { useState } from 'react'

const page = () => {

  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler=(e)=>
    {
      e.preventDefault();
      setmainTask([...mainTask,{title,desc}]);
      settitle("");
      setdesc("");
      console.log(mainTask)
    }

  const deleteHandler=(i)=>
    {
      let copyTask=[...mainTask];
      copyTask.splice(i,1);
      setmainTask(copyTask);
    }

  let renderTask=<h2>No task Available</h2>

  if(mainTask.length>0)
    {
      renderTask=mainTask.map((t,i)=>
      {
        return (
          <li key={i} className='flex items-center justify-between mb-10'>
          <div className='flex justify-between mb-5 w-2/3'> 
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h5 className='text-xl font-semibold'>{t.desc}</h5>
          </div>
          <button onClick={()=>
            {
              deleteHandler(i);
            }
          } className='px-4 py-2 bg-red-500 border-none rounded-md text-white'>Delete</button>
          </li>
        )
      })

    }
  return (
    <div>
      <h1 className='bg-zinc-800 text-white text-5xl p-5 text-center font-bold'>My Todo List </h1>
      <form onSubmit={submitHandler}>
        <input value={title} onChange={(elem)=>
          {
            settitle(elem.target.value);
          }
        }  type="text" placeholder="Enter title here" className='px-6 py-3 border-2 outline-none border-zinc-800 rounded-md m-8 w-1/4' ></input>
        <input value={desc} onChange={(elem)=>
          {
            setdesc(elem.target.value)
          }
        } type="text" placeholder="Enter Descripytion here" className='px-6 py-3 border-2 outline-none border-zinc-800 rounded-md m-8 w-1/4 '></input>
        <button className='ml-8 px-6 py-4 bg-black text-white border-none rounded-md'>Add Taks</button>
      </form>
      <hr/>

      <div className='bg-slate-200 p-8'>
        <ul>{renderTask}</ul>
      </div>
    </div>
  )
}

export default page