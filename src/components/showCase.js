import React, { Component } from "react";
import CreateTags from './createTags';
import {store} from '../store/index';
import {displayShowCase} from '../actions/index';

import '../css/showCase.css';


class ShowCase extends Component {
    dispatchAction(e) {
        
        let param = {
            activeIndex: -1

        }
        store.dispatch(displayShowCase(param));
    }
    render() {
        let { hideShowCase, TrailerURL, EventTitle, EventLanguage, EventGenre, wtsCount, ShowDate, wtsPerc } = this.props;

        EventGenre = EventGenre ? EventGenre.split("|") : '';

        let trailerId = TrailerURL.split("?")[1].split("&").filter((curr) => curr.split("v=").length > 1 ? true : false)[0].split("=")[1]
        TrailerURL = `https://www.youtube.com/embed/${trailerId}`;

        return (

            <div className="grid-show" >
                <div className="grid-padding">
                    <div className="grid-navigation">
                        <a href="#" className="fa fa-times grid-close" onClick={this.dispatchAction}></a>
                    </div>
                    <div className="grid-expanded-content">
                        <div className="row">
                            <div className="col-width-70 movie-trailer">
                                <iframe frameBorder="0" title={EventTitle} src={TrailerURL} height="100%" width="100%" name="iframe-name" id="iframeGuideWidget" ></iframe>
                            </div>
                            <div className="col-width-30 movie-briefing">
                                <h2 className="title">{EventTitle}</h2>
                                <h3 className="subtitle">{EventLanguage}</h3>
                                <CreateTags data={EventGenre} />

                                <div className="movie-info">
                                    <div className="review-info clearfix">
                                        <i className="fa fa-thumbs-up"></i>
                                        <div className="reviews">
                                            <span className="likes">{wtsPerc}%</span>
                                            <span className="votes">{wtsCount} votes</span>
                                        </div>
                                    </div>

                                    <div className="release-info clearfix">
                                        <i className="fa fa-calendar"></i>
                                        <div className="release-slot">
                                            <span className="release-date">{ShowDate}</span>
                                            <span className="release-year">xxxx</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quisquam
                                    soluta eligendi totam, sequi maiores maxime, voluptatibus dignissimos quae
                                    recusandae obcaecati voluptates culpa adipisci vero dicta deleniti praesentium.
                                    Nulla, porro?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ShowCase;