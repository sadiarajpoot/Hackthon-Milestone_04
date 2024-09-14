const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;
form.addEventListener("submit", (event: Event) => {
	event.preventDefault();
	const Name = (document.getElementById("Name") as HTMLInputElement).value;
	const email = (document.getElementById("Email Address") as HTMLInputElement).value
	const phone = (document.getElementById("Phone Number") as HTMLInputElement).value
	const education_InstitudeName = (document.getElementById("Institude Name") as HTMLInputElement).value
	const Degree = (document.getElementById("Degree") as HTMLInputElement).value
	const Years_Of_Education = (document.getElementById("Years Of Education") as HTMLInputElement).value
	const education_text_area = (document.getElementById("education-text-area") as HTMLInputElement).value;
	const Campany_Name = (document.getElementById("Campany Name") as HTMLInputElement).value
	const Your_Last_job = (document.getElementById("Your Last job") as HTMLInputElement).value
	const Job_Description = (document.getElementById("Job Description") as HTMLInputElement).value;
	const skills = (document.getElementById("Skills") as HTMLInputElement).value;
	const ResumeGenerate = `
	   <h2><b>Editable Resume</b></h2>
	     <h3>Personal Information</h2>
	<p><b>Name :</b><span contenteditable="true">${Name}</span></p>
	<p><b>Email Address :</b><span contenteditable="true">${email}</span></p>
	<p><b>Phone Number :</b><span contenteditable="true">${phone}</span></p>

	    <h3>Education</h2>
	<p><b>Institude Name:</b><span contenteditable="true">${education_InstitudeName}
	</span></p>
	<p><b>Degree :</b>${Degree}</p>
	<p><b>Year Of Education :</b><span contenteditable="true">${Years_Of_Education}
	</span></p>
	<p><b>Education Details :</b><span contenteditable="true">${education_text_area}
	</span></p>
	
		<h3>Work Experience</h2>
	<p><b>Company Name :</b><span contenteditable="true">${Campany_Name}</span></p>
	<p><b>Your Last Job :</b><span contenteditable="true">${Your_Last_job}</span></p>
	<p><b>Job Description :</b><span contenteditable="true">${Job_Description}</span></p>
	<p><b>Education Details :</b><span contenteditable="true">${education_text_area}
	</span></p>

			<h3>Skills</h3>
	<p><b>Skills :</b><span contenteditable="true">${skills}</span></p>
	`;
	if (resumeDisplayElement) {
		resumeDisplayElement.innerHTML = ResumeGenerate;
	} else {
		console.error("The Resume Input is Missing");
	}
});