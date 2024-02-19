const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

let messages = [
    {
        from: "Rafael",
        to: "Claudio",
        content: "Oi Claudio, tudo bem?",
        dateInMs: 12214124
    },
    {
        from: "Claudio",
        to: "Rafael",
        content: "Oi Rafael, estou bem, obrigado. E você?",
        dateInMs: 12215124
    },
    {
        from: "Lucas",
        to: "Maria",
        content: "Oi Maria, como você está?",
        dateInMs: 12216124
    },
    {
        from: "Maria",
        to: "Lucas",
        content: "Oi Lucas, estou ótima, obrigada. E você?",
        dateInMs: 12217124
    },
    {
        from: "Pedro",
        to: "Ana",
        content: "Oi Ana, vamos sair hoje à noite?",
        dateInMs: 12218124
    },
    {
        from: "Ana",
        to: "Pedro",
        content: "Oi Pedro, claro! Onde você quer ir?",
        dateInMs: 12219124
    },
    {
        from: "Rafael",
        to: "Lucas",
        content: "Oi Lucas, quer jogar futebol neste fim de semana?",
        dateInMs: 12220124
    },
    {
        from: "Lucas",
        to: "Rafael",
        content: "Claro Rafael, onde e que horas?",
        dateInMs: 12221124
    },
    {
        from: "Maria",
        to: "Ana",
        content: "Oi Ana, você quer ir ao cinema hoje à noite?",
        dateInMs: 12222124
    },
    {
        from: "Ana",
        to: "Maria",
        content: "Maria, seria ótimo! Que filme você gostaria de ver?",
        dateInMs: 12223124
    },
    // Adding more messages...
    {
        from: "Pedro",
        to: "Lucas",
        content: "Ei Lucas, tem algum plano para o próximo sábado à noite?",
        dateInMs: 12224124
    },
    {
        from: "Lucas",
        to: "Pedro",
        content: "Pedro, estou pensando em assistir a um jogo de futebol. Você gostaria de ir comigo?",
        dateInMs: 12225124
    },
    {
        from: "Claudio",
        to: "Maria",
        content: "Maria, você já decidiu sobre as férias de verão deste ano?",
        dateInMs: 12226124
    },
    {
        from: "Maria",
        to: "Claudio",
        content: "Ainda não, Claudio. Estou pensando em algumas opções. Você tem alguma sugestão?",
        dateInMs: 12227124
    },
    {
        from: "Ana",
        to: "Lucas",
        content: "Oi Lucas, você pode me ajudar com um problema de matemática?",
        dateInMs: 12228124
    },
    {
        from: "Lucas",
        to: "Ana",
        content: "Claro Ana, estou aqui para ajudar. O que você precisa saber?",
        dateInMs: 12229124
    },
    {
        from: "Rafael",
        to: "Maria",
        content: "Maria, você gostaria de ir ao parque no próximo domingo?",
        dateInMs: 12230124
    },
    {
        from: "Maria",
        to: "Rafael",
        content: "Rafael, isso soa como um ótimo plano! Estou dentro.",
        dateInMs: 12231124
    },
    {
        from: "Pedro",
        to: "Claudio",
        content: "Claudio, você pode me emprestar seu livro de física?",
        dateInMs: 12232124
    },
    {
        from: "Claudio",
        to: "Pedro",
        content: "Claro Pedro, eu vou trazer para você amanhã.",
        dateInMs: 12233124
    },
    {
        from: "Lucas",
        to: "Ana",
        content: "Ana, você já ouviu falar sobre o novo restaurante italiano na cidade?",
        dateInMs: 12234124
    },
    {
        from: "Ana",
        to: "Lucas",
        content: "Lucas, sim! Eu ouvi falar. Quero experimentar. Podemos ir lá juntos?",
        dateInMs: 12235124
    },
    {
        from: "Beatriz",
        to: "ChatGPT",
        content: "Como faço uma app de Chat com backend?",
        dateInMs: 12234124
    },
    {
        from: "ChatGPT",
        to: "Beatriz",
        content: "Estudasses",
        dateInMs: 12235124
    }
];



app.use(bodyParser.json());

app.get("/api/messages/:user", (req, res) => {
  res.json({ messages });
});

app.post("/api/messages/:user", (req, res) => {
    
  const { from, to, content, dateInMs } = req.body;

  const newMessage = {
    from,
    to,
    content,
    dateInMs,
  };

  messages.push(newMessage);

  // Assuming you want to return the updated messages
  res.json({ messages });
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});