import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import Footer from './Footer';
import PropTypes from 'prop-types'

export class News extends Component {

  static defualtProps={
    topic: 'SPORTS'
  }
  static propTypes={
    topic: PropTypes.string
  }
   
  constructor(){
    super();
   this.state = {     
       data: [],    
        loading: false
    }
   }

   async componentDidMount(){
                 //'https://real-time-news-data.p.rapidapi.com/top-headlines?country=IN&lang=en';
   const url =  `https://real-time-news-data.p.rapidapi.com/topic-headlines?topic=${this.props.topic}&country=IN&lang=en`;             
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f594b3134emsh6f2489476e6c510p1f884ajsnb23c59a36373',
		'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
	}
 };
  this.setState({loading:true});
 try {
	const response = await fetch(url, options); 
	const result = await response.json();
	console.log(result);

   this.setState({data:result.data,loading:false})

 }  catch (error) {
	console.error(error);
 }
 
   }

  render() {
    return (
      <div>

      <div className='container my-3 '>
        <h2 className='text-center'>{this.props.category}</h2>
      {this.state.loading && <Spinner/>}
        <div className="row">
        {this.state.data.map((element)=>{
           return <div className="col-md-4"key={element.link}>
        <Newsitem  title="Latest News" imageurl={element.photo_url} newsUrl={element.link} description={element.title.slice(0, 100)} publish_date={element.published_datetime_utc.slice(-24,-14).split("-").reverse().join("-")}/>
          </div>
        
        })}
      
        
        </div>
     </div>
     
     {/* if loading is true then return the blank and loading is false then return the Footer componenets */}

     {this.state.loading ? '' : <Footer/>}
      </div>      
      
    )
  }
}

export default News
