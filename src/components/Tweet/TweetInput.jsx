function TweetInput({ tweetText, setTweetText }) {
  return (
    <input
      type="text"
      value={tweetText}
      onChange={(e) => setTweetText(e.target.value)}
    />
  );
}

export default TweetInput;
