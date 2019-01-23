import React, { Component } from "react";
import ShowCase from './showCase';
import '../css/Card.css';

class Card extends Component {

    render() {
        const { selected, onClick, EventImageCode, EventTitle, index } = this.props;
        const pStyle = {
            'backgroundImage': `url('https://in.bmscdn.com/events/moviecard/${EventImageCode}.jpg')`
        };

        return (
            <React.Fragment>
                <li data-index={index} className={(selected) ? "grid-list selectedItem" : 'grid-list'} onClick={onClick}>
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