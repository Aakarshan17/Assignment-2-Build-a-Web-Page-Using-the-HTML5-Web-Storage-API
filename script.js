const usernameInput = document.getElementById("username");
const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");
const displayName = document.getElementById("display-name");

function getTimeBasedGreeting() {
  const now = new Date();
  const hour = now.getHours();

  if (hour < 12) {
    return "Good Morning";
  } else if (hour < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

saveBtn.addEventListener("click", function() {
  const name = usernameInput.value;
  localStorage.setItem("name", name);


  const greeting = getTimeBasedGreeting();
  displayName.textContent = greeting + ", " + name + "!"; 
});

window.addEventListener("load", function() {
  const savedName = localStorage.getItem("name");
  if (savedName) {
    const greeting = getTimeBasedGreeting();
    displayName.textContent = greeting + ", " + savedName + "!";
  }
});

clearBtn.addEventListener("click", function() {
  localStorage.removeItem("name");
  displayName.textContent = ""; 
});