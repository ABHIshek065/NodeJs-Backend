import express from "express";

const app = express()

// app.get('/',(req,res)=>{
//     res.send('Server is ready')
// })

// get a list of 5 Jokes

app.get('/api/jokes', (req, res) => {
        const jokes = [
            {
                id:1,
                title: 'A joke',
                content: 'This is a joke'
            },
            {
                id:2,
                title:  'Another Joke',
                content:'This is another joke.'
            },
            {
                id:3,
                title: 'Why did the scarecrow win an award?',
                content:"Because he was outstanding in his field."
            },
            {
                id:4,
                title: 'What do you call a fake noodle?',
                content: "An impasta."
            },
            {
                id:5,
                title: 'Why did the bicycle fall over?',
                content: 'Because it was two-tired.'
            }

        ]
        res.send(jokes);
    })

const port = process.env.PORT || 5000;

app.listen(port , ()=> console.log(`server started on ${port}`))