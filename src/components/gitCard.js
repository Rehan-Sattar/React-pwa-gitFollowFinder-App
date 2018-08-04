import React from "react";

const GitCard = (props) => (

    <div className="col-md-3 m-3">
      <div className="card">
          <img className="card-img-top" src={props.details.avatar_url} />
          <div className="card-body">
            <h3>name: {props.details.login}</h3>
          </div>
      </div>
    </div>
  )
export default GitCard;

{/*
[
  {
      "login": "Rehan-Sattar",

      "avatar_url": "https://avatars1.githubusercontent.com/u/26999472?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Rehan-Sattar",
      "html_url": "https://github.com/Rehan-Sattar",
      "followers_url": "https://api.github.com/users/Rehan-Sattar/followers",
      "following_url": "https://api.github.com/users/Rehan-Sattar/following{/other_user}",
      "gists_url": "https://api.github.com/users/Rehan-Sattar/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/Rehan-Sattar/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/Rehan-Sattar/subscriptions",
      "organizations_url": "https://api.github.com/users/Rehan-Sattar/orgs",
      "repos_url": "https://api.github.com/users/Rehan-Sattar/repos",
      "events_url": "https://api.github.com/users/Rehan-Sattar/events{/privacy}",
      "received_events_url": "https://api.github.com/users/Rehan-Sattar/received_events",
      "type": "User",
      "site_admin": false
    }

]
*/}
