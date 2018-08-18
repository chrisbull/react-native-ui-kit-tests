import { Animated, Easing, ScrollView, StyleSheet, View } from "react-native";
import React, { Component } from "react";

import LottieAnimatedExample from "./LottieAnimatedExample";

export default class UIExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0)
    };
  }

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <LottieAnimatedExample />
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
