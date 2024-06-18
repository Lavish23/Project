"use client";
import React, { useState } from 'react';

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
    console.log(mainTask);
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h2 className="text-center">No task available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-10">
          <div className="flex flex-col sm:flex-row justify-between mb-5 sm:w-2/3 w-full">
            <h5 className="text-xl sm:text-2xl font-semibold">{t.title}</h5>
            <h5 className="text-lg sm:text-xl font-semibold">{t.desc}</h5>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="px-4 py-2 bg-red-500 border-none rounded-md text-white mt-2 sm:mt-0"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-4xl p-4 sm:p-8 bg-blue-300 rounded-lg shadow-lg">
        <h1 className="bg-zinc-800 text-white text-3xl sm:text-5xl p-4 sm:p-5 text-center font-bold">My Todo List</h1>
        <form onSubmit={submitHandler} className="my-4 sm:my-8">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter title here"
            className="px-4 py-2 sm:px-6 sm:py-3 border-2 outline-none border-zinc-800 rounded-md m-2 w-full sm:w-1/3"
          />
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            placeholder="Enter Description here"
            className="px-4 py-2 sm:px-6 sm:py-3 border-2 outline-none border-zinc-800 rounded-md m-2 w-full sm:w-1/3"
          />
          <button className="w-full sm:w-auto ml-2 sm:ml-8 px-4 py-2 sm:px-6 sm:py-4 bg-black text-white border-none rounded-md">
            Add Task
          </button>
        </form>
        <hr />
        <div className="bg-slate-200 p-4 sm:p-8 rounded-md mt-4 sm:mt-8">
          <ul>{renderTask}</ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
