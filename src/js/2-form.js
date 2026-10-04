const form = document.querySelector(".feedback-form");
const formModal = document.querySelector(".form-modal");
const closeModalButton = document.querySelector(".form-modal-close");
const storageKey = "feedback-form-state";
const formData = {
    email: "",
    message: "",
};

let savedData = null;

try {
    savedData = JSON.parse(localStorage.getItem(storageKey));
} catch {
    localStorage.removeItem(storageKey);
}

if (savedData) {
    formData.email = savedData.email || "";
    formData.message = savedData.message || "";
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

form.addEventListener("input", event => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(storageKey, JSON.stringify(formData));
    clearFieldError(event.target);
});

form.addEventListener("submit", event => {
    event.preventDefault();

    const emailIsInvalid = !formData.email || !form.elements.email.validity.valid;

    if (emailIsInvalid || !formData.message) {
        showFieldError(form.elements.email, emailIsInvalid);
        showFieldError(form.elements.message, !formData.message);
        openModal();
        return;
    }

    console.log(formData);
    localStorage.removeItem(storageKey);
    form.reset();
    formData.email = "";
    formData.message = "";
});

closeModalButton.addEventListener("click", closeModal);

formModal.addEventListener("click", event => {
    if (event.target === formModal) {
        closeModal();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !formModal.hidden) {
        closeModal();
    }
});

function openModal() {
    formModal.hidden = false;
    closeModalButton.focus();
}

function closeModal() {
    formModal.hidden = true;
}

function showFieldError(field, hasError) {
    field.classList.toggle("input-error", hasError);
    field.setAttribute("aria-invalid", String(hasError));
    field.nextElementSibling.classList.toggle("is-visible", hasError);
}

function clearFieldError(field) {
    showFieldError(field, false);
}
