const express = require("express");
const fs = require("fs");

const app = express();

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/update", (req, res) => {
  const filenames = {
    player1: 'life p1',
    player2: 'life p2'
  };
  if (filenames[req.query.what]) {
    fs.writeFile(`./files/${filenames[req.query.what]}`, req.query.to, { flag: 'w+' }, () => {
      console.log(`updated life on stream for ${req.query.what} to ${req.query.to}`);
    });
  }
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});