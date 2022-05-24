// Provided array
const array = ['aap', 'noot', 'mies', 'wim', 'zus', 'jet', ]

// Set default index to 0 to ensure currentItem displays first entry of the array
let defaultIndex = 0;

// Set currentIndex to defaultIndex so currentIndex will start counting from 0
let currentIndex = defaultIndex;

// Create reference to HTML element, so item can be injected in the DOM
const currentItem = document.getElementById( "current-item" );

// Inject the default index into the array and inject in the DOM
currentItem.innerText = `${ array[defaultIndex] }`;

// Function adjusts the currentIndex by the direction (will run only on click):
//      - PREVIOUS will decrease the value,
//      - NEXT will increase the value
function adjustCurrentIndex( direction ) {
    // Decrease currentIndex with 1 when direction is PREVIOUS
    if ( direction === "previous" ) {
        currentIndex -= 1;
    }
    // Increase currentIndex with 1 when direction is NEXT
    if ( direction === "next" ) {
        currentIndex += 1;
    }
    // Create attribute 'disabled' to PREVIOUS button when currentIndex is 0 or lower
    if ( currentIndex <= 0 ) {
        buttonPrevious.setAttribute( "disabled", true );
    }
    // Remove attribute 'disabled' to PREVIOUS button when currentIndex is above 0
    if ( currentIndex > 0 ) {
        buttonPrevious.removeAttribute( "disabled", true );
    }
    // Create attribute 'disabled' to NEXT button when currentIndex is 0 or lower
    if ( currentIndex >= array.length - 1 ) {
        buttonNext.setAttribute( "disabled", true );
    }
    // Remove attribute 'disabled' to NEXT button when currentIndex is at the end of the array
    if ( currentIndex < array.length - 1 ) {
        buttonNext.removeAttribute( "disabled", true );
    }

    // Adjust currentIndex with the new value
    currentItem.innerText = `${ array[currentIndex] }`;

}

// Create reference to HTML element, so PREVIOUS button can be executed on click
const buttonPrevious = document.getElementById( "btn-previous" );

// Event listener that will execute 'adjustCurrentIndex' function when PREVIOUS button is clicked
buttonPrevious.addEventListener( "click", () => {
    // Function will run and direction is set to PREVIOUS
    adjustCurrentIndex( "previous" );

} );

// Create reference to HTML element, so NEXT button can be executed on click
buttonPrevious.setAttribute( "disabled", true );

// Event listener that will execute 'adjustCurrentIndex' function when NEXT button is clicked
const buttonNext = document.getElementById( "btn-next" );
buttonNext.addEventListener( "click", () => {
    // Function will run and direction is set to NEXT
    adjustCurrentIndex( "next" );

} );