import './App.css';
import React from 'react'
import Data from './db/data.json'
let categorias ={all:"Todos",cats:"Gatos",dogs:"Perros"}
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      choice:categorias.all,
      todos:[]
    }
    
    // this.cambiar=this.cambiar.bind(this)
  }
  cambiar=(i)=>{
     
    this.setState({
      choice:i.target.value
    })
    
  }
  componentDidMount(){
    this.setState({
      todos:Data
    })
 
  }
  render(){
    // let gatos = Data[0].cats;
    // let perros = Data[1].dogs;
    
  return (
    <div className="row">
      <div className='col-8'>
      {this.state.choice}
      {this.state.choice === "Todos"
      ?
        this.state.todos.map((i,index)=><li key={index}>{i.name}</li>)
      : Data.filter((element)=>element.type === this.state.choice)
      .map((element,index)=>(
        <li key={index+2}>{element.name}</li>
      ))
      }
      </div>
      <div className='col-4'>
      <button onClick={this.cambiar} value="dogs">{categorias.dogs}</button>
      <button onClick={this.cambiar} value="cats">{categorias.cats}</button>
      </div>
     
    </div>
  );
}
}

export default App;
