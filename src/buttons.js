function resetPage() {
    window.location.reload()
}

// Info

let infoContainer = document.getElementById('info-container')
let infoButton = document.getElementById('info-button')

function openMenu() {
    infoContainer.classList.remove("hidden");
    infoButton.classList.add("hidden");
}

function closeMenu() {
    infoContainer.classList.add("hidden");
    infoButton.classList.remove("hidden");
}