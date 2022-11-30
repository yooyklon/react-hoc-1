import { DateTimeContainer } from "./DateTime";

export default function Video(props) {
  return (
    <div className="video">
      <iframe
        src={props.url}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <DateTimeContainer date={props.date} />
    </div>
  );
}
