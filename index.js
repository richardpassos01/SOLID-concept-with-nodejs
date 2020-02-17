const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const PORT = 3000;

app.use(bodyParser.json({ limit: '10mb' }));

fs.readdirSync('./routers').forEach(function(file) {
    require(`./routers/${file}`)(app);
});

app.listen(PORT, () => console.log(`listening on PORT ${ PORT }`));

module.exports = app;