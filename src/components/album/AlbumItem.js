
import classes from './AlbumItem.module.css';

const AlbumItem = (props) => {
    return <li className = {classes.item}>
        <h2>{props.name}</h2>
        
    </li>
}
export default AlbumItem;