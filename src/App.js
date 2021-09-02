import Artist from "./components/artist/Artist";
import Album from "./components/album/Album";
import Tweets from './components/Tweets/Tweets';
import Card from "./components/UI/Card";


function App() {
  return (
    <Card>
      <Artist />
      <Album/>
      <Tweets/>
    </Card>
  );
}

export default App;
