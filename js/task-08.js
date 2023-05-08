const formEl = document.querySelector('form');

formEl.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const {
    elements: { email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }
    const dataArray = {
        email: event.currentTarget.email.value,
        password: event.currentTarget.password.value,
    };
    console.log(dataArray);
    event.currentTarget.reset();
}

