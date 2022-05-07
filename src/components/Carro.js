import {Component} from 'react'
import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro'
const styles = {
    carro: {
        backgroundColor: '#359A2C',
        color: 'white',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
    },

    bubble: {
        position: 'relative',
        left: 12,
        top: 20,
    }
}
class Carro extends Component{
    render(){
        const { carro, esCarroVisible, mostrarCarro, limpiarCarro } = this.props
        //El acumulado empieza 0, y le vamos sumando la cantidad de cada elemento
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
        return(
            <div>
                <span style={styles.bubble}>
                    {/* renderizado condicional, si cantidad es diferente a 0
                    se muesta la burbuja, si es igual a 0,  no se muesta. */}
                    {cantidad !== 0?<BubbleAlert value={cantidad}/>
                    :null}
                    
                </span>
                <button onClick={mostrarCarro} style={styles.carro}>
                    Carro
                </button>
                {esCarroVisible ?
                <DetallesCarro carro={carro} limpiarCarro={limpiarCarro}/>
                : null}
                
            </div>
        )
    }
}

export default Carro