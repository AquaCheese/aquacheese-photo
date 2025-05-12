require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

const PORT = 3000; // You can change this port if needed

// Proxy route for Google API
app.get('/api/google', async (req, res) => {
    const { query } = req.query; // Example query parameter
    const apiKey = process.env.GOOGLE_API_KEY;

    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/someEndpoint`, {
            params: {
                key: apiKey,
                query: query,
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from Google API:', error.message);
        res.status(500).send('Error fetching data from Google API');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});