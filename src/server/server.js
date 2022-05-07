const fs = require("fs");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;

const URL_STATS = "./src/server/log/stats.json";
const URL_DB = "./src/server/db/";

const calculate = (cart) => {
  cart.countGoods = cart.contents.length;
  cart.amount = 0;
  cart.contents.forEach((element) => {
    cart.amount += element.price * element.quantity;
  });
};

const addStatisticsToLog = (message, action, product) => {
  let now = new Date();
  fs.readFile(URL_STATS, "utf-8", (err, data) => {
    if (err) console.log("Error:", err);
    else {
      if (data) {
        let log = JSON.parse(data);
        log.push({
          date: now,
          action: action,
          product: product,
          log: message,
        });
        fs.writeFile(URL_STATS, JSON.stringify(log, null, 2), (err) => {
          if (err) console.log("Error:", err);
          else return;
        });
      }
    }
  });
};

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`\u{1F363} Hi! Server is listening on port ${port}`);
});

app.get("/api/products", (req, res) => {
  fs.readFile(URL_DB + "products.json", "utf-8", (err, data) => {
    if (err) res.send(JSON.stringify({ result: 0, err }));
    else res.send(data);
  });

  addStatisticsToLog(
    "GET request was made to /api/products",
    "received",
    "products list"
  );
});

app.get("/api/cart", (req, res) => {
  fs.readFile(URL_DB + "userCart.json", "utf-8", (err, data) => {
    if (err) res.send(JSON.stringify({ result: 0, err }));
    else res.send(data);
  });

  addStatisticsToLog(
    "GET request was made to /api/cart",
    "received",
    "cart list"
  );
});

app.post("/api/cart", (req, res) => {
  fs.readFile(URL_DB + "userCart.json", "utf-8", (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, err }));
      console.log("err:", err);
    } else {
      const cart = JSON.parse(data);
      cart.contents.push(req.body);

      calculate(cart);

      fs.writeFile(
        URL_DB + "userCart.json",
        JSON.stringify(cart, null, 2),
        (err) => {
          if (err) res.end(JSON.stringify({ result: 0, err }));
          else res.end(JSON.stringify({ result: 1 }));
        }
      );
    }
  });

  addStatisticsToLog(
    "POST request was made to /api/cart",
    "added",
    req.body.product_name
  );
});

app.put("/api/cart/:id", (req, res) => {
  fs.readFile(URL_DB + "userCart.json", "utf-8", (err, data) => {
    if (err) res.send(JSON.stringify({ result: 0, err }));
    else {
      const cart = JSON.parse(data);
      const find = cart.contents.find(
        (good) => good.id_product === Number(req.params.id)
      );
      find.quantity += req.body.quantity;

      calculate(cart);

      fs.writeFile(
        URL_DB + "userCart.json",
        JSON.stringify(cart, null, 2),
        (err) => {
          if (err) res.end(JSON.stringify({ result: 0, err }));
          else res.end(JSON.stringify({ result: 1 }));
        }
      );

      addStatisticsToLog(
        "PUT request was made to /api/cart/" + find.id_product,
        "added",
        find.product_name
      );
    }
  });
});

app.patch("/api/cart/path", (req, res) => {
  let cart = req.body.data.cart;
  fs.writeFile(
    URL_DB + "userCart.json",
    JSON.stringify(cart, null, 2),
    (err) => {
      if (err) res.end(JSON.stringify({ result: 0, err }));
      else res.end(JSON.stringify({ result: 1 }));
    }
  );
});

app.delete("/api/cart/delete/:id", (req, res) => {
  res.end(JSON.stringify({ result: 1 }));
  fs.readFile(URL_DB + "userCart.json", "utf-8", (err, data) => {
    if (err) res.send(JSON.stringify({ result: 0, err }));
    else {
      const cart = JSON.parse(data);
      const find = cart.contents.find(
        (good) => good.id_product === Number(req.params.id)
      );

      if (req.body.flag === "all") {
        cart.contents.splice(cart.contents.indexOf(find), 1);
      } else {
        if (find.quantity > 1) find.quantity--;
        else cart.contents.splice(cart.contents.indexOf(find), 1);
      }

      calculate(cart);

      fs.writeFile(
        URL_DB + "userCart.json",
        JSON.stringify(cart, null, 2),
        (err) => {
          if (err) res.end(JSON.stringify({ result: 0, err }));
          else res.end(JSON.stringify({ result: 1 }));
        }
      );

      addStatisticsToLog(
        "DELETE request was made to /api/cart/delete/" + req.params.id,
        "deleted",
        find.product_name
      );
    }
  });
});

app.get("*", (req, res) => {
  res.send(`\u{26A0} Unknown API Request`);
});

// listen on the port
app.listen(port);
