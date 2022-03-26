import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl , author, date, source} = this.props;
    return (
        <div className='my-3'>
          <div className="card">
            <div style={{
              display:"flex",
              justifyContent:"flex-end",
              position:"absolute",
              right:"0"
            }}>  
            <span className="badge rounded-pill bg-danger">{source}</span>
            </div>
            <img src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/22/02/xiaomi-poco-x4-pro-5-amzn-leak/-952x498w6/gsmarena_001.jpg":imageUrl} className="card-img-top" alt="..."/>
           <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-muted">By {author==null ? "Unknown":author} on {new Date(date).toGMTString()}</small></p>
              <a rel='referrer' href={this.props.newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>
        </div>
    );
  }
}

export default NewsItem;
