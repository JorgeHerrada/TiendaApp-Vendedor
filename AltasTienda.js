import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, SafeAreaView, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export default class AltasTienda extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name:"",
        description:"",
        picture:"",
        price:"",
        stock:"",
        active:"",
    };
  }

  render() {

    const btnClickRegresar = () => {
        this.props.navigation.navigate("Tienda");
    }
    
    const btnTomarFoto = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
          });
    }
    
    const btnCargarFoto = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
          });
    }

    const btnClickAgregar = () => {
        let _this = this;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            console.log("Alta enviada al servidor");
            if (this.readyState == 4 && this.status == 200) {
                console.log("Respuesta: " + xhttp.responseText);
                if(xhttp.responseText == "1"){
                    // desplegar alerta
                    Alert.alert(
                        "Alta Exitosa",
                        "El producto se ha agregado con éxito a la tienda. Puedes editarlo en el menú 'Tienda'.",
                        [{ text: "OK"}]
                    );
                    _this.props.navigation.navigate("Opciones");
                }
                else{
                    // desplegar alerta
                    Alert.alert(
                        "¡Error!",
                        "No se ha logrado agregar el producto, asegurate de llenar los campos correctamente.",
                        [{ text: "OK"}]
                    );
                    console.log("No se pudo completar la insecion en la DB.");
                }
                
            
            }
        };
        xhttp.open("GET", "http://tiendapp.freevar.com/tiendappScrips/altasTienda.php?name="+this.state.name+"&description="+this.state.description+"&price="+this.state.price+"&stock="+this.state.stock+"&active="+this.state.active+"&picture="+this.state.picture, true);
        xhttp.send();
    }
    
    return (
        <SafeAreaView style={styles.background}>
            <ImageBackground
                style={styles.background}
            >
                <View style={styles.espacioTitulo}>
                    <Text style={styles.textoTitulo}> Altas Tienda </Text>
                </View>
                
                <View style={styles.espacioContenido}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre"
                        placeholderTextColor={"black"}
                        // get input and save in var username
                        onChangeText={name => this.setState({name})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Descripcion del producto"
                        placeholderTextColor={"black"}
                        // get input and save in var username
                        onChangeText={description => this.setState({description})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Precio"
                        placeholderTextColor={"black"}
                        keyboardType="numeric"
                        // get input and save in var username
                        onChangeText={price => this.setState({price})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Existencias"
                        placeholderTextColor={"black"}
                        keyboardType="numeric"
                        // get input and save in var username
                        onChangeText={stock => this.setState({stock})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Activo(1) / Inactivo(0)"
                        placeholderTextColor={"black"}
                        keyboardType="numeric"
                        // get input and save in var username
                        onChangeText={active => this.setState({active})}
                    />
                    <TouchableOpacity
                            style={styles.btnEntrar}
                            activeOpacity={0.7}
                            onPress={btnTomarFoto}
                    > 
                        <Text style={styles.textoBoton}> Tomar Foto </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                            style={styles.btnEntrar}
                            activeOpacity={0.7}
                            onPress={btnCargarFoto}
                    > 
                        <Text style={styles.textoBoton}> Subir Foto </Text>
                    </TouchableOpacity>
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
                        <Text style={styles.textoFooter}>Guardar</Text>
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
    espacioContenido:{
        flex: 7,
    },
    espacioFooter:{
        flex:1,
        backgroundColor:"#2081C3",
        flexDirection:"row",
        // justifyContent:"center",
    }, 
    btnFooter:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    textoFooter:{
        fontSize:30,
        color:"#F7F9F9",
        fontWeight:"bold",
    },
    input:{
        borderWidth: 2,
        fontSize: 25,
        marginTop: 10,
        marginHorizontal: 30,
        borderRadius: 8,
    },
    btnEntrar:{
        width:"50%",
        height: "12%",
        alignSelf: "center",
        marginTop: 20,
        backgroundColor:"#78D5D7",
        // borderWidth:2,
        borderRadius: 8,
        justifyContent:"center",
        alignItems:"center",        
    },textoBoton:{
        fontSize: 30,
        color:"#F7F9F9",
        fontWeight:"bold",
    },
})