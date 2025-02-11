document.addEventListener('DOMContentLoaded', () => {
    // Sign In
    document.getElementById('signIn').addEventListener('click', () => {
        const email = document.getElementById('emailInput').value;
        if (email && validateEmail(email)) {
            console.log('Signing in:', email);
        } else {
            alert('Please enter a valid email');
        }
    });

    // Profile Image Upload
    document.getElementById('uploadImage').addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = handleImageUpload;
        input.click();
    });

   /*// Resume Upload
   document.getElementById('uploadResume').addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf,.doc,.docx';
    input.onchange = handleResumeUpload;
    input.click();
});
document.getElementById('resumeUpload').addEventListener('change', function(event) {
    let fileName = event.target.files[0] ? event.target.files[0].name : "No file uploaded";
    document.getElementById('uploadedResume').textContent = fileName;
});
*/
  // Resume Upload with multiple files
  document.getElementById('uploadResume').addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf,.doc,.docx';
    input.onchange = handleResumeUpload;
    input.click();
});

function handleResumeUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const fileName = file.name;
        document.getElementById('uploadedResume').textContent = fileName;
    }
}
    
// Add Skill
document.getElementById('addSkill').addEventListener('click', () => {
    const skill = prompt('Enter your skill:');
    if (skill) {
        addSkill(skill);
    }
});
});
//Skills functionality
function addSkill(skill) {
    const skillsContainer = document.getElementById('skillsContainer');
    
    // Create skill item container
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';
    skillItem.innerHTML = `
        <span>${skill}</span>
        <button class="remove-skill">Remove</button>
    `;
    
    // Append skill item to skills container
    skillsContainer.appendChild(skillItem);

    // Add remove functionality to the "Remove" button
    const removeButton = skillItem.querySelector('.remove-skill');
    removeButton.addEventListener('click', () => {
        skillsContainer.removeChild(skillItem);
    });
}

// Validate Email Format
function validateEmail(email) {
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Handle Profile Image Upload
function handleImageUpload(event) {
const file = event.target.files[0];
if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        document.getElementById('profileImg').src = e.target.result;
    };
    reader.readAsDataURL(file);
}
}

// Add a New Skill
function addSkill(skill) {
const skillsContainer = document.getElementById('skillsContainer');
const skillItem = document.createElement('div');
skillItem.classList.add('skill-item');
skillItem.textContent = skill;
skillsContainer.appendChild(skillItem);
}
document.addEventListener('DOMContentLoaded', () => {
    // Add Project Button
    document.getElementById('addProject').addEventListener('click', () => {
        addProjectForm();
    });
});

// Function to add a new Project form
function addProjectForm() {
    const projectsContainer = document.getElementById('projectsContainer');

    const projectForm = document.createElement('div');
    projectForm.classList.add('project-form');

    projectForm.innerHTML = `
        <h3>Project Details <span class="remove-project">&#128465;</span></h3>
        <label for="projectName">Project Name:</label>
        <input type="text" id="projectName" placeholder="Enter Project Name" class="project-input">

        <label for="projectInstitution">Where did you do the project (Company/Institution):</label>
        <input type="text" id="projectInstitution" placeholder="Enter Company/Institution" class="project-input">

        <label for="skillsUsed">Skills Used:</label>
        <div id="skillsUsed" class="skills-container">
            <input type="text" class="skill-input" placeholder="Enter Skill" />
            <div class="skill-level-container">
                <select class="skill-level">
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>
            </div>
        </div>
        <button class="add-skill">Add Skill</button>

        <div id="addedSkills"></div>
    `;

    // Add skill functionality
    const addSkillButton = projectForm.querySelector('.add-skill');
    addSkillButton.addEventListener('click', () => {
        addSkill(projectForm);
    });

    // Remove project functionality
    const removeProjectButton = projectForm.querySelector('.remove-project');
    removeProjectButton.addEventListener('click', () => {
        projectsContainer.removeChild(projectForm);
    });

    // Append the new project form
    projectsContainer.appendChild(projectForm);
}

// Function to add new skills dynamically
function addSkill(projectForm) {
    const skillContainer = projectForm.querySelector('#skillsUsed');
    const skillInput = skillContainer.querySelector('.skill-input').value;
    const skillLevel = skillContainer.querySelector('.skill-level').value;

    if (skillInput) {
        const skillItem = document.createElement('div');
        skillItem.classList.add('skill-item');
        skillItem.innerHTML = `
            <span>${skillInput} - ${skillLevel}</span>
            <button class="remove-skill">Remove</button>
        `;

        // Remove skill functionality
        const removeSkillButton = skillItem.querySelector('.remove-skill');
        removeSkillButton.addEventListener('click', () => {
            skillItem.remove();
        });

        // Add the new skill item to the addedSkills section
        projectForm.querySelector('#addedSkills').appendChild(skillItem);

        // Clear the skill input field after adding
        skillContainer.querySelector('.skill-input').value = '';
    }
}


