import {Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'


class App extends Component {
  state = {
    productos: [
      {name : 'Tomate', price: 1500, img: '/productos/tomate.jpg'},
      {name : 'Arbejas', price: 2500, img: '/productos/arbejas.jpg'},
      {name : 'Lechuga', price: 500, img: '/productos/lechuga.jpg'},
    ],

    carro: [],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) => {
    // Traemos al carro 
    const { carro } = this.state
    // vemos si el producto ya se encuentra en el carro
    if(carro.find(x => x.name === producto.name)){
      //Si ya esta, vamos a buscar el elemento y vamos a cambiar la cantidad
      const newCarro = carro.map(x => x.name === producto.name
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        :x)
      return this.setState({ carro: newCarro})
    }
    //Si el producto aun no esta, lo vamos a agregar y le vamos a poner cantidad 1
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad:1,
      })
    })

  }

  mostarCarro = () => {
    if(!this.state.carro.length){
      return
    }
    this.setState({ esCarroVisible : !this.state.esCarroVisible })
  }

  limpiarCarro = () => {
    this.setState({carro: [], esCarroVisible: false})
  }

  render(){
    console.log(this.state.carro)
    const { esCarroVisible } = this.state
    return(
      <div>
        <Navbar carro={this.state.carro} 
        esCarroVisible={ esCarroVisible }  
        mostrarCarro={this.mostarCarro}
        limpiarCarro={this.limpiarCarro}/>
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={ this.agregarAlCarro }
            productos = { this.state.productos }
          />
        </Layout>
        
      </div>
    )
  }
}


export default App;
