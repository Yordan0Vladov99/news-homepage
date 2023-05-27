import "./Article.css";

function Article(props) {
  return (
    <div className="Article">
      <img src={props.img} alt="" />
      <div className="data">
        <h1>{props.number}</h1>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Article;
