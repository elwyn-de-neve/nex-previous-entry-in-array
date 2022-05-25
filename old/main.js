// Import functions
import displayArrayItems from './displayArrayItems.js'
import { adjustCurrentIndex } from "./adjustCurrentIndex.js";

// Create reference to HTML element, so PREVIOUS button can be executed on click
const buttonPrevious = document.getElementById( "btn-previous" );

// Event listener that will execute 'adjustCurrentIndex' function when PREVIOUS button is clicked
buttonPrevious.addEventListener( "click", () => {
    // Function will run and direction is set to PREVIOUS
    adjustCurrentIndex( "previous" );

} );


// Disable PREVIOUS button as default
buttonPrevious.setAttribute( "disabled", true );

// Create reference to HTML element, so NEXT button can be executed on click
const buttonNext = document.getElementById( "btn-next" );

// Event listener that will execute 'adjustCurrentIndex' function when NEXT button is clicked
buttonNext.addEventListener( "click", () => {
    // Function will run and direction is set to NEXT
    adjustCurrentIndex( "next" );

} );

displayArrayItems();