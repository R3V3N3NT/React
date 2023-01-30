import React,{useState} from 'react'

export default function Header(props) {
    const [text, setText] = useState("ADD SOMETHING");
    const handleAdd=()=>{ 
        setText(text)
      
      
        
    }

    const handleOnChange=(event)=>{
        setText(event.target.value)
    }

    return (
    <div>
      
      <div className="container">
      <h1>{props.title}</h1>
      <section className="appcontainer"/>
    <div className="mb-4 ">
      <input className="form-control mb-2" type="text" value={text} onChange={handleOnChange}  id="input-box"/>
      <button className="btn btn-success add" onClick={handleAdd}>Add Todo</button>
    </div>

    <div className="card bg-dark">
      <ul id="list" className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="list-item bg-transparent">
            <p className="text-dark text-lg-center">Task List</p>
          </div>
        </li>
      </ul>
      <div className="input-group">
  <span className="input-group-text">Added Tasks</span>
  <textarea className="form-control" aria-label="With textarea" value={text}></textarea>
</div>

    </div>
      </div>
    </div>
  )
}
