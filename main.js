document.addEventListener("DOMContentLoaded", function() {
    
    const menuPlaceholder = document.getElementById('menu-placeholder');

    if (menuPlaceholder) {
        fetch('../../_menu.html')
            .then(response => response.text())
            .then(data => {
                menuPlaceholder.innerHTML = data;
                
                const allDetails = document.querySelectorAll('.accordion-details');

                allDetails.forEach(details => {
                    // The 'toggle' event fires when a <details> element is opened or closed
                    details.addEventListener('toggle', event => {
                        // If the element was just opened
                        if (event.target.open) {
                            // Close all others
                            allDetails.forEach(otherDetails => {
                                if (otherDetails !== event.target) {
                                    otherDetails.open = false;
                                }
                            });
                        }
                    });
                });
            })
            .catch(error => console.error('Error fetching the menu:', error));
    }
});