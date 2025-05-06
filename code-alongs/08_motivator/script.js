const nameField = document.querySelector("#firstname");
const skillDisplay = document.querySelector("#skills");
const addInput = document.querySelector("#add");

// Name setzen und aus localStorage lesen
function getAndSetName() {
    const storedName = localStorage.getItem("name");

    if (storedName) {
        nameField.innerText = storedName;
    } else {
        const nameInput = prompt("Bitte gib deinen Namen an:");
        if (nameInput) {
            nameField.innerText = nameInput;
            localStorage.setItem("name", nameInput);
        }
    }
}

// Skills sammeln (nur im Arbeitsspeicher)
function getAndSetSkillInput() {
    const skills = [];
    updateSkillDisplay(skills);

    addInput.addEventListener("change", () => {
        const newSkill = addInput.value.trim();

        if (newSkill) {
            skills.push(newSkill);
            updateSkillDisplay(skills);
            addInput.value = ""; // Eingabefeld leeren
        }
    });
}

// Anzeige aktualisieren
function updateSkillDisplay(skills) {
    skillDisplay.innerText = skills.length > 0
        ? skills.join(", ")
        : "...";
}

// Initial starten
getAndSetName();
getAndSetSkillInput();
