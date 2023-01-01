import TaskManagerPage from './pages/TaskManagerPage';
import Header from './components/Header';
import AddTask from './components/AddTask';

function App() {
  return (
    <TaskManagerPage>
      <Header/>
      <AddTask/>
    </TaskManagerPage>
  )
}

export default App;
