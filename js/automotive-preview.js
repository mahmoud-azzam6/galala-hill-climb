const buttons = document.querySelectorAll(".category-btn");

const image = document.getElementById("categoryImage");
const category = document.getElementById("categoryType");
const title = document.getElementById("categoryTitle");
const description = document.getElementById("categoryDescription");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        image.style.opacity = 0;

        setTimeout(() => {

            image.src = button.dataset.image;

            category.textContent = button.dataset.category;

            title.textContent = button.dataset.title;

            description.textContent = button.dataset.description;

            image.style.opacity = 1;

        },200);

    });

});