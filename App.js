import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DetallePlatillo from './views/DetallePlatillo';
import FormularioPlatillo from './views/FormularioPlatillo';
import Menu from './views/Menu';
import NuevaOrden from './views/NuevaOrden';
import ProgresoPedido from './views/ProgresoPedido';
import ResumenPedido from './views/ResumenPedido';
//Importar state de context
import FirebaseState from './context/firebase/firebaseState';
import PedidoState from './context/pedidos/pedidosState';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <FirebaseState>
        <PedidoState>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#FFDA00',
                },
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerTintColor: '#000',
              }}>
              <Stack.Screen
                name="NuevaOrden"
                component={NuevaOrden}
                options={{title: 'Nueva Orden'}}
              />
              <Stack.Screen
                name="Menu"
                component={Menu}
                options={{title: 'Nuesto Menú'}}
              />
              <Stack.Screen
                name="DetallePlatillo"
                component={DetallePlatillo}
                options={{title: 'Detalle Platillo'}}
              />
              <Stack.Screen
                name="FormularioPlatillo"
                component={FormularioPlatillo}
                options={{title: 'Ordenar Platillo'}}
              />
              <Stack.Screen
                name="ResumenPedido"
                component={ResumenPedido}
                options={{title: 'Resumen Pedido'}}
              />
              <Stack.Screen
                name="ProgresoPedido"
                component={ProgresoPedido}
                options={{title: 'Progreso de pedido'}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PedidoState>
      </FirebaseState>
    </>
  );
};

export default App;
