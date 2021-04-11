import "./Title.scss";

export default function Title(props) {
  return (
    <div className="title-container" style={{backgroundColor:props.background}} >
      <div className="title">
        <p>{props.subTitle}</p>
        <h2>{props.title}</h2>
      </div>
    </div>
  );
}
