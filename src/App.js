import './App.css';
import react,{useState} from "react"
import {useSelector,useDispatch} from "react-redux"
import {addTodo,deleteTodo,completeTodo,updateTodo} from "./actions/todoAction"
import {Modal,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const todos=useSelector(state=>state.todoReducer)
  const [task, setTask] = useState("")
  const [editTask, setEditTask] = useState("")
  const [filter, setFilter] = useState("All")
  const dispatch=useDispatch()
  return (
    <div className="App" >
  <div >
        <input style={{ height:'48px',width:'250px',margin:'10px',border:'none',borderRadius:'10px'}} type="text" placeholder='Add task ...' onChange={(e)=>setTask(e.target.value)} />
        <Button  onClick={()=>dispatch(addTodo(task))} variant="primary" >Add task</Button>
        <div style={{display:"flex",justifyContent:"left",marginRight:'20px', }}>
          <h1 style={{fontSize:'20px',marginLeft:"50px"}} >Filter: </h1>
        <button style={{marginLeft:'5px' }} onClick={()=>setFilter("All")} >All</button>
        <button style={{marginLeft:'5px' }} onClick={()=>setFilter("Done")} >Done</button>
        <button style={{marginLeft:'5px' }} onClick={()=>setFilter("Undone")}  >Undone</button>
        </div>
        
    </div>  

<div style={{}} >
        {filter ==="All" ? todos.map(el=><div style={{display:'flex',justifyContent:"end",marginTop:'5px',marginRight:'580px',marginLeft:'550px',padding:'5px' }}>
          <h2 style={{fontSize:'20px',margin:'10px',backgroundColor:'white',borderRadius:'20px',padding:'5px',borderRadius:'10px'}} >{el.title} </h2>
          
          <Button style={{margin:'5px' ,padding:'5px'}} variant="primary" onClick={handleShow}>
        Update
      </Button>
      <Modal show={show} onHide={handleClose}>
    
        <Modal.Body><input style={{height:'48px',width:'250px',margin:'10px',border:'none',borderRadius:'10px'}} type="text" placeholder='Edit task ...' onChange={(e)=>setEditTask(e.target.value)} /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  onClick={()=>{dispatch(updateTodo(editTask,el.id)) ;handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Button style={{margin:'5px' }} onClick={()=>dispatch(deleteTodo(el.id))} variant="danger" >Delete</Button>
          <Button style={{margin:'5px' }} onClick={()=>dispatch(completeTodo(el.id))} variant="success" >{el.complete ? "Done" : "Undone"}</Button>
        </div> ):filter ==="Done" ? todos.filter(el=>el.complete===true) 
        .map(el=><div>
          <h2 style={{border:'5px' }}>{el.title} </h2>
          <button onClick={()=>dispatch(deleteTodo(el.id))} >Delete</button>
          <Button onClick={()=>dispatch(completeTodo(el.id))} variant="sucess"  >{el.complete ? "Done" : "Undone"}</Button>
        </div> ) : todos.filter(el=>el.complete===false) 
        .map(el=><div>
          <h2>{el.title} </h2>
          <button onClick={()=>dispatch(deleteTodo(el.id))} >Delete</button>
          <button onClick={()=>dispatch(completeTodo(el.id))} >{el.complete ? "Done" : "Undone"}</button>
        </div> )
        
      }
      </div>


    </div>
  );
}

export default App;
