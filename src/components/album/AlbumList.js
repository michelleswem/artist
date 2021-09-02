import AlbumItem from "./AlbumItem";
import classes from "./AlbumList.module.css";

const AlbumList = (props) => {
  return (
    <ul className={classes.list}>
      {props.albums.map((album) => (
        <AlbumItem key={album.id} id={album.id} title={album.title} />
      ))}
    </ul>
  );
};

export default AlbumList;
