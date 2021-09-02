import ArtistItem from "./ArtistItem";
import classes from "./ArtistList.module.css";

const ArtistList = (props) => {
  return (
    <ul className={classes.list}>
      {props.artistList.map((artist) => (
        <ArtistItem key={artist.id} id={artist.id} name={artist.name} />
      ))}
    </ul>
  );
};

export default ArtistList;
