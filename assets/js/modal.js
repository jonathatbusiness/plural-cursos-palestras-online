//getting modal opening

const modalBtns = document.querySelectorAll("[data-target]");
const close_btns = document.querySelectorAll(".popup-close");
const overlay = document.querySelector("#overlay");

modalBtns.forEach((btn) => {

    btn.addEventListener('click', () => {
        
        document.querySelector(btn.dataset.target).classList.add("active");
        document.querySelector(btn.dataset.target).classList.remove("hide");

        overlay.classList.add('active');
    });
    
});

close_btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        
        btn.closest(".popup").classList.remove("active");
        btn.closest(".popup").classList.add("hide");
        
        overlay.classList.remove("active");
    });
});



window.onclick = (e) => {
    if (e.target == overlay) {
        const modals = document.querySelectorAll(".popup");
        modals.forEach((popup) =>
        popup.classList.remove("active"));
        modals.forEach((popup) =>
        popup.classList.add("hide"));
        overlay.classList.remove("active");
    }
};














