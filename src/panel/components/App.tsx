import * as React from "react";
import MenuContainer from "./containers/MenuContainer";
import { Container } from "semantic-ui-react";
import * as Clipboard from "clipboard";

import AddWebRequest from "./containers/AddWebRequest";
import VisibleWebRequests from "./containers/VisibleWebRequests";

export default class App extends React.Component {
  componentDidMount() {
    new Clipboard(".clipBoard");
  }

  render() {
    return (
      <div>
        <AddWebRequest />
        <Container fluid>
          <MenuContainer />
        </Container>
        <Container fluid className="data-rows">
          <VisibleWebRequests />
        </Container>
      </div>
    );
  }
}