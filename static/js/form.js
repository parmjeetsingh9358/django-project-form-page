var form = document.querySelector(".form");
var usernameInp = document.querySelector('.form input[name="username"]');
var nameInp = document.querySelector('.form input[name="name"]');
var skillsInp = document.querySelector('.form input[name="skills"]');
var skillsCont = document.querySelector(".form .skills_wrp");
var addSkillBtn = document.querySelector(".form button.add_skill");

var skills = [];
var canSubmitForm = true;

usernameInp.onchange = function () {
  usernameInp.style.boxShadow = "none";

  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 200) {
      if (xhr.responseText === "yes") {
        canSubmitForm = false;
        usernameInp.style.boxShadow = "0 0 0 2px red";
      } else {
        canSubmitForm = true;
        usernameInp.style.boxShadow = "0 0 0 2px green";
      }
    }
  };

  xhr.open("GET", "/checkuser?username=" + usernameInp.value);
  xhr.send();
};

function onAddSkill() {
  var skill = prompt("Enter Skill:");

  if (skill && !skills.includes(skill)) {
    skills.push(skill);
    skillsInp.value = skills.join(", ");
    skillsCont.innerHTML = skills
      .map(
        (s) =>
          `<span class="skill" onclick="deleteSkill(this.innerHTML)">${s}</span>`
      )
      .join("");
    addSkillBtn.innerHTML = "Add More";
  }
}

function deleteSkill(skill) {
  skills = skills.filter((s) => s !== skill);
  skillsInp.value = skills.join(", ");
  skillsCont.innerHTML = skills
    .map(
      (s) =>
        `<span class="skill" onclick="deleteSkill(this.innerHTML)">${s}</span>`
    )
    .join("");
}
addSkillBtn.addEventListener("click", onAddSkill);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!/^[a-zA-Z0-9]{5,25}$/.test(usernameInp.value)) {
    alert("Username invalid!");
    return;
  }

  if (!/^[a-zA-Z\s]+$/.test(nameInp.value)) {
    alert("Name null!");
    return;
  }

  if (!canSubmitForm) {
    alert("Username already exists!");
    return;
  }

  form.submit();
});
