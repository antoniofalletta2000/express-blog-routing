const express = require('express')
const app = express()
const port = 3000


app.use(express.static("public"))

const posts = [
  {
    id: 1,
    title: 'Primo post',
    content: 'Contenuto del primo post del mio blog.',
    image: 'http://localhost:3000/images/1.svg',
    tags: ['intro', 'welcome']
  },
  {
    id: 2,
    title: 'Secondo post',
    content: 'Contenuto del secondo post con qualche dettaglio.',
    image: 'http://localhost:3000/images/2.svg',
    tags: ['node', 'express']
  },
  {
    id: 3,
    title: 'Terzo post',
    content: 'Un breve post di esempio per la bacheca.',
    image: 'http://localhost:3000/images/3.svg',
    tags: ['example', 'blog']
  },
  {
    id: 4,
    title: 'Quarto post',
    content: 'Altro contenuto dimostrativo.',
    image: 'http://localhost:3000/images/4.svg',
    tags: ['tutorial', 'express']
  },
  {
    id: 5,
    title: 'Quinto post',
    content: 'Ultimo post della lista di esempio.',
    image: 'http://localhost:3000/images/5.svg',
    tags: ['wrapup', 'notes']
  }
];

app.get('/posts', (req, res) => {
    res.json(posts)
})
//show
app.get("/posts/:id", (req,res)=>{
    res.send(`Udapte post with id ${req.params.id}`)
})
//store
app.post("/posts", (req,res)=>{
    res.send(`Create a new post`)
})
//update
app.put("/posts/:id", (req,res)=>{
    res.send(`Udapte post with id ${req.params.id}`)
})
//modify
app.patch("/posts/:id", (req,res)=>{
    res.send(`Udapte post with id ${req.params.id}`)
})
//destroy
app.delete("/posts/:id", (req,res)=>{
    res.send(`Delete a post with id ${req.params.id}`)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
