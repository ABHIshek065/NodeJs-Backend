require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000


const githubData = {
    "login": "ABHIshek065",
    "id": 98528020,
    "node_id": "U_kgDOBd9rFA",
    "avatar_url": "https://avatars.githubusercontent.com/u/98528020?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ABHIshek065",
    "html_url": "https://github.com/ABHIshek065",
    "followers_url": "https://api.github.com/users/ABHIshek065/followers",
    "following_url": "https://api.github.com/users/ABHIshek065/following{/other_user}",
    "gists_url": "https://api.github.com/users/ABHIshek065/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ABHIshek065/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ABHIshek065/subscriptions",
    "organizations_url": "https://api.github.com/users/ABHIshek065/orgs",
    "repos_url": "https://api.github.com/users/ABHIshek065/repos",
    "events_url": "https://api.github.com/users/ABHIshek065/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ABHIshek065/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Abhishek Patel",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "\"Skilled Frontend Developer Passionate About Pushing the Boundaries of Web Design and Development to Deliver Exceptional Results\"",
    "twitter_username": null,
    "public_repos": 53,
    "public_gists": 0,
    "followers": 1,
    "following": 2,
    "created_at": "2022-01-27T11:49:08Z",
    "updated_at": "2024-01-01T14:03:50Z"
  }


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req,res) =>{
    res.send('abhishekdotcom')
}) 


app.get('/login', (req,res) =>{
    res.send('<h1>please login at chai aur code <h1/>')
}) 


app.get('/youtube', (req,res) =>{
    res.send('<h2> channel chai aur code <h2/>')
})

app.get('/github', (req,res) =>{
    res.json(githubData)
})  



app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
