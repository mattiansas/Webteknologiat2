// Select elements
const fetchButton = document.getElementById('fetch-btn');
const counterElement = document.getElementById('counter');
const outputElement = document.getElementById('output');
const spinner = document.getElementById('loading-spinner');
const accordion = document.getElementById('accordionFlushExample'); // Accordion container

// Initialize counter
let fetchCounter = 0;

function getData() {
    spinner.classList.remove('d-none'); // Show the spinner

    setTimeout(() => {
        fetch('http://numbersapi.com/random/trivia') // API URL
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text(); // NumbersAPI returns plain text
            })
            .then(data => {
                // Check if the API response contains an error message
                if (data.includes('ERROR')) {
                    console.error('Fetch unsuccessful:', data);
                    alert(`Fetch unsuccessful: ${data}`);
                    return; // Exit early since the fetch wasn't successful
                }

                // Increment and update the counter
                fetchCounter++;
                counterElement.textContent = fetchCounter;

                // Append fetched data to the output section
                const newResult = document.createElement('p');
                newResult.textContent = data;
                outputElement.appendChild(newResult);

                console.log('Fetch successful:', data); // Log success

                // Add a new accordion item with the fetched data
                addAccordionItem(fetchCounter, data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                alert('An error occurred while fetching data. Please try again.');
            })
            .finally(() => {
                spinner.classList.add('d-none'); // Hide the spinner
            });
    }, 2000); // 2-second delay
}

// Function to create and add accordion items dynamically
function addAccordionItem(fetchCount, content) {
    // Create the accordion item
    const accordionItem = document.createElement('div');
    accordionItem.className = 'accordion-item';

    // Create the header and button
    const accordionHeader = document.createElement('h2');
    accordionHeader.className = 'accordion-header';

    const accordionButton = document.createElement('button');
    accordionButton.className = 'accordion-button collapsed';
    accordionButton.type = 'button';
    accordionButton.setAttribute('data-bs-toggle', 'collapse');
    accordionButton.setAttribute('data-bs-target', `#flush-collapse${fetchCount}`);
    accordionButton.setAttribute('aria-expanded', 'false');
    accordionButton.setAttribute('aria-controls', `flush-collapse${fetchCount}`);
    accordionButton.textContent = `Haku ${fetchCount}`; // Label with fetch count

    // Create the collapsible section
    const accordionCollapse = document.createElement('div');
    accordionCollapse.className = 'accordion-collapse collapse';
    accordionCollapse.id = `flush-collapse${fetchCount}`;
    accordionCollapse.setAttribute('data-bs-parent', '#accordionFlushExample');

    const accordionBody = document.createElement('div');
    accordionBody.className = 'accordion-body';
    accordionBody.textContent = content; // Add fetched content to the body

    // Assemble the accordion item
    accordionHeader.appendChild(accordionButton);
    accordionCollapse.appendChild(accordionBody);
    accordionItem.appendChild(accordionHeader);
    accordionItem.appendChild(accordionCollapse);

    // Append the new item to the accordion container
    const accordion = document.getElementById('accordionFlushExample');
    accordion.appendChild(accordionItem);
}