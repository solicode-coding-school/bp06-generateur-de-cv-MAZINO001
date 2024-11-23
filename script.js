const generatebtn = document.querySelector(".generate");
const professionalEducation = document.querySelector(".professional-education");
const professionalEducationBtn = document.querySelector(
  ".professional-education button"
);
const professionalExperience = document.querySelector(
  ".professional-experience"
);
const professionalExperienceBtn = document.querySelector(
  ".professional-experience button"
);

const skillsBtn = document.querySelector(".skills button");
const skillsInput = document.querySelector("#new-skill");
const skillsContainer = document.querySelector(".skills-container");

const softSkillsBtn = document.querySelector(".soft_skills button");
const softSkillsInput = document.querySelector("#new-soft_skills");
const softSkillsContainer = document.querySelector(".soft_skills-container");

const hobbiesBtn = document.querySelector(".hobbies button");
const hobbiesInput = document.querySelector("#new-hobby");
const hobbiesContainer = document.querySelector(".hobbies-container");

const languageBtn = document.querySelector(".languages button");
const languageInput = document.querySelector("#new-language");
const languageLevel = document.querySelector("#lang_level");
const languageContainer = document.querySelector(".languages-container");


professionalEducationBtn.addEventListener("click", () => {
  let newEducation = document.createElement("div");
  newEducation.classList.add("education-container");
  newEducation.innerHTML = `
          <div class="field">
            <label for="education-start">Start Date</label>
            <input type="date" id="education-start" />
          </div>

          <div class="field">
            <label for="education-end">End Date</label>
            <input type="date" id="education-end" />
          </div>

          <div class="field">
            <label for="education-role">Role</label>
            <input
              type="text"
              id="education-role"
              placeholder="Enter your role"
            />
          </div>

          <div class="field">
            <label for="education-company">Company Name</label>
            <input
              type="text"
              id="education-company"
              placeholder="Enter company name"
            />
          </div>
  `;
  professionalEducation.insertBefore(newEducation, professionalEducationBtn);
});
professionalExperienceBtn.addEventListener("click", () => {
  let newExperince = document.createElement("div");
  newExperince.classList.add("experience-container");
  newExperince.innerHTML = `
          <div class="field">
            <label for="experience-start">Start Date</label>
            <input type="date" id="experience-start" />
          </div>

          <div class="field">
            <label for="experience-end">End Date</label>
            <input type="date" id="experience-end" />
          </div>

          <div class="field">
            <label for="job-title">Job Title</label>
            <input
              type="text"
              id="job-title"
              placeholder="Enter your job title"
            />
          </div>

          <div class="field">
            <label for="company-name">Company Name</label>
            <input
              type="text"
              id="company-name"
              placeholder="Enter company name"
            />
          </div>
  `;
  professionalExperience.insertBefore(newExperince, professionalExperienceBtn);
});

skillsBtn.addEventListener("click", () => {
  if (skillsInput.value !== "") {
    const newSkill = document.createElement("p");
    newSkill.innerText = skillsInput.value;
    skillsContainer.appendChild(newSkill);
    skillsInput.value = ""
  }
});

softSkillsBtn.addEventListener("click", () => {
  console.log();
  if (softSkillsInput.value !== "") {
    const newSoftSkill = document.createElement("p");
    newSoftSkill.innerText = softSkillsInput.value;
    softSkillsContainer.appendChild(newSoftSkill);
    softSkillsInput.value = ""
  }
});

hobbiesBtn.addEventListener("click", () => {
  if (hobbiesInput.value) {
    const newhobby = document.createElement("p");
    newhobby.innerText = hobbiesInput.value;
    hobbiesContainer.appendChild(newhobby);
    hobbiesInput.value = ""

  }
});

languageBtn.addEventListener("click", () => {
  if (languageInput.value !== "") {
    const newLanguage = document.createElement("div");
    newLanguage.classList.add("lang");
    newLanguage.innerHTML = `
    <p>${languageInput.value}</p>
    <p>${languageLevel.value}</p>
    `;
    languageContainer.appendChild(newLanguage);
    languageInput.value = ""
  }
});


