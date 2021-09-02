import TweetForm from "./TweetForm";

const Photos = () => {
  async function addTweetHandler(tweetData) {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments",
      {
        method: "POST",
        body: JSON.stringify(tweetData),
        headers: { "Content-Type": "applications/json" },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <div>
      <TweetForm onTweet={addTweetHandler} />
    </div>
  );
};

export default Photos;
