const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json())

app.get('/', (req, res)=> {
  res.json({message: "this is a JSON object"})
})

app.post('/send', async (req, res) =>{

  const formData = req.body;
  console.log(formData);
  
  res.status(200).send(formData);
  
  
  try{
}catch(e){console.log(e);}
});

const messageRouter = require('./Routes/contact');
app.use('/send', messageRouter);



app.listen(port, ()=>{
  console.log(`App listening on PORT:${port}`);
});