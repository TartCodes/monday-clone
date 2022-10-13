const PORT = 8000;
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

const url =
  "https://3dc22a4b-f11d-46e2-991e-831c6b54643b-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks";
const token =
  "AstraCS:XZLiqiZnxAZTEfvhdMditINu:96b9751058c68ee01ee3ed2ed39f19e4c059d44d6c3c7f921522856b21313eee";

//get all tickets
app.get("/tickets", async (req, res) => {
  const options = {
    method: "GET",
    headers: {
      Accepts: "application/json",
      "X-Cassandra-Token": token,
    },
  };
  try {
    const response = await axios(`${url}?page-size=20`, options);
    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

//get ONE ticket
app.get("/tickets/:documentId", async (req, res) =>{
    const id = req.params.documentId   

    const options = {
        method: 'GET',
        headers: {
            Accepts: "application/json",
            "X-Cassandra-Token": token
        }        
    }
    try {
        const response = await axios(`${url}/${id}`, options);
        res.status(200).json(response.data);
      } catch (err) {
        console.log(err);
        res.status(500).json({ message: err });
      }
})

//post
app.post("/tickets", async (req, res) => {
  const formData = req.body.formData;

  const options = {
    method: "POST",
    headers: {
      Accepts: "application/json",
      "X-Cassandra-Token": token,
      "Content-Type": "application/json",
    },
    data: formData,
  };
  try {
    const response = await axios(url, options);
    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

//put
app.put("/tickets/:documentId", async (req, res) =>{
    const id = req.params.documentId
    const data = req.body.data

    const options = {
        method: 'PUT',
        headers: {
            Accepts: "application/json",
            "X-Cassandra-Token": token
        },
        data
    }
    try {
        const response = await axios(`${url}/${id}`, options);
        res.status(200).json(response.data);
      } catch (err) {
        console.log(err);
        res.status(500).json({ message: err });
      }
})





//delete
app.delete("/tickets/:documentId", async (req, res) => {
  const id = req.params.documentId;

  const options = {
    method: "DELETE",
    headers: {
      Accepts: "application/json",
      "X-Cassandra-Token": token,
    },
  };
  try {
    const response = await axios(`${url}/${id}`, options);
    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

app.listen(PORT, () => console.log("server is running on PORT " + PORT));
