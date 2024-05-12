// Declarer que c'est un module ESM
import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 3000;


app.use(express.static('frontend'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  
app.post('/generateQuiz', async (req, res) => {
    const { rubrique } = req.body;

    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer VOTRE_CLE_API'
        },
        body: JSON.stringify({
            model: 'text-davinci-003',
            prompt: `Générer des questions sur ${rubrique}`,
            max_tokens: 150
        })
    });

    const data = await response.json();
    const questions = data.choices.map(choice => choice.text.trim());

    res.json({ questions });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

