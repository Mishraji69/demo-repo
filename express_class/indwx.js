const express = require("express");
const app = express();
app.use(express.json()); 

const users = [{
    name: "John Alia",
    kidneys: [{
        healthy: false
    }]
}];


app.get("/", function(req, res) {
    const johnKidneys = users[0].kidneys;
    const numberOfkidneys = johnKidneys.length;
    let numberOfhealthykidneys = 0;
    
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberOfhealthykidneys++;
        }
    }
    
    const numberOfUnhealthykidneys = numberOfkidneys - numberOfhealthykidneys;
    res.json({
        numberOfkidneys,
        numberOfhealthykidneys,
        numberOfUnhealthykidneys
    });
});

app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy; 
    users[0].kidneys.push({
        healthy: isHealthy
    });
    
    res.json({
        msg: "DONE!"
    });
});

app.listen(3001, () => {
    console.log("Server running on port 3000");
});
