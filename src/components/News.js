import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';



export class News extends Component {
    static defaultProps = {
        pageSize: 6,
        country: "in",
        apiKey: "b950364e10c9412f98a1f8ade2905218",
        topic: "top-headlines",
        category: "general",
    }
    static propTypes = {
        pageSize: PropTypes.number,
        country: PropTypes.string,
        apiKey: PropTypes.string,
        topic: PropTypes.string,
        category: PropTypes.string,

    }
    constructor() {
        super();
        console.log("Hello I am a constructor");
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalArticles: 0
        }
    }
    async updateNews() {
        this.props.setProgress(0);
        const url =`https://newsapi.org/v2/${this.props.topic}?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

        this.props.setProgress(25);
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(50);
        let parseData = await data.json();
        this.props.setProgress(75);
        this.setState({
            articles: parseData.articles,
            totalArticles: parseData.totalResults,
            loading: false,
        });
        this.props.setProgress(100)
    }

    async componentDidMount() {
        this.updateNews();
        // let url = `https://newsapi.org/v2/${this.props.topic}?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parseData = await data.json();
        // console.log(parseData);
        // this.setState({
        //     articles: parseData.articles,
        //     totalArticles: parseData.totalResults,
        //     loading: false,
        // });
    }
    handlNextClick = async () => {
        //     if (!(this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize))) {

        //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        //         this.setState({ loading: true })
        //         let data = await fetch(url);
        //         let parseData = await data.json();
        //         console.log(parseData);
        //         this.setState({
        //             page: this.state.page + 1,
        //             articles: parseData.articles,
        //             loading: false
        //         })
        //     }
        this.setState({ page: this.state.page + 1 })
        this.updateNews();

    }
    handlPreviousClick = async () => {

        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        // let data = await fetch(url);
        // let parseData = await data.json();
        // console.log(parseData);
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parseData.articles,
        //     laoding: false
        // })
        this.setState({ page: this.state.page - 1 });
        this.updateNews();


    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
const url =`https://newsapi.org/v2/${this.props.topic}?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalArticles: parseData.totalResults,
            loading: false,
        });


    };


    render() {
        return (
            <>
                <h2 className='text-center my-4 text-uppercase fw-bolder fs-3 '>NewsMore - Top Headlines</h2>
                {/* {this.state.loading && <Spinner />} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={true}
                    loader={<h4><Spinner /></h4>}
                >
                    <div className="container my-3">
                        <div className="row row row-cols-xs-1 row-cols-md-2 row-cols-lg-3 ">

                            {this.state.articles.map((element) => {
                                console.log(element);
                                return <div key={element.url} className="col col-lg-4  col-xs-12 ">
                                    <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage ? element.urlToImage : "https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg"} newsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>

                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}

export default News;
