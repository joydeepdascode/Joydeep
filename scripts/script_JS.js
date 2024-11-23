
        // -----------------------------------------------------------------------------

        // --------------------------------------------------------

        // JavaScript to handle tag selection and project filtering
        const skillTags = document.querySelectorAll('.skill_tags li');
        const projectContainers = document.querySelectorAll('.projects_container');

        let selectedTags = new Set();

        skillTags.forEach(tag => {
            tag.addEventListener('click', () => {
                const tagValue = tag.getAttribute('data-tag');
                
                // Toggle the selection of tags
                if (selectedTags.has(tagValue)) {
                    selectedTags.delete(tagValue);
                    tag.style.backgroundColor = ""; // Remove highlight
                    tag.style.color = ""; // Remove highlight
                } else {
                    selectedTags.add(tagValue);
                    tag.style.backgroundColor = "#bcdce8"; // Highlight selected tag
                    tag.style.color = "black";  // Change text color to green
                }
                
                filterProjects(); // Call function to filter projects
            });
        });

        function filterProjects() {
            if (selectedTags.size === 0) {
                // If no tags are selected, show all projects
                projectContainers.forEach(project => {
                    project.style.display = 'flex';
                });
            } else {
                projectContainers.forEach(project => {
                    const projectTags = project.getAttribute('data-tags').split(' ');

                    // Check if the project contains ALL selected tags
                    const containsAllTags = [...selectedTags].every(tag => projectTags.includes(tag));
                    
                    // Show or hide the project based on the check
                    if (containsAllTags) {
                        project.style.display = 'flex'; // Show projects that contain all selected tags
                    } else {
                        project.style.display = 'none'; // Hide projects that don't match all selected tags
                    }
                });
            }
        }

        // --------------------------------------------------------


        function scrollSkills(scrollAmount) {
            const skillLists = document.querySelectorAll('.category ul');
            skillLists.forEach(list => list.scrollBy({ left: scrollAmount, behavior: 'smooth' }));
        }
        

        // --------------------------------------------------------

        // Example of showing a confirmation message after form submission
        document.querySelector('.contact-form').addEventListener('submit', function(event) {
            event.preventDefault();  // Prevents the default form submission behavior
            
            // Show a success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Optionally, reset the form after submission
            this.reset();
        });

        // --------------------------------------------------------

        // Get the current visit count from localStorage, or set to 0 if not set
        let visitCount = localStorage.getItem('visitCount') ? parseInt(localStorage.getItem('visitCount')) : 0;

        // Increment the visit count
        visitCount++;

        // Save the new visit count in localStorage
        localStorage.setItem('visitCount', visitCount);

        // Display the visit count on the page
        document.getElementById('visitCount').innerText = `You have visited this page ${visitCount} time(s).`;


        // -----------------------------------------------------------------------------
