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
        this.props.navigation.navigate("Login");
    }
    
    return (
        <SafeAreaView style={styles.background}>
            <ImageBackground
                style={styles.background}
            >
                <View style={styles.espacioTitulo}>
                    <Text style={styles.textoTitulo}> ¡Bienvenido! </Text>
                </View>
                
                <View style={styles.espacioContenido}>
                    <TouchableOpacity
                        style={styles.botonOpciones}
                        activeOpacity={0.7}
                        onPress={() => this.props.navigation.navigate(this.state.opciones[0])}
                    >
                        <Text style={styles.textoOpcion}>Tienda</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.botonOpciones}
                        activeOpacity={0.7}
                        onPress={() => this.props.navigation.navigate(this.state.opciones[1])}
                    >
                        <Text style={styles.textoOpcion}>Repartidores</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        style={styles.botonOpciones}
                        activeOpacity={0.7}
                        onPress={() => this.props.navigation.navigate(this.state.opciones[2])}
                    >
                        <Text style={styles.textoOpcion}>Pedidos</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.espacioFooter}>
                    <TouchableOpacity 
                        style={styles.btnFooter}
                        activeOpacity={0.7}
                        onPress={btnClick}
                    >
                        <Text  style={styles.textoFooter}>Regresar</Text>
                    </TouchableOpacity>
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
        fontSize: 50,
        color: "#F7F9F9",
        textAlign: "center",
        fontFamily:"arial",
    },
    espacioTitulo:{
        flex: 2,
        justifyContent:"center",
        backgroundColor:"#63D2FF"
    },
    espacioContenido:{
        flex: 7,
    },
    espacioFooter:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"#2081C3"
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
        borderWidth:0,
        borderColor:"black",
        padding:10,
        borderRadius:15,
        backgroundColor: "#78D5D7",
    },
    textoOpcion:{
        fontSize:40,
        color:"#F7F9F9",
        fontWeight:"bold",
    },
    textoFooter:{
        fontSize:30,
        color:"#F7F9F9",
        fontWeight:"bold",
    },

})