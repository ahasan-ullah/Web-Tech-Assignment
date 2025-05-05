const submitBtn = document.querySelector(".submit-btn");
const resetBtn = document.querySelector(".reset-btn");
const empId = document.getElementById("emp-id");
const fullName = document.getElementById("fullName");
const email=document.getElementById("email");
const department = document.getElementById("department");
const joiningDate = document.getElementById("joiningDate");
const genderInputs= document.getElementsByName("gender");
const empIdError =document.getElementById("emp-id-error");
const fullNameError= document.getElementById("fullName-error");
const emailError = document.getElementById("email-error");
const departmentError = document.getElementById("department-error");
const joiningDateError = document.getElementById("joiningDate-error");
const genderError = document.getElementById("gender-error");
const result = document.getElementById("result");

function validateEmpId() {
  const regex = /^EMP\d{3}$/;
  if (!regex.test(empId.value.trim())) {
    empIdError.style.display = "block";
    empIdError.textContent = "Invalid Employee ID. Must be 'EMP' followed by 3 digits.";
    return false;
  }
  empIdError.style.display = "none";
  return true;
}

function validateName() {
  const regex = /^[a-zA-Z\s]+$/;
  if (!regex.test(fullName.value.trim())) {
    fullNameError.style.display = "block";
    fullNameError.textContent = "Full name must contain only letters and spaces.";
    return false;
  }
  fullNameError.style.display = "none";
  return true;
}

function validateEmail() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email.value.trim())) {
    emailError.style.display = "block";
    emailError.textContent = "Please enter a valid email address.";
    return false;
  }
  emailError.style.display = "none";
  return true;
}

function validateDepartment() {
  if (department.value === "") {
    departmentError.style.display = "block";
    departmentError.textContent = "Please select a department.";
    return false;
  }
  departmentError.style.display = "none";
  return true;
}

function validateJoiningDate() {
  if (joiningDate.value === "") {
    joiningDateError.style.display = "block";
    joiningDateError.textContent = "Joining date cannot be empty.";
    return false;
  }
  joiningDateError.style.display = "none";
  return true;
}

function validateGender() {
  let isValid = false;
  genderInputs.forEach(gender => {
    if (gender.checked) {
      isValid = true;
    }
  });
  if (!isValid) {
    genderError.style.display = "block";
    genderError.textContent = "Please select a gender.";
    return false;
  }
  genderError.style.display = "none";
  return true;
}

empId.addEventListener("change", validateEmpId);
fullName.addEventListener("change", validateName);
email.addEventListener("change", validateEmail);
department.addEventListener("change", validateDepartment);
joiningDate.addEventListener("change", validateJoiningDate);
genderInputs.forEach(input => {
  input.addEventListener("change", validateGender);
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const valid =
    validateEmpId() &&
    validateName() &&
    validateEmail() &&
    validateDepartment() &&
    validateJoiningDate() &&
    validateGender();

  if (!valid) {
    alert("Fix validation errors before submitting.");
    return;
  }

  const gender = [...genderInputs].find(gender => gender.checked).value;

  result.innerHTML = `
    <h3>Employee Info</h3>
    <ul>
      <li><strong>ID:</strong> ${empId.value}</li>
      <li><strong>Name:</strong> ${fullName.value}</li>
      <li><strong>Email:</strong> ${email.value}</li>
      <li><strong>Department:</strong> ${department.value}</li>
      <li><strong>Joining Date:</strong> ${joiningDate.value}</li>
      <li><strong>Gender:</strong> ${gender}</li>
    </ul>
  `;
});

resetBtn.addEventListener("click", () => {
  document.getElementById("registerForm").reset();
  result.innerHTML = "";
});