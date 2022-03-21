const express = require('express');
const ejs = require('ejs');
const multer = require('multer');

const app = express();

app.set('view engine', 'ejs');

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) =>
    {
        cb(null, './images')
    },
    filename: (req, file, cb) =>
    {
        cb(null, file.originalname);
    }
});
app.use(multer({storage:fileStorage}).single('image'));

app.get('/', (req, res) =>{
    res.render('home')
});

app.post('/', (req, res) =>{
    const image = req.file;
    console.log(image);
})

app.listen(3000, console.log('Listening'));