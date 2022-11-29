import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// pantallas que saldran en el proyecto
import LOGIN from "./Login";
import SIGNIN from "./SignIn";
import OPCIONES from "./Opciones";
import TIENDA from "./Tienda";
import REPARTIDORES from "./Repartidores";
import PEDIDOS from "./Pedidos";
import ALTASTIENDA from "./AltasTienda";
import ALTASREPARTIDORES from "./AltasRepartidores";
import DETALLESPRODUCTO from "./DetallesProducto";
import DETALLESREPARTIDOR from "./DetallesRepartidor";
import CAMBIOSREPARTIDOR from "./CambiosRepartidor";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen 
          name="Login" 
          component={LOGIN} 
          options={{ headerShown: false }} // header wont show
        />
        <Stack.Screen 
          name="SignIn" 
          component={SIGNIN} 
          options={{ headerShown: false }} // header wont show
        />
        <Stack.Screen 
          name="Opciones" 
          component={OPCIONES} 
          options={{ headerShown: false }} // header wont show
        />
        <Stack.Screen 
          name="Tienda" 
          component={TIENDA} 
          options={{ headerShown: false }} // header wont show
        />
        <Stack.Screen 
          name="Repartidores" 
          component={REPARTIDORES} 
          options={{ headerShown: false }} // header wont show
        />
        <Stack.Screen 
          name="Pedidos" 
          component={PEDIDOS} 
          options={{ headerShown: false }} // header wont show
        />
        <Stack.Screen 
          name="AltasTienda" 
          component={ALTASTIENDA} 
          options={{ headerShown: false }} // header wont show
        />
        <Stack.Screen 
          name="AltasRepartidores" 
          component={ALTASREPARTIDORES} 
          options={{ headerShown: false }} // header wont show
        />
        <Stack.Screen 
          name="DetallesProducto" 
          component={DETALLESPRODUCTO} 
          options={{ headerShown: false }} // header wont show
        />
        <Stack.Screen 
          name="DetallesRepartidor" 
          component={DETALLESREPARTIDOR} 
          options={{ headerShown: false }} // header wont show
        />
        <Stack.Screen 
          name="CambiosRepartidor" 
          component={CAMBIOSREPARTIDOR} 
          options={{ headerShown: false }} // header wont show
        />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;