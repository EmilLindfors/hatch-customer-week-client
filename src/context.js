import React from "react";

export const MyContext = React.createContext();

// Then create a provider Component
class MyProvider extends React.Component {
  state = {
    tuesday: true,
    wednesday: false,
    thursday: false,
    friday: false,
    showMenu: false
  };

  toggle = name => this.setState({ [name]: !name });
  toggleMenu = () => this.setState({ showMenu: !showMenu });

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          toggle: name => this.toggle(name),
          toggleMenu: this.toggleMenu
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
