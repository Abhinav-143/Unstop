const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB URI
const uri = "mongodb+srv://abhiabhilash4278:1238@cluster0.qjgxi.mongodb.net/?retryWrites=true&w=majority";

// Create MongoDB Client
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// API endpoint
app.post('/api/applications', async (req, res) => {
  console.log("Received request with data:", req.body);

  try {
    // Connect to MongoDB
    await client.connect();

    // Access database and collection
    const db = client.db('Application');
    const applicationsCollection = db.collection('app');

    // Extract data from request
    const { name, phone, email, statement } = req.body;

    // Insert application into MongoDB
    const newApplication = { name, phone, email, statement, createdAt: new Date() };
    const result = await applicationsCollection.insertOne(newApplication);

    console.log("Application saved successfully:", result);
    res.status(201).json({ message: 'Application submitted successfully!' });
  } catch (error) {
    console.error("Error saving application:", error.message);
    res.status(500).json({ message: 'Error submitting application', error: error.message });
  } finally {
    // Close MongoDB connection after each request
    await client.close();
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
