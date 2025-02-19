/*import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser'
import UserModel from './models/Schema.js'; 





const app = express();
app.use(express.json());
app.use(bodyParser())

mongoose.connect('mongodb://localhost:27017/Lend-a-hand').then(() => console.log('connected'));

const dummyData = [
  {
    taskID:1,
    taskDescription:'moving houses',
    taskScoper:'compicated',
    address:'102 abc',

  }
]


const PORT = 3000;
app.get('/', (req, res)=>{
    res.send(`running on port ${PORT}`)
    console.log(req.body)

})

app.post('/users', (req, res) =>{
    const saveUser = new UserModel({
      bookingId:new mongoose.Types.ObjectId(), 
      taskDescription:'moving houses',
      taskScope:'compicated',
      address:'102 abc',
      dateAndTime:new Date(),
      additionalNotes:'Extra notes'
    })

    console.log(saveUser);

    try{
      saveUser.save();
      console.log('user has been saved', saveUser)
    }catch(error){
      console.log(error)
    }
    console.log('end point is working'),
    res.send('Done')

})

  app.listen(PORT ,() =>{
    console.log(PORT)
  });

 */

  import express from "express";
import mongoose from "mongoose";
import UserModel from './models/Schema.js'; 
import cors from 'cors'
import bodyParser from 'body-parser'

import nodemailer from 'nodemailer'



const app = express();
app.use(express.json()); // Use express.json() to parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/Lend-a-hand')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

const PORT = 3000;
app.use(cors())

app.get('/', (req, res) => {
    res.send(`Running on port ${PORT}`);
});

app.post('/user', (req, res)=>{

})

app.post('/booking', async (req, res) => {

    const task_Description = req.body.taskDescription
    const task_Scope = req.body.taskDescription
    const Address = req.body.address
    const additional_Notes=req.body.additionalNotes

    const saveUser = new UserModel({
        bookingId: new mongoose.Types.ObjectId(), 
        taskDescription: task_Description,
        taskScope: task_Scope,
        address:Address,
        dateAndTime: new Date(),
        additionalNotes: additional_Notes,
    });

    console.log('User to save:', saveUser);

    try {
        const savedUser = await saveUser.save(); 
        console.log('User has been saved:', savedUser);
        res.status(201).json(savedUser); 
    } catch (error) {
        console.error('Error saving user:', error.message);
        res.status(500).send('Internal Server Error'); 
    }
});

app.post('/emailConfirmation', async (req,res) =>{

res.send('Working')

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "brycen4@ethereal.email",
    pass: "	vuxHdQVFmrAvKbYF5X",
  },
});

// async..await is not allowed in global scope, must use a wrapper

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Lend a hand👻" <brycen4@ethereal.email>', // sender address
    to: "mdongotamilika45@gmail.com, tamilikamdongo45@gmail.com", // list of receivers
    subject: "Testing", // Subject line
    text: "Yep this works", // plain text body
   
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>


main().catch(console.error);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
