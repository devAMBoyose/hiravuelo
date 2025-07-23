
  function toggleReadMore(button) {
    const description = button.closest(".property-description");
    const moreText = description.querySelector(".more-text");
    const shortText = description.querySelector(".short-text");

    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      button.textContent = "Read less";
    } else {
      moreText.style.display = "none";
      button.textContent = "Read more";
    }
  }

