import React, { Component } from "react";
import { createPromise } from "./services/gnomeService";
import GnomesList from "./components/GnomesList";
import Filter from "./components/Filter";
import Loader from "./components/Loader";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gnomesRawData: [],
      search: "",
      isLoading: true,
    };
    this.getInputSearch = this.getInputSearch.bind(this);
    this.filterByFullName();
  }

  componentDidMount() {
    createPromise().then(data => {
      const rawData = data.Brastlewark;

      setTimeout(
        () =>
          this.setState({
            gnomesRawData: rawData,
            isLoading: false
          }),
        2000
      );
      this.saveData(rawData);
    });
  }

  getSaveData() {
    const allRawData = localStorage.getItem("allRawData");

    if (allRawData !== null) {
      return JSON.parse(allRawData);
    } else {
      this.componentDidMount();
    }
  }

  saveData(data) {
    localStorage.setItem("allRawData", JSON.stringify(data));
  }

  getInputSearch(event) {
    const userSearch = event.currentTarget.value;
    this.setState({
      search: userSearch
    });
  }

  filterByFullName() {
    const filteredGnomes = this.state.gnomesRawData.filter(gnome => {
      const gnomeName = gnome.name;
      if (
        gnomeName
          .toLocaleLowerCase()
          .includes(this.state.search.toLocaleLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    });
    return filteredGnomes;
  }

  render() {
    const gnomesResults = this.filterByFullName();

    return (
      <div className="app__welcoming">
        <header className="app__header">
          <h1 className="app__header-title">Brastlewark Population</h1>

          <Filter
            onKeySearch={this.getInputSearch}
            userSearch={this.state.search}
          />
        </header>
        <main>
          <div className="app__main">
            {this.state.isLoading ? (
              <Loader />
            ) : (
              <GnomesList gnomesResults={gnomesResults} />
            )}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
