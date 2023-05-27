import "./News.css";

function News() {
  return (
    <div className="News">
      <h1>New</h1>
      <ul className="articles">
        <li>
          <h1>Hydrogen VS Electric Cars</h1>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </li>
        <li>
          <h1>The Downsides of AI Artistry</h1>
          <p>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </li>
        <li>
          <h1>Is VC Funding Drying Up?</h1>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default News;
