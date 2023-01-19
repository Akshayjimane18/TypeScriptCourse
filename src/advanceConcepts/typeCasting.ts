const numbers2 = {

    x: 10,
    y: {
        z: 20,
    }
} as const;

let firstNameField = document.querySelector('#firstname')! as HTMLInputElement;

firstNameField.value;