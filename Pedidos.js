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
    FlatList
} from 'react-native';

// importar para navegar entre pantallas
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';

// export default class Login extends Component {
export default class Pedidos extends Component {
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
    xhttp.open("GET", "http://tiendapp.freevar.com/tiendappScrips/mostrarPedidosActivos.php", true);
    xhttp.send();
  }

  render() {
    
    const celda = ({item}) => {
        return(
          <View style={styles.celdaContainer}>
            <TouchableOpacity 
                // onPress={() => this.props.navigation.navigate({orderID:item.id})}
                onPress={() => this.props.navigation.navigate("DetallesOrden",{orderID:item.id})}
            >
                {/* id,deliveryAddress,nProducts,date,total,userID,courierID */}
                <Text style={styles.celda}>ID: {item.id}</Text>
                <Text style={styles.celda}>Destino: {item.deliveryAddress}</Text>
                <Text style={styles.celda}>Productos: {item.nProducts}</Text>
                <Text style={styles.celda}>Fecha: {item.date}</Text>
                <Text style={styles.celda}>Total: {item.total}</Text>
                <Text style={styles.celda}>Usuario: {item.userID}</Text>
                <Text style={styles.celda}>Repartidor: {item.courierID}</Text>
            </TouchableOpacity>
          </View>
        )
      }
    
    
    // js programming for objects
    const btnClick = () => {
        this.props.navigation.navigate("Opciones");
    }
    
    return (
        <SafeAreaView style={styles.background}>
            <ImageBackground
                style={styles.background}
            >
                <View style={styles.espacioTitulo}>
                    <Text style={styles.textoTitulo}> Pedidos </Text>
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
                        onPress={btnClick}
                    >
                        <Text style={styles.textoFooter}>Regresar</Text>
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
    },
    espacioFooter:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"#2081C3"
    }, 
    btnFooter:{
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
    },
    celda:{
        fontSize:15,
        fontFamily:"serif",
        color:"#F7F9F9",
    },
    textoFooter:{
        fontSize:30,
        fontWeight:"bold",
        color:"#F7F9F9"
    },
})