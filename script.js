document.addEventListener("DOMContentLoaded", function () {
  const imageSelector = document.getElementById("imageSelector");
  const imageContainer = document.getElementById("imageContainer");

  imageSelector.addEventListener("change", function () {
    const selectedImage = this.value;
    const imagePath = `src/${selectedImage}`; // Assuming your images are in a folder named "images"

    // Clear previous images
    imageContainer.innerHTML = "";

    // If "Image 4" is selected
    if (selectedImage === "image4") {
      const slideshowImages = ["w4.jpg", "w5.jpg", "w6.jpg"]; // List of images for slideshow

      // Create a container for the slideshow
      const slideshowContainer = document.createElement("div");
      slideshowContainer.classList.add("slideshow");

      // Create image elements for each image in the slideshowImages array
      slideshowImages.forEach(function (imageSrc, index) {
        const imageElement = document.createElement("img");
        imageElement.src = `src/${imageSrc}`;
        if (index === 0) {
          imageElement.classList.add("active");
        }
        slideshowContainer.appendChild(imageElement);
      });

      // Append slideshow container to the imageContainer
      imageContainer.appendChild(slideshowContainer);

      // Start slideshow
      startSlideshow();
    } else {
      // Create new image element
      const imageElement = document.createElement("img");
      imageElement.src = imagePath;

      // Append image to container
      imageContainer.appendChild(imageElement);
    }
  });

  // Function to start the slideshow
  function startSlideshow() {
    const slideshowImages = document.querySelectorAll(".slideshow img");
    let currentIndex = 0;

    // Function to show the next image in the slideshow
    function showNextImage() {
      // Hide current image
      slideshowImages[currentIndex].classList.remove("active");
      // Increment index
      currentIndex = (currentIndex + 1) % slideshowImages.length;
      // Show next image
      slideshowImages[currentIndex].classList.add("active");
    }

    // Start the slideshow
    setInterval(showNextImage, 3000); // Change slide every 3 seconds (adjust as needed)
  }
});
