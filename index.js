// //function to take a string and count vowels and return count


// const express = require('express');
// const app = express()
// app.use(express.json());
// const vowels = ['a','e','i','o','u']

// let countVowel = (string) => {
//     string = string.toLowerCase();
//     count = 0;
//     for(let i=0; i< string.length;i++) {
//         if( vowels.includes(string[i])) count+=1;

//     }
//     return count;
// }

// app.get('/countvowels', (req, res) => {
//     let string = req.body.str;
//     let vowels= countVowel(string);
//     res.send({"vowels": vowels});
// })

// //port + ip => socket
// const port = 3001
// const ip = "localhost";

// app.listen(port, ip, () => {
//     console.log("Started Listening")
// })

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
// Addition
app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    const result = num1 + num2;
    res.json({ result });
  });
  
  // Subtraction
  app.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body;
    const result = num1 - num2;
    res.json({ result });
  });
  
  // Multiplication
  app.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body;
    const result = num1 * num2;
    res.json({ result });
  });
  
  // Division
  app.post('/divide', (req, res) => {
    const { num1, num2 } = req.body;
    const result = num1 / num2;
    res.json({ result });
  });
  app.listen(port, () => {
    console.log(`Calculator API is running on port ${port}`);
  });
  