import React, { Component } from 'react';
import { Platform, StyleSheet, TouchableOpacity, View, Button } from 'react-native';
import { computerUpdateColor, validateUserClick } from '../SimonActions/actions';
import store from '../SimonStore/store';
import { connect } from 'react-redux';


const Square = (props) => {

 // console.log('here', props);
  return (
    <TouchableOpacity style={{
      width: 100,
      height: 50,
      backgroundColor: props.color,
      marginTop: 10
    }}
      onPress={() => {
      props.onUserClickedOnColor(props.index);
        props.dispatch(validateUserClick(props.color));
        console.log('STATE', state)
      // props.colorEach();
      

          //  console.log('Square props', props)
         }}
         
         title=""/>
  );  

};

const mapStateToProps = (state, props) => {
  return {
    ...state
  };
};
export default connect(mapStateToProps)(Square);