
import useHttp from '../../hooks/use-http';
import { useState, useEffect, Fragment } from 'react';
import Card from '../UI/Card';
import AlbumList from './AlbumList';


const Album = () => {

    const [albums, setAlbums] = useState([]);
    const { isLoading, error, sendRequest: fetchAlbums } = useHttp();
  
    useEffect(() => {
      const transformAlbums = (objTask) => {
        setAlbums(objTask);
      };
  
      fetchAlbums(
        {
          url: "https://jsonplaceholder.typicode.com/albums",
        },
        transformAlbums
      );
    }, [fetchAlbums]);
    


    
  let content = <p>Found no albums.</p>;

  if (albums.length > 0) {
    content = <AlbumList albums ={albums} />
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }


    return<Fragment>
  {content}
    </Fragment>
    

    
}


export default Album;