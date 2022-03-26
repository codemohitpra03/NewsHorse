import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize: 8,
    category: 'general'
  }

  static propTypes={
    country:PropTypes.string,
    pageSize: PropTypes.number,
    category:PropTypes.string
  }
  capitalize=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  constructor(props){
    super(props);
    this.state={
      articles: [],
      loading: true,
      page:1,
      totalResults:0
    }
    document.title=`${this.capitalize(this.props.category)} - NewsHorse`;
  }

  //this method runs after render method
  async componentDidMount(){

    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7803dd7e2ca846209852917474f34db8&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({
    //   loading:true
    // })
    // let data=await fetch(url);
    // let parsedData=await data.json();
    // console.log(data);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading:false
    // });
    this.updateNews();
  }

  async updateNews(){
    this.props.setProgress(10);
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading:true
    })
    let data=await fetch(url);
    this.props.setProgress(29);
    let parsedData=await data.json();
    this.props.setProgress(37);
    console.log(data);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    });
    this.props.setProgress(100);
  }


  fetchMoreData = async () => {
    this.setState({
      page:this.state.page+1
    })
    
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data=await fetch(url);
    let parsedData=await data.json();
    console.log(data);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    });
  };




  // handlePrevClick= async ()=>{
  //   // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7803dd7e2ca846209852917474f34db8&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  //   // this.setState({
  //   //   loading:true
  //   // })
  //   // let data=await fetch(url);
  //   // let parsedData=await data.json();
  //   // console.log(data);
    
  //   // this.setState({
  //   //   articles: parsedData.articles,
  //   //   page:this.state.page-1,
  //   //   loading:false
  //   // })

  //   this.setState({page:this.state.page-1});
  //   this.updateNews();
  // }

  // handleNextClick= async ()=>{
  //   // if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
  //   //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7803dd7e2ca846209852917474f34db8&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  //   //   this.setState({
  //   //     loading:true
  //   //   })
  //   //   let data=await fetch(url);
  //   //   let parsedData=await data.json();
  //   //   console.log(data);
  //   //   this.setState({
  //   //     articles: parsedData.articles,
  //   //     page:this.state.page+1,
  //   //     loading:false
  //   //   })
  //   // }

  //   this.setState({page:this.state.page+1});
  //   this.updateNews();
  // }

  //{this.state.loading && <Spinner/> } very very imp

  render() {
    return (
        <>
            <h1 className='text-center' style={{margin: '37px 0px', marginTop:"90px"}}>NewsHorse - Top HeadLines on {this.capitalize(this.props.category)}</h1>
            {this.state.loading && <Spinner/> } 
            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length!==this.state.totalResults}
              loader={<Spinner/>}
            >
              <div className="container">
                <div className="row">
                  {/* {!this.state.loading && this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                  </div>
                  })}   */}
                  {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                  </div>
                  })}
                </div>
              </div>
            </InfiniteScroll>

            {/* <div className="container d-flex justify-content-between">
              <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
              <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
            </div> */}
        </>
    );
  }
}

export default News;
