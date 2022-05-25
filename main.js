////////////////////////////////// NAVIGATE ENTRIES FROM HERE //////////////////////////////////

// Provided array
const array = [ "aap", "noot", "mies", "wim", "zus", "jet", "teun", "vuur", "gijs", "lam", "kees", "bok", "weide", "does", "hok", "duif", "schapen" ];

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
buttonPrevious.addEventListener( "click", ( e ) => {

    // Prevent form from being refreshed before submitted
    e.preventDefault();

    // Function will run and direction is set to PREVIOUS
    adjustCurrentIndex( "previous" );

} );

// Disable PREVIOUS button as default
buttonPrevious.setAttribute( "disabled", true );

// Create reference to HTML element, so NEXT button can be executed on click
const buttonNext = document.getElementById( "btn-next" );

// Event listener that will execute 'adjustCurrentIndex' function when NEXT button is clicked
buttonNext.addEventListener( "click", ( e ) => {

    // Prevent form from being refreshed before submitted
    e.preventDefault();

    // Function will run and direction is set to NEXT
    adjustCurrentIndex( "next" );

} );

////////////////////////////////// SEARCH BAR FROM HERE //////////////////////////////////
// Todo:
//  [ ] If search query does not match, show message 'no results found'


// Create reference to input bar in HTML
const searchBar = document.getElementById( "search" );

// Create reference to form in HTML
const submitForm = document.getElementById( "submit" );

// Add eventListener to form and execute function on submit
submitForm.addEventListener( "submit", ( e ) => {

    // Prevent form from being refreshed before submitted
    e.preventDefault();

    // Execute function that searches the array for possible matches
    searchByQuery( array, searchBar.value );

    // Clear input field after submit
    searchBar.value = "";

} );

// Create reference to the unordered list in HTML, so we can inject our results as items
const results = document.getElementById( "search-results" );

// Function that will accept the array and a search query as parameters
const searchByQuery = ( arrayOfItems, searchQuery ) => {

    // Clear the current list of results on each new submit
    results.replaceChildren();

    // Return the results
    arrayOfItems.filter( ( item ) => {

        // Transform al entries and search queries to lower cases, so they will match when equal
        item = item.toLowerCase();
        searchQuery = searchQuery.toLowerCase();

        // Prevent displaying the entire array if the searchQuery is empty on submit
        if ( searchQuery === "" ) {

            // Display an error message (just use = and not += to prevent displaying error message as many times as array.length)
            results.innerHTML = `
                <li>Please enter a search query</li>
            `;
        }

        // Check if there is a match between array and the searchQuery
        else if ( item.includes( searchQuery ) ) {

            // Display a list of results when there is a match (+= makes sure they are added to the total of results)
            results.innerHTML += `
                <li>${ item }</li>
            `;
        }

        // Prevent displaying no results when there is no match (NOT WORKING PROPERLY YET!)
        /*
            // Option 1:
            else {
                results.innerHTML = `
                    <li>No results found</li>
                `
            }

            // Option 2:
            if ( !item.includes( searchQuery ) ) {
                results.innerHTML = `
                    <li>Sorry, there are no results matching your search query</li>
                `
            }
        */
    } );

};