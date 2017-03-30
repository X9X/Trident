import React from 'react';
import {connect} from 'react-redux';
import HelloWorld from '../components/HelloWorld';

export const FuelSavingsPage = () => {
  return (
    <HelloWorld name="Young"/>
  );
};
export default connect()(FuelSavingsPage);
