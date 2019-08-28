var title = "THIS IS TWEETER!";

class Username extends React.Component {
    render() {
        return (
          <h1>{this.props.user}</h1>
        );
    }
}

class Navbar extends React.Component {
    render() {
        return (
          <ul>
            <li><a href="#">Tweets</a></li>
            <li><a href="#">Tweets&Replies</a></li>
            <li><a href="#">Media</a></li>
            <li><a href="#">Likes</a></li>
          </ul>
        );
    }
}


class TweetsList extends React.Component {
    render() {
        // console.log("inside of component:", this.props.fruits );
        let tweetsElements = this.props.tweet.map( (tweet) => {
                  return <ListTweet tweetText={tweet.text} tweetId={tweet.id} fullName={tweet.user.name} retweetCount={tweet.retweet_count} favCount={tweet.favorite_count} screenName={tweet.user.screen_name} profilePic={tweet.user.profile_image_url} url={tweet.entities.urls.url} createTime={tweet.created_at}></ListTweet>;
                });

        return (
          <ul>
            {tweetsElements}
          </ul>
        );
    }
}

class ListTweet extends React.Component {
    render() {
        return (


        <div class="tweetEntry">

              <div class="tweetEntry-content">

                <a class="tweetEntry-account-group" href={this.props.url}>

                  <img class="tweetEntry-avatar" src={this.props.profilePic}/>

                  <strong class="tweetEntry-fullname">
                  {this.props.fullName}
                  </strong>

                  <span class="tweetEntry-username">
                    @<b>{this.props.screenName}</b>
                  </span>

                  <span class="tweetEntry-timestamp">- {this.props.createTime}</span>

                </a>

                <div class="tweetEntry-text-container">
                  {this.props.tweetText}
                </div>

              </div>



              <div class="tweetEntry-action-list">
                <i class="fa fa-comment-o"></i>
                <i class="fa fa-retweet">{Math.round(this.props.retweetCount/1000) + "k"}</i>
                <i class="fa fa-heart" >{Math.round(this.props.favCount/1000) + "k"}</i>
              </div>

            </div>

        );
    }
}

// class TEST extends React.Component {
//     render() {
//         return (

//         );
//     }
// }









ReactDOM.render(
    <div>
      {title}
      <Username user={tweets[0].user.name}/>
      <Navbar/>

      <TweetsList tweet={tweets}/>



    </div>,
    document.getElementById('root')
);


















// ReactDOM.render(
//     <div>
//       {monkey}
//     </div>,
//     document.getElementById('root')
// );