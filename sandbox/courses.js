// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  section:[{ sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
{ sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
  ],
  enrollStudent: function(sectionNum) {
    console.log("")
    // Find the section with the matching section number
    const sectionIndex = this.section.findIndex(section => section.sectionNum === sectionNum);
    
    // If section is found, increment the enrolled count
    if (sectionIndex >= 0) {
      this.section[sectionIndex].enrolled++;
      // Re-render the sections to show updated enrollment
      renderSections(this.section);
    }
  }
};

// Function to set the course name and number in the HTML
function setCourseInfo(course) {
  // Get references to the HTML elements
  const courseNameElement = document.querySelector("#courseName");
  const courseCodeElement = document.querySelector("#courseCode");
  
  // Set the course name and code using dot notation
  courseNameElement.textContent = course.name;
  courseCodeElement.textContent = course.code;
}
function sectionTemplate(section){
    return `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td>
    </tr>`
}

function renderSections(sections){
    // get a reference to the sections element
    const sectionsEl = document.querySelector("#sections");
    // transform each section from an object into an HTML string
    const htmlString = sections.map(sectionTemplate);
    // insert the html string into the sections element
    sectionsEl.innerHTML = htmlString.join("");
}
// Call the function to display the course information
setCourseInfo(aCourse);

// Call the function to render the sections
renderSections(aCourse.section);
