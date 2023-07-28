const validation = () => {
    const formInput = document.querySelectorAll('.form__input');
    const errorIcon = document.querySelectorAll('.form__error-icon');
    const errorMsg = document.querySelectorAll('.form__error-msg');
    const submitBtn = document.querySelector('.form__btn');

    const error = (i) => {
        formInput[i].classList.add('error');
        formInput[i].classList.remove('success');
        errorMsg[i].style.display = 'block';
        errorIcon[i].style.display = 'block';
    };

    const success = (i) => {
        formInput[i].classList.remove('error');
        formInput[i].classList.add('success');
        errorMsg[i].style.display = 'none';
        errorIcon[i].style.display = 'none';      
    };

    const checkInputs = () => {
        let firstNameValue = formInput[0].value;
        let lastNameValue = formInput[1].value;
        let emailValue = formInput[2].value;
        let passwordValue = formInput[3].value;

        const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        for(let i=0; i < formInput.length; i++) {

            if(firstNameValue === "") {
                error(0);
            }else {
                success(0);
            }

            if(lastNameValue === "") {
                error(1);
            }else {
                success(1);
            }

            if(emailValue === ""){
                error(2);
                errorMsg[2].innerHTML = "Email address cannot be empty";
            }else if(!email.value.match(emailPattern)){
                error(2);
                errorMsg[2].innerHTML = "Looks like this is not an email";
            }else{
                success(2);
            };
        
            if(passwordValue === ""){
                error(3);
            }else{
                success(3);
            };
        };
    };

    const getUserInputs = () => {
        let firstNameValue = formInput[0].value;
        let lastNameValue = formInput[1].value;
        let emailValue = formInput[2].value;
        let passwordValue = formInput[3].value;
        let userInput = [];

        if(formInput[0].classList.contains('success')
        && formInput[1].classList.contains('success')
        && formInput[2].classList.contains('success')
        && formInput[3].classList.contains('success')){

            userInput.push(firstNameValue, lastNameValue, 
                emailValue, passwordValue);
                
            setTimeout( () => {
                alert(`First Name: ${firstNameValue} \nLast Name: ${lastNameValue} \nEmail: ${emailValue}`);
            }, 500);
                
        };
    };

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();

        checkInputs();

        getUserInputs();

    });
};


export default validation;
