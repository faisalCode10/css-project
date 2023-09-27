
  document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".Gallery-item");
    const allRadio = document.querySelector('input[data-type="*"]');
    const goodRadio = document.querySelector('input[data-type="good"]');
    const veryGoodRadio = document.querySelector('input[data-type="very good"]');
    const excellentRadio = document.querySelector('input[data-type="excellent"]');

    // Function to hide all gallery items
    function hideAllItems() {
      galleryItems.forEach((item) => {
        item.style.display = "none";
      });
    }

    // Function to show only the gallery items of a specific category
    function showItemsByCategory(category) {
      galleryItems.forEach((item) => {
        if (item.getAttribute("data-type") === category || category === "*") {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    }

    // Event listeners for radio buttons
    allRadio.addEventListener("click", () => {
      hideAllItems();
      showItemsByCategory("*");
    });

    goodRadio.addEventListener("click", () => {
      hideAllItems();
      showItemsByCategory("good");
    });

    veryGoodRadio.addEventListener("click", () => {
      hideAllItems();
      showItemsByCategory("very good");
    });

    excellentRadio.addEventListener("click", () => {
      hideAllItems();
      showItemsByCategory("excellent");
    });
  });

 
