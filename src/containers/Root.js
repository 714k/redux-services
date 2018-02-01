import React, { Component } from "react";
import { Provider } from "react-redux";
import AsyncApp from './AsyncApp';
import configureStore from "../store/config";

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AsyncApp />
      </Provider>
    );
  };
}