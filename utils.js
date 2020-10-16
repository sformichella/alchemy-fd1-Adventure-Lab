import data from './data.js'

export function findById(array, idString) {
    for (const element of array) {
        if (element.id === idString){
            return element;
        }
    }
    return null;
}

export function createChoicesPage(pageData) {

    // Create Basic elements
    const main = document.createElement('main');
        main.style.backgroundImage = pageData.image;

    const title = document.createElement('h1');
        title.textContent = pageData.title;

    const desc = document.createElement('p');
        desc.textContent = pageData.description;

    const form = document.createElement('form');

    // Fill form with that pages choices
    const choices = pageData.selections;
    choices.forEach(element => {
        const label = document.createElement('label');

        const buttonTitle = document.createElement('span');
            buttonTitle.textContent = element.title;

        const button = document.createElement('input');
            button.setAttribute('type', 'radio');
            button.setAttribute('name', 'choices');
            button.setAttribute('value', element.id)

        const desc = document.createElement('p');
            desc.textContent = element.description;

        label.append(button, buttonTitle, desc);

        form.append(label);
    });

    const submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';

    form.append(submitButton);

    // Form Event Listener
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const selected = document.querySelector(':checked');
        // Data for the selected choice
        const selectedData = findById(data, selected.value);

        // If that data has choices of its own
        if (selectedData.selections) {
            window.location.href = '../choices/?id=' + selectedData.id;
            console.log('new page');
        } else {
            updateResources()
        }
    })

    main.append(title, desc, form);

    return main
}