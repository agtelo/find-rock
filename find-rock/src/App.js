import React, { Component } from "react";
import ArtistCard from "./components/artist-card";
import SearchBar from "./components/search-bar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SearchBar />
        <div className="container">
          <div className="row">
            <ArtistCard
              img="https://http2.mlstatic.com/D_NQ_NP_13530-MLA3063779716_082012-O.jpg"
              titulo="Iron Maiden"
            />
            <ArtistCard
              img="https://img.discogs.com/hbDszptk7uGXRa6buIvSbFFAwQs=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-5785557-1403109940-6287.jpeg.jpg"
              titulo="Dream Teather"
            />
            <ArtistCard
              img="https://img.discogs.com/V6DQdkTXpXe-v5X3Inzrj-rMPMk=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-18845-1546167009-4213.jpeg.jpg"
              titulo="Slayer"
            />
            <ArtistCard
              img="https://img.discogs.com/sAfW4tK47LfM60W4-t9v7landO4=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-7324972-1439508568-6212.jpeg.jpg"
              titulo="Fear Factory"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
