import React, { Component } from 'react';
import "../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "../src/RapplerCarousel.css";
import "../src/styles.css";
const API = 'https://svc.rappler.com/p/topstories';


class RapplerCarousel extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        articles: {
            data: null
            }
        }
    }

    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({ articles: data }))
    }

    render() {

        let articles = (!this.state.articles.data ? "Loading Articles" :
            <Carousel  autoPlay infiniteLoop>
                {this.state.articles.data.map((article, index) => {
                    return (
                        <div key={index}>
                            <img src={article.images[0].full} alt="img" />
                            <div className="legend">
                                <p className="title">{article.title}</p>
                                <p className="metadesc">{article.metadesc}</p>
                            </div>
                        </div>
                    )
                })
                }
            </Carousel>
        );

        return (
            <div className="App-Header">
                {articles}
            </div>
        )
    }

}

export default RapplerCarousel;