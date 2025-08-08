require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT   || 3000

const github =
    {
  "login": "SachJaiswal",
  "id": 101462110,
  "node_id": "U_kgDOBgwwXg",
  "avatar_url": "https://avatars.githubusercontent.com/u/101462110?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/SachJaiswal",
  "html_url": "https://github.com/SachJaiswal",
  "followers_url": "https://api.github.com/users/SachJaiswal/followers",
  "following_url": "https://api.github.com/users/SachJaiswal/following{/other_user}",
  "gists_url": "https://api.github.com/users/SachJaiswal/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/SachJaiswal/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/SachJaiswal/subscriptions",
  "organizations_url": "https://api.github.com/users/SachJaiswal/orgs",
  "repos_url": "https://api.github.com/users/SachJaiswal/repos",
  "events_url": "https://api.github.com/users/SachJaiswal/events{/privacy}",
  "received_events_url": "https://api.github.com/users/SachJaiswal/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Sachin Jaiswal",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 25,
  "public_gists": 0,
  "followers": 1,
  "following": 0,
  "created_at": "2022-03-12T13:24:54Z",
  "updated_at": "2025-07-30T03:28:59Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Hello About!')
})

app.get('/github', (req, res) => {
  res.json(github)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
