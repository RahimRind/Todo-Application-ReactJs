import logo from './logo.svg';
import { useState } from 'react';
import './App.css';


function App() {
const [List, setlist] = useState([])
const [inputvalue, setinputvalue] = useState()
const [editType, seteditType] = useState(false)
const [currentIndex, setcurrentIndex] = useState ()

function addtext(){
const copylist = [...List]
copylist.push(inputvalue)
setlist(copylist)

setinputvalue('')
}

function deleteText(index){
  const copylist =[...List]
  copylist.splice(index,1)
  setlist(copylist)


}
 
function editText(index){
  const itemsValue = List[index]
  setinputvalue(itemsValue);
  
  seteditType(true)

  setcurrentIndex(index)
}


function textUpdata() {
const copylist = [...List]
copylist[currentIndex] = inputvalue
setlist(copylist)

seteditType(false)
setinputvalue('')
  
}

function updata(e){
const value =e.target.value
setinputvalue(value)

}




  return (
    <div className="App">
      <header className="App-header">
         <h1>Todo App</h1>
         <input onChange={updata} placeholder='Enter Any text'
         value={inputvalue} />
         {editType ? <button onClick={textUpdata}>Updata</button>
:
<button onClick={addtext}>Add</button>
}

         <ol>
          {List.map(function(item, index ){
            return <li>
              {item}
              <button onClick={()=> deleteText(index)}>Delete</button>
              <button onClick={()=> editText(index)}>Edit</button>
              </li>
          })}
         </ol>
      </header>
    </div>
  );
}

export default App;
