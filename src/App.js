import React from "react";
import CardList from "./components/card-list/Card-List";
import "./App.css";
import "./index.css";
import "./components/search-box/search-box";
import SearchBox from "./components/search-box/search-box";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
      .catch(error => console.log("no dice"));
  }
  handleChange = e => {
    this.setState({ searchField: e.target.value, title: e.target.value });
  };
  render() {
    const { monsters, searchField, title } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Robots Cards</h1>
        <SearchBox
          placeholder="place holder"
          handleChange={this.handleChange}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
