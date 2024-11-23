const cvContainer = document.querySelector(".cv");
const infoContainer = document.querySelector(".container");
const downloadBtn = document.querySelector("#downloadPDF");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^(\+212|0)([ \-]?[5-7][0-9]{8})$/;
const linkdInRegex = /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/;

function switchToCv() {
  infoContainer.style.display = "none";
  cvContainer.style.display = "flex";
  downloadBtn.style.display = "flex";
}

class Resume {
  constructor(
    name,
    profileImg,
    job,
    birthday,
    phone,
    email,
    linkIn,
    home,
    education,
    experience,
    skills,
    hobbies,
    softSkills,
    languages
  ) {
    this.name = name;
    this.profileImg = profileImg;
    this.job = job;
    this.birthday = birthday;
    this.phone = phone;
    this.email = email;
    this.linkIn = linkIn;
    this.home = home;
    this.education = education;
    this.experience = experience;
    this.skills = skills;
    this.hobbies = hobbies;
    this.softSkills = softSkills;
    this.languages = languages;
  }
}
// validation function
function EmailValidation(email) {
  return emailRegex.test(email);
}

function linkdInValidation(linkedin) {
  return linkdInRegex.test(linkedin);

}

function PhoneValidation(phoneNumber) {
  return phoneRegex.test(phoneNumber);
}

function emptyInputValidation(inputs) {
  for (let input of inputs) {
    if (input === '') {
      return false;
    }
  }
  return true;
}
function emptyArrayValidation(arrays) {
  for (let array of arrays) {
    if (array.length === 0) {
      return false;
    }
  }
  return true;
}

function educationValidation(educationArray) {
  for (let i = 0; i < educationArray.length; i++) {
    if (
      educationArray[i].startDate === "" ||
      educationArray[i].endDate === "" ||
      educationArray[i].degree === "" ||
      educationArray[i].schoolName === ""
    ) {
      return false;
    }
  }
  return true;
}

function experienceValidation(experienceArray) {
  for (let i = 0; i < experienceArray.length; i++) {
    if (
      experienceArray[i].startDate === "" ||
      experienceArray[i].endDate === "" ||
      experienceArray[i].jobTitle === "" ||
      experienceArray[i].companyName === ""
    ) {
      return false;
    }
    return true;
  }
}


generatebtn.addEventListener("click", () => {
  const fullName = document.getElementById("full-name").value;
  const profileImg = document.getElementById("profile").files[0]?.name || null;
  const jobTitle = document.getElementById("job").value;
  const birthday = document.getElementById("birthday").value;
  const phoneNumber = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const linkedin = document.getElementById("linkedin-profile").value;
  const address = document.getElementById("home").value;


  const education = Array.from(
    document.querySelectorAll(".education-container")
  ).map((container) => ({
    startDate: container.querySelector("#education-start").value,
    endDate: container.querySelector("#education-end").value,
    degree: container.querySelector("#education-role").value,
    schoolName: container.querySelector("#education-company").value,
  }));
  const experience = Array.from(
    document.querySelectorAll(".experience-container")
  ).map((container) => ({
    startDate: container.querySelector("#experience-start").value,
    endDate: container.querySelector("#experience-end").value,
    jobTitle: container.querySelector("#job-title").value,
    companyName: container.querySelector("#company-name").value,
  }));
  const skills = Array.from(
    document.querySelectorAll(".skills-container p")
  ).map((skill) => skill.textContent);
  const softSkills = Array.from(
    document.querySelectorAll(".soft_skills-container p")
  ).map((skill) => skill.textContent);
  const languages = Array.from(
    document.querySelectorAll(".languages-container .lang")
  ).map((lang) => ({
    language: lang.querySelector("p:first-child").textContent,
    level: lang.querySelector("p:last-child").textContent,
  }));
  const hobbies = Array.from(
    document.querySelectorAll(".hobbies-container p")
  ).map((hobby) => hobby.textContent);


  // the validation functions
  // if (!emptyInputValidation([fullName, profileImg, jobTitle, birthday, address,
  // ])) {
  //   alert("Please fill all the personal information inputs");
  //   return;
  // }
  // if (!emptyArrayValidation([
  //   skills,
  //   softSkills,
  //   languages,
  //   hobbies,
  // ])) {
  //   alert("Please add items into the required inputs");
  //   return;
  // }

  // if (!EmailValidation(email)) {
  //   alert("Please enter a valid email address.");
  //   return;
  // }

  // if (!linkdInValidation(linkedin)) {
  //   alert("Please enter a valid LinkedIn profile URL.");
  //   return;
  // }

  // if (!PhoneValidation(phoneNumber)) {
  //   alert("Please enter a valid phone number.");
  //   return;
  // }

  // if (!educationValidation(education)) {
  //   alert("Please fill the education section");
  //   return;
  // }
  // if (!experienceValidation(experience)) {
  //   alert("Please  fill the experience section.");
  //   return;
  // }

  // if all the validations passes display the cv
  switchToCv()

  const Data = new Resume(
    fullName,
    profileImg,
    jobTitle,
    birthday,
    phoneNumber,
    email,
    linkedin,
    address,
    education,
    experience,
    skills,
    hobbies,
    softSkills,
    languages
  );
  // saving in  localStoraage
  // localStorage.setItem("resumeData", JSON.stringify(Data));
  // adding the data in the acutal resume
  let resumaData = JSON.parse(localStorage.getItem("resumeData"));
  const cv_hobbies = document.querySelector(".cv_hobbies_container");
  const cv_skills = document.querySelector(".cv_skills_container");
  const cv_softSkills = document.querySelector(
    ".cv_soft_skills_container"
  );
  const cv_name = document.querySelector("#name");
  const cv_profession = document.querySelector("#profession");
  const cv_email = document.querySelector("#the_email");
  const cv_linkedin = document.querySelector("#linkedin_link");
  const cv_address = document.querySelector("#the_address");
  const cv_age = document.querySelector("#age");
  const cv_phone_number = document.querySelector("#phone_number");
  const cv_languages = document.querySelector(
    ".cv_languages_container"
  );
  const cv_education = document.querySelector(".cv_education");
  const cv_experience = document.querySelector(".cv_experience");


  // calculating the age of the user :)
  const currentDate = new Date();
  const calcBirthday = resumaData.birthday;
  const year = calcBirthday.split("-")[0];

  cv_name.innerText = resumaData.name;
  cv_profession.innerText = resumaData.job;
  cv_email.innerText = resumaData.email;
  cv_linkedin.innerText = resumaData.linkIn;
  cv_address.innerText = resumaData.home;
  cv_age.innerText = currentDate.getFullYear() - year;
  cv_phone_number.innerText = resumaData.phone;

  resumaData.hobbies.forEach((hobby) => {
    cv_hobbies.innerHTML += `
          <span>${hobby}</span>
    `;
  });

  resumaData.skills.forEach((skill) => {
    cv_skills.innerHTML += `
          <span>${skill}</span>
          `;
  });

  resumaData.softSkills.forEach((softSkill) => {
    cv_softSkills.innerHTML += `
    <span>${softSkill}</span>
    `;
  });

  resumaData.languages.forEach((language) => {
    cv_languages.innerHTML += `
      <div class="cv_lang">
          <p>${language.language}</p>
      <p>${language.level}</p>
            </div>
    `;
  });

  resumaData.education.forEach((education) => {
    cv_education.innerHTML += `
      <div class="cv_education_container">
        <div>${education.startDate.split("-")[0]} - ${education.endDate.split("-")[0]}</div>
        |
        <div>${education.degree}</div>
        |
        <div>${education.schoolName}</div>
      </div>
    `;
  });

  resumaData.experience.forEach((experience) => {
    cv_experience.innerHTML += `
      <div class="cv_experience_container">
        <div>${experience.startDate.split("-")[0]} - ${experience.endDate.split("-")[0]}</div>
        |
        <div>${experience.jobTitle}</div>
        |
        <div>${experience.companyName}</div>
      </div>
    `;
  });
});

// adding the selected image in the cv 
const fileInput = document.querySelector("#profile");
const preview = document.querySelector("#cv_profile");
fileInput.addEventListener('change', function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.style.display = 'block';
    };

    reader.readAsDataURL(file);
  } else {
    preview.src = '';
  }
});




// document.getElementById('downloadPDF').addEventListener('click', async () => {
//   const { jsPDF } = window.jspdf; // Ensure jsPDF is loaded properly

//   const content = document.querySelector('.cv'); // Adjust selector as needed

//   // Render HTML content to PDF
//   const pdf = new jsPDF();
//   pdf.html(content, {
//     callback: (doc) => {
//       doc.save('my-cv.pdf');
//     },
//   });
// });


window.onload = function () {
  document.getElementById('downloadPDF').addEventListener("click", () => {
    const content = document.querySelector('.cv');

    var opt = {
      filename: 'myCv.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 3 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(content).save()
  })
}