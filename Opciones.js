// import objects
import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ImageBackground, 
    TouchableOpacity,
    Alert,
    SafeAreaView,
    Dimensions,
} from 'react-native';

// importar para navegar entre pantallas
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';

// export default class Login extends Component {
export default class Opciones extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // variables definition
        opciones:["Tienda","Repartidores","Pedidos"],
    };
  }


  render() {
    
    
    // js programming for objects
    const btnClick = (opcion) => {
        console.log("Boton presionado: " + this.state.opciones[0]);
        // this.props.navigation.navigate(this.state.opciones[opcion]);
    }
    
    return (
        <SafeAreaView style={styles.background}>
            <ImageBackground
                style={styles.background}
            >
                <View style={styles.espacioTitulo}>
                    <Text style={styles.textoTitulo}> ¡Bienvenido! </Text>
                </View>
                
                <View style={styles.espacioProductos}>
                    <TouchableOpacity
                        style={styles.botonOpciones}
                        activeOpacity={0.7}
                        onPress={() => this.props.navigation.navigate(this.state.opciones[0])}
                    >
                        <Text style={styles.textoOpcion}>Manejar Tienda</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.botonOpciones}
                        activeOpacity={0.7}
                        onPress={() => this.props.navigation.navigate(this.state.opciones[1])}
                    >
                        <Text style={styles.textoOpcion}>Manejar Repartidores</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        style={styles.botonOpciones}
                        activeOpacity={0.7}
                        onPress={() => this.props.navigation.navigate(this.state.opciones[2])}
                    >
                        <Text style={styles.textoOpcion}>Ver Pedidos</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.espacioFooter}>
                    {/* <TouchableOpacity 
                        style={styles.btnFooter}
                        activeOpacity={0.7}
                        onPress={btnClick}
                    >
                        <Text>He recibido mi orden</Text>
                    </TouchableOpacity> */}
                </View>
            </ImageBackground> 
        </SafeAreaView>
    );
  }
}


// styles
const styles = StyleSheet.create({
    background:{
        backgroundColor: "#F7F9F9",
        // Make sure the bg image stays same size when keyboard displays
        position: 'absolute',
        left: 0,
        top: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    textoTitulo:{
        fontWeight:"bold",
        fontSize: 40,
        color: "#000",
        textAlign: "center",
        fontFamily:"arial",
    },
    espacioTitulo:{
        flex: 2,
        justifyContent:"center",
        backgroundColor:"#BED8D4"
    },
    espacioProductos:{
        flex: 7,
    },
    espacioFooter:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"#78D5D7"
    }, 
    btnFooter:{
        alignItems:"center",
    },
    botonOpciones:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:20,
        marginVertical:20,
        borderWidth:2,
        borderColor:"black",
        padding:10,
        borderRadius:15,
        backgroundColor: "#FFE3E1",
    },
    textoOpcion:{
        fontSize:30,
    }

})