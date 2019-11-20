const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: '*' }));

let port = process.env.PORT || 3000;
app.listen(port);

app.get('/getFile/:id', (req, res) => {
  let image = req.params.id.toString();
  res.sendFile(__dirname + '/images/' + image + '.jpg');
});
