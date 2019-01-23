import React, { Component } from 'react';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import '../css/header.css';

class Header extends Component {
    render() {
        // debugger;
        const { languages, filterLanguages } = this.props;
        // const options = [
        //     { label: 'Thing 1', value: 1 },
        //     { label: 'Thing 2', value: 2 },
        // ];
        let arrLangs = languages.reduce((acc, val, i) => {
            // debugger ; 
            acc.push({ label: val, value: val })
            return acc
        }, [])
        return (
            <header>
                <div className="nav-bar">
                    <div className="nav-left"></div>
                    <div className="nav-right">
                        <ReactMultiSelectCheckboxes options={arrLangs} onChange={(val) => filterLanguages(val)} />
                        {/* <ReactMultiSelectCheckboxes options={options} /> */}
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
