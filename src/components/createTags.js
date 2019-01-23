import React, { Component } from 'react';
import '../css/createTags.css';

class Createtags extends Component{
    render(){
        let {data} = this.props;
        data = Array.isArray(data) ? data : [];
        return(
            <div className="tags">
                  {data.map((curr,i)=> <span key={i} className="tag-name">{curr}</span>)}
            </div>
        )
    }
}


export default Createtags;