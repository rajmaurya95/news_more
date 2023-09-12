import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageurl, newsURL, author, date, source } = this.props;
        return (
            <div className="card ">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                    {source}

                </span>
                <img className="card-img-top" height={"230px"} src={imageurl} alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className='card-text'><small className='text-muted'> By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small> </p>
                    <a target={"_blank"} rel='noreferrer' href={newsURL} className="btn btn-outline-dark text-center">Read More...</a>
                </div>
            </div>
        )
    }
}
export default NewsItem;
