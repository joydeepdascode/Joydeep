# Joydeep_Portfolio

.image {
    flex: 1;
    flex-basis: 30%; /* Controls how much space the image takes */
    width: 100%;
    max-width: 350px; /* Increase max width */
    max-height: 350px; /* Increase max height */
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.image img {
    width: 100%;
    height: auto; /* Maintain aspect ratio */
    object-fit: contain; /* Ensures the full image is visible */
    border-radius: 8px;
}