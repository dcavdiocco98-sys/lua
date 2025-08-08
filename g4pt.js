/*
let offsetX = 0; // Offset for dragging
let offsetY = 0; // Offset for dragging
let isDragging = false; // Flag to indicate dragging state
let startX, startY; // Start position of the mouse
let scale = 1; // Scale for zooming
let isErased = false; // Flag to check if the canvas is erased

function dibujador() {
    if (isErased) return; // Skip drawing if the canvas is erased
    
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height); // Clear the canvas before redrawing

    function rectas(x1, y1, x2, y2, ancho, color) {
        ctx.setLineDash([5, 3]); // Dashes are 5px and spaces are 3px
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = ancho;
        ctx.moveTo(x1 * scale + offsetX, y1 * scale + offsetY); // Add offsets for dragging
        ctx.lineTo(x2 * scale + offsetX, y2 * scale + offsetY); // Add offsets for dragging
        ctx.stroke();
    }

    function rectangulos(x, y, width, height, color) {
        ctx.fillStyle = color; // Use the color argument
        ctx.fillRect(x * scale + offsetX, y * scale + offsetY, width * scale, height * scale); // Apply offsets and scale
    }

    let color = "#444600";
    let ancho = 0.2;

    // Draw vertical lines
    for (let i = 1; i < 78; i++) {
        if (i % 3 === 0) {
            color = "yellow";
            ancho = 0.4;
        }
        rectas(15.025 * i, 0, 15.025 * i, 1172, ancho, color);
        color = "#444600"; // Reset color for next iteration
        ancho = 0.2; // Reset width
    }

    // Draw horizontal lines
    color = "#444600";
    ancho = 0.2;
    for (let i = 1; i < 78; i++) {
        if (i % 3 === 0) {
            color = "yellow";
            ancho = 0.4;
        }
        rectas(0, 15.025 * i, 1172, 15.025 * i, ancho, color);
        color = "#444600"; // Reset color for next iteration
        ancho = 0.2; // Reset width
    }
}

function Borrador() {
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height); // Clear the canvas
    ctx.fillStyle = "black"; 
    ctx.fillRect(0, 0, c.width, c.height); // Fill it with black
    isErased = true; // Set the flag indicating the canvas is erased
}

// New function to reset the canvas and allow redrawing
function resetCanvas() {
    isErased = false; // Reset the erased flag
    dibujador(); // Redraw the grid
}

// Mouse event handlers for dragging
const canvas = document.getElementById("myCanvas");

canvas.addEventListener("mousedown", (event) => {
    startX = event.clientX - offsetX; // Use clientX for window-relative coordinates
    startY = event.clientY - offsetY; // Use clientY for window-relative coordinates
    isDragging = true; // Set dragging flag
});

canvas.addEventListener("mousemove", (event) => {
    if (isDragging) {
        // Calculate the new offset
        let newOffsetX = event.clientX - startX; // Use clientX
        let newOffsetY = event.clientY - startY; // Use clientY

        // Update the offsets without any constraints
        offsetX = newOffsetX;
        offsetY = newOffsetY;

        // Redraw the grid with the new offsets
        dibujador();
    }
});

canvas.addEventListener("mouseup", () => {
    isDragging = false; // Reset dragging flag
});

canvas.addEventListener("mouseleave", () => {
    isDragging = false; // Reset dragging flag if mouse leaves canvas
});

// Zoom functionality
function zoomIn() {
    if (scale < 3) { // Limit maximum zoom level
        scale *= 1.1; // Increase scale by 10%
        dibujador(); // Redraw the grid
    }
}

function zoomOut() {
    if (scale > 1) { // Ensure scale does not go below 1 (original size)
        scale *= 0.9; // Decrease scale by 10%
        dibujador(); // Redraw the grid
    }
}

// Resize function to adjust canvas size based on the parent element (website window size)
function resizeCanvas() {
    const canvas = document.getElementById("myCanvas");
    canvas.width = window.screen.width;  // Set canvas width to screen width
    canvas.height = window.screen.height; // Set canvas height to screen height
    dibujador(); // Redraw the grid
}

// Call resizeCanvas initially and on window resize
window.addEventListener('load', resizeCanvas);
window.addEventListener('resize', resizeCanvas);

// Clock functionality
function updateClock() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const timeString = now.toLocaleTimeString('en-US', options);
    
    document.getElementById('clock').textContent = timeString; // Update clock display
}

// Initialize the clock display
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);

// Draggable rectangle functionality
let isDraggingRectangle = false; // Flag to indicate if the rectangle is being dragged
let rectangleOffsetX = 0; // Offset for dragging
let rectangleOffsetY = 0; // Offset for dragging

const rectangle = document.getElementById("draggableRectangle");

// Mouse event handlers for dragging the rectangle
rectangle.addEventListener("mousedown", (event) => {
    isDraggingRectangle = true; // Set dragging flag
    rectangleOffsetX = event.clientX - rectangle.getBoundingClientRect().left; // Calculate offset
    rectangleOffsetY = event.clientY - rectangle.getBoundingClientRect().top; // Calculate offset
    rectangle.style.cursor = "grabbing"; // Change cursor to grabbing
});

document.addEventListener("mousemove", (event) => {
    if (isDraggingRectangle) {
        // Update rectangle position
        rectangle.style.left = `${event.clientX - rectangleOffsetX}px`;
        rectangle.style.top = `${event.clientY - rectangleOffsetY}px`;
    }
});

document.addEventListener("mouseup", () => {
    isDraggingRectangle = false; // Reset dragging flag
    rectangle.style.cursor = "grab"; // Change cursor back to grab
});
*/
//------------------------------------------------------------------------
let offsetX = 0; // Offset for dragging
let offsetY = 0; // Offset for dragging
let isDragging = false; // Flag to indicate dragging state
let startX, startY; // Start position of the mouse
let scale = 1; // Scale for zooming
let isErased = false; // Flag to check if the canvas is erased

function dibujador() {
    if (isErased) return; // Skip drawing if the canvas is erased
    
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height); // Clear the canvas before redrawing

    function rectas(x1, y1, x2, y2, ancho, color) {
        ctx.setLineDash([5, 3]); // Dashes are 5px and spaces are 3px
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = ancho;
        ctx.moveTo(x1 * scale + offsetX, y1 * scale + offsetY); // Add offsets for dragging
        ctx.lineTo(x2 * scale + offsetX, y2 * scale + offsetY); // Add offsets for dragging
        ctx.stroke();
    }

    let color = "#444600";
    let ancho = 0.2;

    // Draw vertical lines
    for (let i = 1; i < 78; i++) {
        if (i % 3 === 0) {
            color = "yellow";
            ancho = 0.4;
        }
        rectas(15.025 * i, 0, 15.025 * i, 1172, ancho, color);
        color = "#444600"; // Reset color for next iteration
        ancho = 0.2; // Reset width
    }

    // Draw horizontal lines
    for (let i = 1; i < 78; i++) {
        if (i % 3 === 0) {
            color = "yellow";
            ancho = 0.4;
        }
        rectas(0, 15.025 * i, 1172, 15.025 * i, ancho, color);
        color = "#444600"; // Reset color for next iteration
        ancho = 0.2; // Reset width
    }
}

function Borrador() {
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height); // Clear the canvas
    ctx.fillStyle = "black"; 
    ctx.fillRect(0, 0, c.width, c.height); // Fill it with black
    isErased = true; // Set the flag indicating the canvas is erased
}

// New function to reset the canvas and allow redrawing
function resetCanvas() {
    isErased = false; // Reset the erased flag
    dibujador(); // Redraw the grid
}

// Mouse event handlers for dragging
const canvas = document.getElementById("myCanvas");

canvas.addEventListener("mousedown", (event) => {
    startX = event.clientX; // Use clientX for window-relative coordinates
    startY = event.clientY; // Use clientY for window-relative coordinates
    isDragging = true; // Set dragging flag
});

canvas.addEventListener("mousemove", (event) => {
    if (isDragging) {
        // Calculate the new offset
        offsetX += event.clientX - startX; // Incremental update for dragging
        offsetY += event.clientY - startY; // Incremental update for dragging

        // Update start position for next mousemove
        startX = event.clientX;
        startY = event.clientY;

        // Redraw the grid with the new offsets
        dibujador();
    }
});

canvas.addEventListener("mouseup", () => {
    isDragging = false; // Reset dragging flag
});

canvas.addEventListener("mouseleave", () => {
    isDragging = false; // Reset dragging flag if mouse leaves canvas
});

// Zoom functionality
function zoomIn() {
    if (scale < 3) { // Limit maximum zoom level
        scale *= 1.1; // Increase scale by 10%
        dibujador(); // Redraw the grid
    }
}

function zoomOut() {
    if (scale > 1) { // Ensure scale does not go below 1 (original size)
        scale *= 0.9; // Decrease scale by 10%
        dibujador(); // Redraw the grid
    }
}

// Resize function to adjust canvas size based on the parent element (website window size)
function resizeCanvas() {
    const canvas = document.getElementById("myCanvas");
    canvas.width = window.innerWidth;  // Set canvas width to window width
    canvas.height = window.innerHeight; // Set canvas height to window height
    dibujador(); // Redraw the grid
}

// Call resizeCanvas initially and on window resize
window.addEventListener('load', resizeCanvas);
window.addEventListener('resize', resizeCanvas);

// Clock functionality
function updateClock() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const timeString = now.toLocaleTimeString('en-US', options);
    
    document.getElementById('clock').textContent = timeString; // Update clock display
}

// Initialize the clock display
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);

// Draggable rectangle functionality
let isDraggingRectangle = false; // Flag to indicate if the rectangle is being dragged
let rectangleOffsetX = 0; // Offset for dragging
let rectangleOffsetY = 0; // Offset for dragging

const rectangle = document.getElementById("draggableRectangle");

// Mouse event handlers for dragging the rectangle
rectangle.addEventListener("mousedown", (event) => {
    isDraggingRectangle = true; // Set dragging flag
    rectangleOffsetX = event.clientX - rectangle.getBoundingClientRect().left; // Calculate offset
    rectangleOffsetY = event.clientY - rectangle.getBoundingClientRect().top; // Calculate offset
    rectangle.style.cursor = "grabbing"; // Change cursor to grabbing
});

document.addEventListener("mousemove", (event) => {
    if (isDraggingRectangle) {
        // Update rectangle position
        rectangle.style.left = `${event.clientX - rectangleOffsetX}px`;
        rectangle.style.top = `${event.clientY - rectangleOffsetY}px`;
    }
});

document.addEventListener("mouseup", () => {
    isDraggingRectangle = false; // Reset dragging flag
    rectangle.style.cursor = "grab"; // Change cursor back to grab
});

