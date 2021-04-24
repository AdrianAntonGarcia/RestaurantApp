import React, {useReducer} from 'react';

import firebase from '../../firebase';
import FirebaseReducer from './firebaseReducer';
import FirebaseContex from './firebaseContext';

import {OBTENER_PRODUCTOS} from '../../types';

const FirebaseState = props => {
  // Crear state inicial
  const initialState = {
    menu: [],
  };

  // useReducer con dispatch para ejecutar las funciones
  const [state, dispatch] = useReducer(FirebaseReducer, initialState);

  // Función que se ejecuta para traer los productos
  const obtenerProductos = () => {
    dispatch({type: OBTENER_PRODUCTOS});
  };
  return (
    <FirebaseContex.Provider
      props={props}
      value={{menu: state.menu, firebase, obtenerProductos}}>
      {props.children}
    </FirebaseContex.Provider>
  );
};

export default FirebaseState;
