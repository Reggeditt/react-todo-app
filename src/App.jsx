import './styles/app.scss'
import TodoHeader from './components/todoHeader.jsx'
import TodoLogic from './components/todoLogic'

function App() {
  return (
    <div className="wrapper">
      <div className="todos">
        <TodoHeader />
        <TodoLogic />
      </div>
    </div>
    
  )
}

export default App
