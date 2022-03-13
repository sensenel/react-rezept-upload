const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload());

//Upload Endpoint 
app.post('/images', (req, res) => {
    if(req.files === null) {
        return res.status(400).json( { msg: 'Kein File hochgeladen'});
    }

    const file = req.files.file;

    file.mv(`${__dirname}/client/public/images/${file.name}`, err => {
        if(err) {
            console.log(err);
            return res.status(500).send(err);
        }

        res.json( { fileName: file.name, filePath: `/images/${file.name}`});

    });
});

app.listen(5000, () => console.log('Server gestartet! '));