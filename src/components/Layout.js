import { Component } from "react";
const styles = {
    layout: {
        backgroundColor: '#fff',
        color: 'E0a283e',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',

    },

    container:{
        width: '1200px',
    }
}
class Layout extends Component{
    render() {
        return(
            //Centrar todo el contenido
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
                
            </div>
        )
    }
}

export default Layout