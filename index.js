import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://api.adviceslip.com/advice")
        res.render("index.ejs", { advi: result.data.slip.advice, });
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }   
});
router.get("/", forwardAuthenticated, (req, res) => res.render("index.html")); 

app.listen(port, () => {
    console.log(`Server Running on port ${port}.`)
})