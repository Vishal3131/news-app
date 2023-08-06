import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,imageurl,newsUrl,description,publish_date}=this.props;
    return (
      <div>
        <div className='my-3'/>
        <div className="card rounded shadow" style={{width: '18rem'}}>
       <img src={!imageurl?"https://storage.googleapis.com/afs-prod/media/c3fefa50e77b467c90447967b18f3461/3000.webp":imageurl} style={{height: '12rem'}} className="card-img-top" alt="..."/>   
       <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">published on:{publish_date}</p>
      <a href={newsUrl} target='blank' className="btn btn-sm btn-primary">Read More</a>
      </div>
    </div>
    </div>
 
    )
  }
}

export default Newsitem
