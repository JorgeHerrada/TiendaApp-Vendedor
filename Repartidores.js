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
    FlatList,
    Image,
} from 'react-native';

// importar para navegar entre pantallas
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';

// export default class Login extends Component {
export default class Repartidores extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // variables definition
        datosServer:"",
        contadorArticulos:0,
    };
  }

  // ejecuta cada que se carga la vista
  componentDidMount(){
    let _this = this;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      console.log("Petición enviada a servidor");
      if (this.readyState == 4 && this.status == 200) {
        // save data from server on JS object
        var datos=JSON.parse(xhttp.responseText);
        _this.setState({datosServer:datos}); // save object
        console.log("JSON recibido");
      }
    };
    xhttp.open("GET", "http://tiendapp.freevar.com/tiendappScrips/mostrarRepartidores.php", true);
    xhttp.send();
  }

  render() {
    
    const celda = ({item}) => {
        return(
            <TouchableOpacity 
                onPress={() => this.props.navigation.navigate("DetallesRepartidor",{id:item.id,email:item.email,name:item.name,lastName1:item.lastName1,lastName2:item.lastName2,picture:item.picture,active:item.active})}
                // onPress={() => this.props.navigation.navigate("ModificacionesRepartidores")}
            >
                <View style={styles.celdaContainer}>
                    <View style={styles.productInfo}>
                        {/* id,email,name,lastName1,lastName2,picture,active */}
                        <Text style={styles.celda}>id: {item.id}</Text>
                        <Text style={styles.celda}>Email: {item.email}</Text>
                        <Text style={styles.celda}>Nombre: {item.name + " " + item.lastName1 + " " + item.lastName2}</Text>
                        {/* <Text style={styles.celda}>Foto: {item.picture}</Text> */}
                        <Text style={styles.celda}>Activo: {item.active}</Text>
                    </View>
                    <View style={styles.fotoContainer}>
                        <Image
                            style={{width:100,height:100,borderRadius:8}}
                            source={{uri:item.picture}}
                            // source={require(this.props.route.params.imagen)}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        )
      }
    
    
    // js programming for objects
    const btnClickRegresar = () => {
        this.props.navigation.navigate("Opciones");
    }

    const btnClickAgregar = () => {
        this.props.navigation.navigate("AltasRepartidores");
    }
    
   
    
    
    return (
        <SafeAreaView style={styles.background}>
            <ImageBackground
                style={styles.background}
            >
                <View style={styles.espacioTitulo}>
                    <Text style={styles.textoTitulo}> Repartidores </Text>
                </View>
                
                <View style={styles.espacioProductos}>
                    <FlatList
                        data={this.state.datosServer}
                        renderItem={celda}
                        keyExtractor={(item,index) => index.toString()}
                        style={styles.flatList}
                    />
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
                        onPress={btnClickAgregar}
                    >
                        <Text style={styles.textoFooter}>Agregar</Text>
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
        backgroundColor:"#63D2FF",
    },
    espacioProductos:{
        flex: 7,
    },
    espacioFooter:{
        flex:1,
        backgroundColor:"#2081C3",
        flexDirection:"row",
    }, 
    btnFooter:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
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
        flexDirection:"row",
    },
    celda:{
        fontSize:15,
        fontFamily:"serif",
        color:"#F7F9F9",
    },
    textoFooter:{
        fontSize:30,
        fontWeight:"bold",
        color:"#F7F9F9",
    },
    productInfo:{
        flex: 2,
    },
    fotoContainer:{
        flex: 1,
        justifyContent:"center",
        alignContent:"center",
    }
})