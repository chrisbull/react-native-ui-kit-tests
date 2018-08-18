import React, { Component } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";

export default class UIExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <Text> textInComponent </Text>
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
