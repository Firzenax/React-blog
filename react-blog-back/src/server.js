import express from 'express';
import { db, connectToDb } from './db.js';

const app = express();
app.use(express.json());

app.get('/api/articles', async (req,res) =>{
    const articles = await db.collection('articles').find().toArray();

    if(articles){
        res.json(articles)
    }
    else{
        res.sendStatus(404)
    }
})

// ? str = str.replace(/ +/g, ""); Remove all the whitespace from a string "str"
// ? str = str.replace(/ +/g, "-"); Remove all the whitespace from a string "str" and replace them with -

app.post('/api/articles/AddNewArticle', async (req,res) =>{
    const { articleName , articleContent} = req.body

    const newArticleName = articleName.replace(/ +/g,"-")

    await db.collection('articles').insertOne({
        articleName:newArticleName ,
        articleAuthor: "Mike",
        articleDetails: {
            articleContent: articleContent,
            articleUpvote: 0,
            articleComments: []
        }
    })

    const articles = await db.collection('articles').find().toArray();

    if(articles){
        res.json(articles)
    }
    else{
        res.sendStatus(404)
    }
})

app.get('/api/articles/:articleName', async (req, res) => {
    const { articleName } = req.params;

    const article = await db.collection('articles').findOne({ articleName });

    if (article) {
        res.json(article);
    } else {
        res.sendStatus(404);
    }
});

app.put('/api/articles/:name/upvote', async (req, res) => {
    const { name } = req.params;
   
    await db.collection('articles').updateOne({ name }, {
        $inc: { upvotes: 1 },
    });
    const article = await db.collection('articles').findOne({ name });

    if (article) {
        res.send(`The ${name} article now has ${article.upvotes} upvotes!!!`);
    } else {
        res.send('That article doesn\'t exist');
    }
});

app.post('/api/articles/:name/comments', async (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;

    await db.collection('articles').updateOne({ name }, {
        $push: { comments: { postedBy, text } },
    });
    const article = await db.collection('articles').findOne({ name });

    if (article) {
        res.send(article.comments);
    } else {
        res.send('That article doesn\'t exist!');
    }
});

connectToDb(() => {
    console.log('Successfully connected to database!');
    app.listen(8000, () => {
        console.log('Server is listening on port 8000');
    });
})
