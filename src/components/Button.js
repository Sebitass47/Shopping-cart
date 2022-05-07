import {Component } from 'react'
const styles = {
    button: {
        backgroundColor: '#0A283E',
        color: 'white',
        border: 'none',
        padding: '10px 15px',
        borderRadius: '5px',
        cursor: 'pointer',
    }
}

class Button extends Component{
    render(){
        return(
            <button style={styles.button} {...this.props}/>
        )
    }
}

export default Button