const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();


const TOKEN = process.env.CANVAS_API;

app.get("/getCourses", async (req, res) => {
    axios
        .get(
            `https://canvas.ucsd.edu/api/v1/courses?access_token=${TOKEN}&enrollment_state=active`
        )
        .then((response) => {
            res.send(response.data);
        })
        .catch((err) => console.log(err));
});

app.get("/:courseId/getAssignments", async (req, res) => {
    const courseId = req.params.courseId;

    axios
        .get(
            `https://canvas.ucsd.edu/api/v1/courses/${courseId}/assignments?access_token=${TOKEN}`
        )
        .then((response) => {
            res.send(response.data);
        })
        .catch((err) => console.log(err));
});

app.get("/:userId/getGrades/:courseId", async (req, res) => {
    const userId = req.params.userId;
    const courseId = parseInt(req.params.courseId);

    let grade;
    axios
        .get(
            `https://canvas.ucsd.edu/api/v1/users/${userId}/enrollments?access_token=${TOKEN}&enrollment_state=active`
        )
        .then((response) => {
            for (data of response.data) {
                if (data.course_id === courseId) {
                    grade = data.grades.current_score;
                    res.send(grade.toString());
                }
            }
        })
        .catch((err) => console.log(err));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
const dbUrl = process.env.DB_URL;

const mongoose = require("mongoose");
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "connection error:"));
connection.once("open", () => {
    console.log("Database connected");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
