// Initialize an array to store the dish IDs
let selectedDishes = [];

// Variables to track long press
let pressTimer;
let longPressDuration = 600; // Duration in milliseconds for a long press

// Get the modal and buttons
const modal = document.getElementById("confirmationModal");
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");

// Function to handle long press
function handleLongPress(event, dishId, dishName) {
  event.preventDefault(); // Prevent the default context menu

  pressTimer = setTimeout(() => {
    modal.style.display = "block";
    modal.querySelector("#dishName").textContent = dishName;
    confirmBtn.onclick = () => {
      selectedDishes.push(dishId);
      modal.style.display = "none";
      console.log("Selected Dishes:", selectedDishes);
    };
    cancelBtn.onclick = () => {
      modal.style.display = "none";
    };
  }, longPressDuration);

  // Clear timeout if the press is released before the long press duration
  event.target.addEventListener("mouseup", clearPressTimer);
  event.target.addEventListener("touchend", clearPressTimer);
}

// Clear the press timer
function clearPressTimer() {
  clearTimeout(pressTimer);
}

// Add event listeners to the dishes
document.querySelectorAll(".dish").forEach((dish) => {
  dish.addEventListener("mousedown", (event) =>
    handleLongPress(event, dish.id, dish.innerText)
  );
  dish.addEventListener("touchstart", (event) =>
    handleLongPress(event, dish.id, dish.innerText)
  );
});

// Close the modal if clicked outside of it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
