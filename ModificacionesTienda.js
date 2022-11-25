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
    Image,
} from 'react-native';

// importar para navegar entre pantallas
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';

// export default class Login extends Component {
export default class ModificacionesTienda extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // variables definition
        datosServer:"",
        contadorArticulos:0,
    };
  }

  

  render() {
    
      
    
    // js programming for objects
    const btnClickRegresar = () => {
        this.props.navigation.navigate("Tienda");
    }

    const btnClickEliminar = () => {
        let _this = this;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        console.log("Petición enviada a servidor");
        if (this.readyState == 4 && this.status == 200) {
            if (xhttp.responseText != "0"){
                console.log("Registro eliminado");
                Alert.alert(
                    "Eliminación Exitosa",
                    "El producto se ha eliminado con éxito.",
                    [{ text: "OK"}]
                );
                _this.props.navigation.navigate("Opciones");
            }else{
                Alert.alert(
                    "¡Error!",
                    "No se ha logrado dar de eliminar el producto.",
                    [{ text: "OK"}]
                );
                _this.props.navigation.navigate("Tienda");
                console.log(xhttp.responseText);
            }
        }
        };
        xhttp.open("GET", "http://tiendapp.freevar.com/tiendappScrips/bajas.php?id=" + _this.props.route.params.id + "&table=products", true);
        console.log("http://tiendapp.freevar.com/tiendappScrips/bajas.php?id=" + _this.props.route.params.id + "&table=products");
        xhttp.send();
    }
    
    
    
    
    return (
        <SafeAreaView style={styles.background}>
            <ImageBackground
                style={styles.background}
            >
                <View style={styles.espacioTitulo}>
                    <Text style={styles.textoTitulo}> Detalles del Producto </Text>
                </View>
                
                <View style={styles.espacioProductos}>
                    <Text style={styles.textoContenido}>ID: {this.props.route.params.id}</Text>
                    <Text style={styles.textoContenido}>Nombre: {this.props.route.params.name}</Text>
                    <Text style={styles.textoContenido}>Descripcion: {this.props.route.params.description}</Text>
                    <Text style={styles.textoContenido}>Precio: {this.props.route.params.price}</Text>
                    <Text style={styles.textoContenido}>Existencias: {this.props.route.params.stock}</Text>
                    <Text style={styles.textoContenido}>Estatus: {this.props.route.params.active}</Text>
                    <View style={styles.fotoContainer}>
                        <Image
                            style={{flex:1, height:"80%",width:"80%", borderRadius:8, margin:10,}}
                            source={{uri:this.props.route.params.picture}}
                            // source={require(this.props.route.params.imagen)}
                        />
                    </View>
                </View>
                <View style={styles.espacioFooter}>
                    <TouchableOpacity 
                        style={styles.btnFooter}
                        activeOpacity={0.7}
                        onPress={btnClickRegresar}
                    >
                        <Text style={styles.textoFooter}>Regresar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.btnFooter}
                        activeOpacity={0.7}
                        onPress={btnClickEliminar}
                    >
                        <Text style={styles.textoFooter}>Eliminar</Text>
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
        fontSize: 40,
        color: "#F7F9F9",
        textAlign: "center",
        fontFamily:"arial",
    },
    espacioTitulo:{
        flex: 2,
        justifyContent:"center",
        backgroundColor:"#63D2FF"
    },
    espacioProductos:{
        flex: 7,
        marginVertical:5,
        marginHorizontal:10,
    },
    espacioFooter:{
        flex:1,
        backgroundColor:"#2081C3",
        flexDirection:"row",
        // borderTopWidth:1,
    }, 
    btnFooter:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        // borderRightWidth:1,
        // borderLeftWidth:1,
    },
    celdaContainer:{
        marginHorizontal:20,
        marginVertical:20,
        // borderWidth:2,
        // borderColor:"black",
        padding:10,
        borderRadius:15,
        flex:1,
        backgroundColor: "#78D5D7",
        flexDirection:'row',
    },
    celda:{
        fontSize:15,
        fontFamily:"serif",
        color:"#F7F9F9",
        // fontWeight:"bold",
    },
    textoFooter:{
        fontSize:30,
        fontWeight:"bold",
        color:"#F7F9F9"
    },
    productInfo:{
        flex: 2,
    },
    fotoContainer:{
        flex: 1,
        justifyContent:"center",
        alignContent:"center",
    },
    textoContenido:{
        fontSize: 23,
        color:"black",
        margin:2,
        // flex: 1,
    },
    fotoContainer:{
        flex:7,
        alignItems:"center",
        justifyContent:"center",
    }
})