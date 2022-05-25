import { array } from "./array.js";

const arrayItems = document.getElementById( "array-items" );

function displayArrayItems() {
    return array.map( ( item ) => {

        arrayItems.innerHTML += `
            <li>${ item }</li>
        `;

    } );
}

export default displayArrayItems;
