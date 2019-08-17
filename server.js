const scraper = require('./scraper');
const express = require('express');
const Promise = require('bluebird');
const app = express();

const { search, processData } = scraper;

app.get('/api/ddg', 
  async function (req, res) {
    return Promise.resolve()
      .then(() => search(req.query.q))
      .then(data => res.status(200).json(processData(data)))
      .catch(error => console.log('Something went wrong in API: ', error.error))
  }
)

const port = 5000;
app.listen(port, () => console.log(`Server started on port: ${port}`));
