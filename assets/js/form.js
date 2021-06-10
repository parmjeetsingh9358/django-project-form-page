var form = document.querySelector(".form");

var usernameInp = document.querySelector('.form input[name="username"]');
var nameInp = document.querySelector('.form input[name="name"]');
var skillsInp = document.querySelector('.form input[name="skills"]');
var skillsCont = document.querySelector(".form .skills_wrp");
var addSkillBtn = document.querySelector(".form button.add_skill");

function onAddSkill() {
  var skill = prompt("Enter Skill:");

  if (skill) {
    skillsInp.value += ", " + skill;
    skillsCont.innerHTML += '<span class="skill">' + skill + "</span>";
  }
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

  if (!/^[a-zA-Z0-9_-,]+$/.test(skillsInp.value)) {
    alert("Skills invalid!");
    return;
  }

  form.submit();
});
