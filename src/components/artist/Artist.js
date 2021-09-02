
import ArtistList from './ArtistList';
import useHttp from '../../hooks/use-http';
import { useState, useEffect, Fragment } from 'react';

const Artist = () => {

    const [artist, setArtist] = useState([]);
    const { isLoading, error, sendRequest: fetchArtists } = useHttp();
  
    useEffect(() => {
      const transformArtist = (objTask) => {
        setArtist(objTask);
      };
  
      fetchArtists(
        {
          url: "https://jsonplaceholder.typicode.com/users",
        },
        transformArtist
      );
    }, [fetchArtists]);
    


    
  let content = <p>Found no artists.</p>;

  if (artist.length > 0) {
    content = <ArtistList artistList ={artist} />
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


export default Artist;