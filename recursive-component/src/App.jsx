import { useState } from 'react'
import { FaFolder } from "react-icons/fa";
import { FaFile } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";


function App() {
  let folders = [
    {
      name: "Movies",
      folders: [
        {
          name: "2010",
          folders: [
            { name: "Inception", folders: [{ name: "inception.mp4" }] },
            { name: "Toy Story 3", folders: [{ name: "toy_story_3.mp4" }] }
          ]
        },
        {
          name: "Action",
          folders: [
            {
              name: "Anyone but you",
              folders: [{ name: "anyone but you.mp4" }]
            },
            {
              name: "Marvel",
              folders: [
                { name: "Iron Man", folders: [{ name: "iron_man.mp4" }] },
                { name: "The Avengers", folders: [{ name: "the_avengers.mp4" }] }
              ]
            }
          ]
        },
        {
          name: "Romantic",
          folders: [
            {
              name: "The Notebook",
              folders: [{ name: "the_notebook.mp4" }]
            },
            {
              name: "Pride and Prejudice",
              folders: [{ name: "pride_and_prejudice.mp4" }]
            }
          ]
        }
      ]
    },
    {
      name: "Music",
      folders: [
        {
          name: "Pop",
          folders: [
            { name: "Taylor Swift", folders: [{ name: "lover.mp4" }] },
            { name: "Ed Sheeran", folders: [{ name: "shape_of_you.mp4" }] }
          ]
        },
        {
          name: "Rock",
          folders: [
            { name: "Queen", folders: [{ name: "bohemian_rhapsody.mp4" }] },
            { name: "Nirvana", folders: [{ name: "smells_like_teen_spirit.mp4" }] }
          ]
        }
      ]
    },
    {
      name: "Documents",
      folders: [
        {
          name: "Work",
          folders: [
            { name: "Project A", folders: [{ name: "project_a_report.docx" }] },
            { name: "Project B", folders: [{ name: "project_b_presentation.pptx" }] }
          ]
        },
        {
          name: "Personal",
          folders: [
            { name: "Resume", folders: [{ name: "resume.pdf" }] },
            { name: "Cover Letter", folders: [{ name: "cover_letter.pdf" }] }
          ]
        }
      ]
    }
  ];
  

  return (
    <div className='p-6'>
     <ul>
          {folders.map(folder => (
            <Folder key={folder.name} folder={folder} />
          ))}
        </ul>
    </div>
  )
}

export default App

function Folder({folder}){
  const [isOpen, setIsOpen] = useState(false)
  function handleClick(){
    setIsOpen(!isOpen)
  }
 
  return (
    <li >
      <span className='flex gap-3'>
        {folder.folders && (
          <Arrow isOpen={isOpen} handleOpen={handleClick} />
        )}
        {folder.folders ? (
          <FaFolder className='my-auto text-gray-900' />
        ):(
          <FaFile className='my-auto ml-2 text-gray-700' />
        )}
        {folder.name}
      </span>
      {isOpen && folder.folders.length > 0 && (
        <ul className='pl-6'>
          {folder.folders?.map(folder =>(
            <Folder key={folder.name} folder={folder} />
          ))}
      </ul>
      )}
    </li>
  )
}

function Arrow({isOpen, handleOpen}){
  return (
  <>
  {
    !isOpen ? (
      <button onClick={handleOpen} >
        <FaArrowRight className='my-auto' />
      </button>
    ) : (
      <button onClick={handleOpen}>
        <FaArrowDown className='my-auto' />
      </button>
    )
  }
  </>)
}

