import { useState } from 'react'
import { FaFolder } from "react-icons/fa";
import { FaFile } from "react-icons/fa"

function App() {
 let folders = [
  {name: "Movies", folders: [
    {name: 'Action', folders: [{name: "Fast Again"}, {name: "2010"}]},
    {name: "Comedy"}
  ]},
  {name: "Music", folders: [{name: "rock"}, {name: "country song"}]},
  {name: "Pictures"},
  {name: "Documents"}
 ]

  return (
    <div className='p-6'>
     <ul>
      <li>
        <span className='flex gap-3'>
          <FaFolder className='my-auto' />
          Home
        </span>
        {folders.map(folder => (
          <Folder key={folder.name} folder={folder} />
        ))}
      </li>
     </ul>
    </div>
  )
}

export default App

function Folder({folder}){
  return (
    <li key={folder.name}>
      <span className='flex gap-3'>
        <FaFolder className='my-auto' />
        {folder.name}
      </span>
      <ul className='pl-6'>
        {folder.folders?.map(folder =>(
          <Folder key={folder.name} folder={folder} />
        ))}
      </ul>
    </li>
  )
}