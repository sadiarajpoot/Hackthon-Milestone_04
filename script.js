var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var Name = document.getElementById("Name").value;
    var email = document.getElementById("Email Address").value;
    var phone = document.getElementById("Phone Number").value;
    var education_InstitudeName = document.getElementById("Institude Name").value;
    var Degree = document.getElementById("Degree").value;
    var Years_Of_Education = document.getElementById("Years Of Education").value;
    var education_text_area = document.getElementById("education-text-area").value;
    var Campany_Name = document.getElementById("Campany Name").value;
    var Your_Last_job = document.getElementById("Your Last job").value;
    var Job_Description = document.getElementById("Job Description").value;
    var skills = document.getElementById("Skills").value;
    var ResumeGenerate = "\n\t   <h2><b>Editable Resume</b></h2>\n\t     <h3>Personal Information</h2>\n\t<p><b>Name :</b><span contenteditable=\"true\">".concat(Name, "</span></p>\n\t<p><b>Email Address :</b><span contenteditable=\"true\">").concat(email, "</span></p>\n\t<p><b>Phone Number :</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n\t    <h3>Education</h2>\n\t<p><b>Institude Name:</b><span contenteditable=\"true\">").concat(education_InstitudeName, "\n\t</span></p>\n\t<p><b>Degree :</b>").concat(Degree, "</p>\n\t<p><b>Year Of Education :</b><span contenteditable=\"true\">").concat(Years_Of_Education, "\n\t</span></p>\n\t<p><b>Education Details :</b><span contenteditable=\"true\">").concat(education_text_area, "\n\t</span></p>\n\t\n\t\t<h3>Work Experience</h2>\n\t<p><b>Company Name :</b><span contenteditable=\"true\">").concat(Campany_Name, "</span></p>\n\t<p><b>Your Last Job :</b><span contenteditable=\"true\">").concat(Your_Last_job, "</span></p>\n\t<p><b>Job Description :</b><span contenteditable=\"true\">").concat(Job_Description, "</span></p>\n\t<p><b>Education Details :</b><span contenteditable=\"true\">").concat(education_text_area, "\n\t</span></p>\n\n\t\t\t<h3>Skills</h3>\n\t<p><b>Skills :</b><span contenteditable=\"true\">").concat(skills, "</span></p>\n\t");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = ResumeGenerate;
    }
    else {
        console.error("The Resume Input is Missing");
    }
});
