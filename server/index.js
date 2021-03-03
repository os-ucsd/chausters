const express = require("express");
const axios = require("axios");

const app = express();

const TOKEN =
    "13171~G4mR2rRs5D3lcWb83MIm0mxf2B0sy3NRQUi8wgUlnWKisJtGh7YrMGuR3w6uepHH";

app.get("/getCourses", async (req, res) => {
    axios
        .get(
            `https://canvas.ucsd.edu/api/v1/courses?access_token=${TOKEN}&enrollment_state=active`
        )
        .then((response) => {
            res.send(response.data);
            // console.log(response);
        })
        .catch((err) => console.log(err));
});

app.get("/:courseId/getAssignments", async (req, res) => {
    const courseId = req.params.courseId;
    console.log(courseId);

    axios
        .get(
            `https://canvas.ucsd.edu/api/v1/courses/${courseId}/assignments?access_token=${TOKEN}`
        )
        .then((response) => {
            res.send(response.data);
            console.log(response);
        })
        .catch((err) => console.log(err));
});

app.get("/:userId/getGrades/:courseId", async (req, res) => {
    const userId = req.params.userId;

    axios
        .get(
            `https://canvas.ucsd.edu/api/v1/users/${userId}/enrollments?access_token=${TOKEN}&enrollment_state=active`
        )
        .then((response) => {
            res.send(response.data);
            console.log(response);
        })
        .catch((err) => console.log(err));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
