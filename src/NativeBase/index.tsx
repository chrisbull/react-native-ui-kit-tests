import { StyleProvider, Container, Content, Text } from "native-base";

import getTheme from "./native-base-theme/components/index.js";

export default class NativeBase extends Components {
  render() {
    return (
      <StyleProvider style={getTheme()}>
        <Container>
          <Content>
            <Text>Hello World</Text>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}
