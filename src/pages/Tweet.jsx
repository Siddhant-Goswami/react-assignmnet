import { useState } from "react";
import TweetInput from "../components/Tweet/TweetInput";

function Tweet() {
  const [tweets, setTweets] = useState([]);
  const [tweetText, setTweetText] = useState("");

  const handleTweet = () => {
    const newTweetObj = {
      text: tweetText,
      id: tweets.length + 1,
      likes: 0,
      retweets: 0,
    };
    setTweets([...tweets, newTweetObj]);
    setTweetText("");
  };

  const handleLike = (tweetId) => {
    const updatedTweets = tweets.map((tweet) => {
      if (tweet.id === tweetId) {
        return { ...tweet, likes: tweet.likes + 1 };
      }
      return tweet;
    });
    setTweets(updatedTweets);
  };

  const handleRetweet = (tweetId) => {
    const updatedTweets = tweets.map((tweet) => {
      if (tweet.id === tweetId) {
        return { ...tweet, retweets: tweet.retweets + 1 };
      }
      return tweet;
    });
    setTweets(updatedTweets);
  };

  return (
    <div>
      <TweetInput tweetText={tweetText} setTweetText={setTweetText} />
      <button onClick={handleTweet}>Tweet</button>
      {tweets.map((tweet) => {
        return (
          <div key={tweet.id}>
            <div>{tweet.text}</div>
            <button onClick={() => handleLike(tweet.id)}>
              Like {tweet.likes}
            </button>
            <button onClick={() => handleRetweet(tweet.id)}>
              Retweet {tweet.retweets}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Tweet;
