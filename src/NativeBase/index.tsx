import React, { Component } from "react";
import { Container, Content, Text, StyleProvider } from "native-base";

import getTheme from "./theme/components";
import material from "./theme/variables/material";

export default class ThemeExample extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Content>
            <Text>I have changed the text color.</Text>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}
