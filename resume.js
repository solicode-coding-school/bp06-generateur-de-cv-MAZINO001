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
  
  generatebtn.addEventListener("click", () => {
    const fullName = document.getElementById("full-name").value;
    const profileImg =
      document.getElementById("profile").files[0];
    const jobTitle = document.getElementById("job").value;
    const birthday = document.getElementById("birthday").value;
    const phoneNumber = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const linkedin = document.getElementById("linkedin-profile").value;
    const address = document.getElementById("home").value;
    const education = Array.from(document.querySelectorAll(".education-container")).map((container) => ({
      startDate: container.querySelector("#education-start").value,
      endDate: container.querySelector("#education-end").value,
      degree: container.querySelector("#education-role").value,
      schoolName: container.querySelector("#education-company").value,
    }));
    const experience = Array.from(document.querySelectorAll(".experience-container")).map((container) => ({
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
  
    console.log(Data);
  });
  
  // adding the data in the acutal resume
  
  