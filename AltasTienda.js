import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';

export default class AltasTienda extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
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
    espacioContenido:{
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
})