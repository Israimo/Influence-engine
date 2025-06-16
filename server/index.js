const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Sample route (replace with real logic later)
app.get("/api/dashboard", (req, res) => {
  res.json({
    stats: {
      totalFollowers: 12450,
      engagementRate: "4.3%",
      scheduledPosts: 24,
    },
    settings: {
      stealthMode: false,
    },
    activities: [],
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
        
