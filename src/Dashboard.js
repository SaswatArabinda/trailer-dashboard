import React, { Component } from 'react';
import Header from './components/header';
import Card from './components/card';
import CreateTags from './components/createTags';
import { store } from "./store/index";
import './Dashboard.css';

class Dashboard extends Component {

  render() {
    const { results, activeIndex } = store.getState();
    let { languageFilter } = store.getState();

    return (
      <React.Fragment>
        <Header />
        <div className="applied-filter">
          <span className="applied-filter-text" style={{ display: languageFilter.length <= 0 ? 'none' : 'block' }}>Applied filter</span>
          <CreateTags data={languageFilter} />
        </div>
        <ul className="grid clearfix hasSelectedItem currentgrid hello">
          {results.map((curr, i) => <Card {...curr} selected={i == activeIndex} index={i} key={i} />)}
        </ul>
      </React.Fragment>

    );
  }
}

export default Dashboard;