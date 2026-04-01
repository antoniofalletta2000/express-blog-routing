const express= require("express")
const router=express.Router()


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

router.get("/", (req, res) => {
    res.json(posts)
})
//show
router.get("/:id", (req,res)=>{
    const post= posts.find(post=>post.id===parseInt(req.params.id))
    if(post){
        res.json(post)
    }else{
        res.status(404).json({message:"Post not found"})
    }
})
//store
router.post("/", (req,res)=>{
    res.send(`Create a new post`)
})
//update
router.put("/:id", (req,res)=>{
    res.send(`Udapte post with id ${req.params.id}`)
})
//modify
router.patch("/:id", (req,res)=>{
    res.send(`Udapte post with id ${req.params.id}`)
})
//destroy
router.delete("/:id", (req,res)=>{
    res.send(`Delete a post with id ${req.params.id}`)
})

module.exports= router