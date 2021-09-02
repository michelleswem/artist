
import classes from './ArtistItem.module.css';

const ArtistItem = (props) => {
    return <li className = {classes.item}>
        <h2>{props.title}</h2>
        
    </li>
}
export default ArtistItem;