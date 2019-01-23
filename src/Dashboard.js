import React, { Component } from 'react';
import Header from './components/header';
import Card from './components/card';
import CreateTags from './components/createTags';

import data from './data';
import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props)
    let results = data[1], arrResults = [];

    Object.keys(results).forEach(function (key) {
      arrResults.push(results[key]);
    });
    this.state = {
      languages: data[0],
      allResults: arrResults,
      results: arrResults,
      activeIndex: -1,
      languageFilter: []
    };
    this.displayShowCase = this.displayShowCase.bind(this);
    this.hideShowCase = this.hideShowCase.bind(this);
    this.filterLanguages = this.filterLanguages.bind(this);
  }



  displayShowCase(event) {
    let selectedIndex = event.target.closest(".grid-list").getAttribute("data-index");
    this.setState({
      activeIndex: selectedIndex

    })
  }

  hideShowCase(event) {
    this.setState({
      activeIndex: -1
    })
  }

  filterLanguages(val) {
    let arrSelectedLang = val.map((curr) => curr.value.toLowerCase());
    let filteredResults = this.state.allResults
    if (arrSelectedLang.length) {
      filteredResults = filteredResults.filter((curr) => arrSelectedLang.indexOf(curr.EventLanguage.toLowerCase()) !== -1)
    }
    this.setState({
      languageFilter: arrSelectedLang,
      results: filteredResults
    });

  }

  render() {
    const { results, activeIndex } = this.state;
    let { languageFilter } = this.state;

    return (
      <React.Fragment>
        <Header {...this.state} filterLanguages={this.filterLanguages} />
        <div className="applied-filter">
          <span className="applied-filter-text" style={{ display: languageFilter.length <= 0 ? 'none' : 'block' }}>Applied filter</span>
          <CreateTags data={languageFilter} />
        </div>
        <ul className="grid clearfix hasSelectedItem currentgrid hello">
          {results.map((curr, i) => <Card {...curr} selected={i == activeIndex} index={i} key={i} hideShowCase={this.hideShowCase} onClick={(e) => this.displayShowCase(e)} />)}
        </ul>
      </React.Fragment>

    );
  }
}

export default Dashboard;