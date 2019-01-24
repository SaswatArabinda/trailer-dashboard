import React, { Component } from "react";
import ShowCase from './showCase';
import { store } from '../store/index';
import { hideShowCase } from '../actions/index';
import '../css/Card.css';

class Card extends Component {

    dispatchAction(e) {
        let selectedIndex = e.target.closest(".grid-list").getAttribute("data-index");
        let param = {
            activeIndex: selectedIndex

        }
        store.dispatch(hideShowCase(param));
    }
    render() {
        console.log("Card render called")
        const { selected, EventImageCode, EventTitle, index } = this.props;
        const pStyle = {
            'backgroundImage': `url('https://in.bmscdn.com/events/moviecard/${EventImageCode}.jpg')`
        };

        return (
            <React.Fragment>
                <li data-index={index} className={(selected) ? "grid-list selectedItem" : 'grid-list'} onClick={this.dispatchAction}>
                    <div className="image" style={pStyle}>
                        <div className="overlay">
                            <i className="fa fa-play-circle-o play-button" aria-hidden="true"></i>
                            <span className="title">{EventTitle}</span><br />
                        </div>
                    </div>

                </li>
                {(selected) ? <ShowCase {...this.props} selected={selected} /> : ''}
            </React.Fragment>
        )
    }

}

export default Card;