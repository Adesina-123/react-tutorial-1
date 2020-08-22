import React from 'react';
import CardList from './component/card/CardList.Component';
import SearchBox from './component/Search-Box/Search-Box-Component';
import './App.css';
// import Keep from './component/keep';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      Monsters: [],
      searchField: '',
    };
  }

  componentDidMount () {
    fetch ('https://jsonplaceholder.typicode.com/users')
      .then (response => response.json ())
      .then (users => this.setState ({Monsters: users}));
  }
  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  };

  render () {
    const {Monsters, searchField} = this.state;
    const filteredMonster = Monsters.filter (monster =>
      monster.name.toLowerCase().includes (searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>

        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList Monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
