// Converts a single grade to its GPA point equivalent
function convertGradeToPoints(grade) {
    const gradePoints = {
        A: 4.0,
        B: 3.0,
        C: 2.0,
        D: 1.0,
        F: 0.0
        // You can add more grade mappings here, like A-, B+, etc.
    };
    return gradePoints[grade] !== undefined ? gradePoints[grade] : null;
}

// Calculates the GPA from an array of grade points
function calculateGpa(gpaPoints) {
    if (gpaPoints.length === 0) return "N/A";
    const total = gpaPoints.reduce((sum, pt) => sum + pt, 0);
    return (total / gpaPoints.length).toFixed(2);
}

// Gets and cleans the grades from the input element
function getGrades() {
    const gradesEl = document.querySelector("#grades");
    let grades = gradesEl.value.split(",");
    grades = grades.map((grade) => grade.trim().toUpperCase());
    return grades;
}

// Handles the button click event, calculates GPA, and outputs result
function calculateHandler(event) {
    // Get the grades
    const grades = getGrades();
    // Convert grades to points, filter out invalid grades
    const gpaPoints = grades
        .map(convertGradeToPoints)
        .filter(point => point !== null);
    // Calculate GPA
    const gpa = calculateGpa(gpaPoints);
    // Output to browser
    outputGpa(gpa);
}

// Outputs the GPA to the specified element
function outputGpa(gpa) {
    const outputEl = document.querySelector("#output");
    outputEl.textContent = `GPA: ${gpa}`;
}

// Set up the event listener for the button
document.querySelector("#submitButton").addEventListener("click", calculateHandler);