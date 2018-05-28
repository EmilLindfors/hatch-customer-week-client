import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import {
  Card,
  Icon,
  Image,
  Sidebar,
  Menu,
  Segment,
  Header,
  Button,
  Responsive
} from "semantic-ui-react";
import { MyMapComponent } from "./map";

class App extends React.PureComponent {
  state = {
    visible: "tuesday"
  };

  handleItemClick = name => this.setState({ visible: name });
  render() {
    const { visible } = this.state;
    return (
      <Fragment>
        <Responsive
          as={Segment}
          minWidth={768}
          inverted
          style={{ marginBottom: 0 }}
        >
          <Menu inverted pointing secondary attached="top">
            <Header
              inverted
              as="h2"
              style={{ marginTop: "10px", marginRight: "10px" }}
            >
              Hatch Customer Week
            </Header>
            <Button.Group>
              <Button
                color="red"
                onClick={() => this.handleItemClick("tuesday")}
              >
                Tuesday
              </Button>
              <Button
                color="blue"
                onClick={() => this.handleItemClick("wednesday")}
              >
                Wednesday
              </Button>
              <Button
                color="yellow"
                onClick={() => this.handleItemClick("thursday")}
              >
                Thursday
              </Button>
              <Button
                color="green"
                onClick={() => this.handleItemClick("friday")}
              >
                Friday
              </Button>
              <Button
                color="teal"
                onClick={() => this.handleItemClick("monday")}
              >
                Monday
              </Button>
            </Button.Group>
          </Menu>
        </Responsive>
        <Responsive
          as={Segment}
          maxWidth={768}
          inverted
          fluid
          style={{ marginBottom: 0 }}
        >
          <Menu inverted pointing secondary vertical attached="top">
            <Header inverted as="h4" centered>
              Hatch Customer Week
            </Header>
            <Button
              color="red"
              fluid
              onClick={() => this.handleItemClick("tuesday")}
            >
              Tuesday
            </Button>
            <Button
              fluid
              color="blue"
              onClick={() => this.handleItemClick("wednesday")}
            >
              Wednesday
            </Button>
            <Button
              fluid
              color="yellow"
              onClick={() => this.handleItemClick("thursday")}
            >
              Thursday
            </Button>
            <Button
              fluid
              color="green"
              onClick={() => this.handleItemClick("friday")}
            >
              Friday
            </Button>
            <Button
              fluid
              color="teal"
              onClick={() => this.handleItemClick("monday")}
            >
              Monday
            </Button>
          </Menu>
        </Responsive>
        <MyMapComponent visible={visible} />
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
