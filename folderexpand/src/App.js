//import logo from './logo.svg';
//import './App.css';
import Folder from './components/Folder';
import explorer from './data/FolderData';

function App() {
  return (
    <div className="App">
      <Folder explorer={explorer} />
    </div>
  );
}

export default App;
