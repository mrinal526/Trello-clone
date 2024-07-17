import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { BoardContext } from './context/BoardContext';

function App() {
  const boardData = {
    active: 0,
    boards: [
      {
        name: 'Trello Board',
        bgcolor: '#069',
        list: [
          { id: "1", title: "Backlog", items: [{ id: "cdrFt", title: "Project Description 1" }] },
          { id: "2", title: "In Progress", items: [{ id: "cdrFv", title: "Project Description 2" }] },
          { id: "3", title: "Done", items: [{ id: "cdrFb", title: "Project Description 3" }] }
        ]
      }
    ]
  }

  const [allboard, setAllBoard] = useState(boardData);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Header />
      <BoardContext.Provider value={{ allboard, setAllBoard, selectedProject, setSelectedProject }}>
        <div className='content flex'>
          <Sidebar />
          <Main />
        </div>
      </BoardContext.Provider>
    </>
  )
}

export default App;
