import data from './data.js'

export function findById(array, idString) {
    for (const element of array) {
        if (element.id === idString){
            return element;
        }
    }
    return null;
}


// Makes a main element for any data elements we have in the data array
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


// Makes user info section
// export function createUserInfo(userInfo) {

//     const userInfo = document.createElement('section');
//     userInfo.classList.add('user-info');
    
//     // Basic Data
//     const userName = document.createElement('p');
//         userName.textContent = `Username: ${userInfo.name}`;

//     const userClass = document.createElement('p');
//         userClass.textContent = userInfo.class;

//     const experience = document.createElement('p');
//         experience.textContent= `Experience: ${userInfo.experience}`;

//     const money = document.createElement('p');
//         money.textContent= `Money: ${userInfo.money}`;

//     const science = document.createElement('p');
//         science.textContent= `Science: ${userInfo.science}`;


//     // Spacecraft Section
//     const spacecraftSection = document.createElement('section');
    
//         const spacecraftImage = document.createElement('img');

//         const spacecraftInfo = document.createElement('div');

//             const spacecraftName = document.createElement('p');
            
//             const fuelLevel = document.createElement('p');

//             const fuelTank = document.createElement('p');

//             const scienceGear = document.createElement('p');

//         spacecraftInfo.append(spacecraftName, fuelLevel, fuelTank, scienceGear);

//     spacecraftSection.append(spacecraftImage, spacecraftInfo);

//     userInfo.append(userName, userClass, experience, money, science, spacecraftSection); 

//     return userInfo;
// }