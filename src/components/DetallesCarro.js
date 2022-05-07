import { Component } from 'react'

const styles = {
    detallesCarro: {
        backgroundColor: 'white',
        position: 'absolute',
        marginTop: 30,
        boxShadow: ' 1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 50,
    },

    ul:{
        margin: 0,
        padding: 0,
    },

    li:{
        listStyleType: 'none',
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa'
    },

    button:{
        margin: 'auto',
        backgroundColor: '#eb2202',
        color: 'white',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
    }
}
class DetallesCarro extends Component{
    render(){
        const { carro, limpiarCarro } = this.props
        return(
            <div style={styles.detallesCarro} >
                <ul style={styles.ul}>
                    {carro.map(x => 
                    <li key={x.name} style={styles.li}>
                        <img alt={x.name} src={x.img} width='50' height='32' />
                        {x.name} <span>{x.cantidad}</span>
                    </li>)}
                    <li style={styles.li}>
                        <button style={styles.button} onClick={limpiarCarro}>
                            Limpiar Carrito
                        </button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default DetallesCarro