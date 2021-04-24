import React, {useReducer} from 'react';

import firebase from '../../firebase';
import FirebaseReducer from './firebaseReducer';
import FirebaseContex from './firebaseContext';

const FirebaseState = props => {
  console.log(firebase);
  // Crear state inicial
  const initialState = {
    menu: [],
  };

  // useReducer con dispatch para ejecutar las funciones
  const [state, dispatch] = useReducer(FirebaseReducer, initialState);
  return (
    <FirebaseContex.Provider props={props} value={{menu: state.menu, firebase}}>
      {props.children}
    </FirebaseContex.Provider>
  );
};

export default FirebaseState;
