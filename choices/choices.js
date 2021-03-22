import data from '../data.js';

import {
    findById,
    createChoicesPage
} from '../utils.js';

const body = document.querySelector('body');


const searchParam = new URLSearchParams(window.location.search);

const pageId = searchParam.get('id');

console.log(pageId);

const pageData = findById(data, pageId);

body.append(createChoicesPage(pageData))