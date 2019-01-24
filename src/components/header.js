import React, { Component } from 'react';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import { store } from "../store/index";
import { filterResults } from "../actions/index";
import '../css/header.css';

class Header extends Component {
    dispatchOnChangeAction(val) {
        let arrSelectedLang = val.map((curr) => curr.value.toLowerCase());
        let filteredResults = store.getState().allResults
        if (arrSelectedLang.length) {
            filteredResults = filteredResults.filter((curr) => arrSelectedLang.indexOf(curr.EventLanguage.toLowerCase()) !== -1)
        }

        let params = {
            languageFilter: arrSelectedLang,
            results: filteredResults
        }
        store.dispatch(filterResults(params));
    }

    render() {
        const { languages } = store.getState()

        let arrLangs = languages.reduce((acc, val, i) => {
            acc.push({ label: val, value: val })
            return acc
        }, [])

        return (
            <header>
                <div className="nav-bar">
                    <div className="nav-left"></div>
                    <div className="nav-right">
                        <ReactMultiSelectCheckboxes options={arrLangs} onChange={this.dispatchOnChangeAction} />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
