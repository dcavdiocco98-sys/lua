// Sample skills — feel free to modify
const skills = [
  "Python",
  "Java",
  "JavaScript",
  "HTML & CSS",
  "Git & GitHub",
  "SQL",
  "Linux basics",
  "Docker (learning)"
];

const list = document.getElementById("skills-list");
skills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  list.appendChild(li);
});
