import "./NewsGrid.css";
import News from "../News/News";
import Article from "../Article/Article";

function NewsGrid() {
  return (
    <div className="NewsGrid">
      <div className="image-holder">
        <img
          className="desktop"
          src="assets/images/image-web-3-desktop.jpg"
          alt=""
        />
        <img
          className="mobile"
          src="assets/images/image-web-3-mobile.jpg"
          alt=""
        />
      </div>
      <h1>The Bright Future of Web 3.0?</h1>
      <div className="description">
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button>Read More</button>
      </div>
      <News />
      <Article
        img="assets/images/image-retro-pcs.jpg"
        number="01"
        title="Reviving Retro PCs"
        description="What happens when old PCs are given modern upgrades? "
      />
      <Article
        img="assets/images/image-top-laptops.jpg"
        number="02"
        title="Top 10 Laptops of 2022"
        description="Our best picks for various needs and budgets."
      />
      <Article
        img="assets/images/image-gaming-growth.jpg"
        number="03"
        title="The Growth of Gaming"
        description="How the pandemic has sparked fresh opportunities."
      />
    </div>
  );
}

export default NewsGrid;
