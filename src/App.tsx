import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Lottie from "./Lottie";
import MaterialUI from "./MaterialUI";
import NachoUI from "./NachoUI";
import NativeBase from "./NativeBase";
import Paper from "./Paper";
import RNElements from "./RNElements";
import RNElementsKit from "./RNElementsKit";
import RNProgress from "./RNProgress";
import RNUILib from "./RNUILib";
import ShoutemUI from "./ShoutemUI";
import SpinKit from "./SpinKit";
import UIKitten from "./UIKitten";
import VectorIcons from "./VectorIcons";

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal pagingEnabled decelerationRate={0.993}>
          <Lottie />
          <MaterialUI />
          <NachoUI />
          <NativeBase />
          <Paper />
          <RNElements />
          <RNElementsKit />
          <RNProgress />
          <RNUILib />
          <ShoutemUI />
          <SpinKit />
          <UIKitten />
          <VectorIcons />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
