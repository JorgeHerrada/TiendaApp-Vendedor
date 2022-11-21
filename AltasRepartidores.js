import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';

export default class AltasRepartidores extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    const btnClickRegresar = () => {
        this.props.navigation.navigate("Repartidores");
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
                    
                </View>

                <View style={styles.espacioFooter}>
                    <TouchableOpacity 
                        style={styles.btnFooter}
                        activeOpacity={0.7}
                        onPress={btnClickRegresar}
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
    textoFooter:{
        fontSize:30,
        color:"#F7F9F9",
        fontWeight:"bold",
    },
})