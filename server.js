const express = require("express")
const app = express()

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded())
app.use("/library", express.static("public"))
app.listen(8006)

app.get("/library", (req, res) => {
    res.render('index')
})