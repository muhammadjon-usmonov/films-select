
var elForm = document.querySelector(".form")
var elList = document.querySelector(".films__list");
var elFilmTemplate = document.querySelector("#films__template").content;
var elGerneTemlate = document.querySelector("#films-genre").content;
var elSelect = document.querySelector(".form__select");

function normalizeDate (dateFormat) {

    let date = new Date (dateFormat);
    let day = String(date.getDate()).padStart(2, 0);
    let month = String(date.getMonth() + 1).padStart(2, 0);
    let year = String(date.getFullYear()).padStart(2, 0);

    return (day + '.' + month + '.' + year);
}



function renderGernes(array, element){
    element.innerHTML = null;

    array.forEach(genre => {

        var genreTemplate = elGerneTemlate.cloneNode(true);

        genreTemplate.querySelector(".genres__item").textContent = genre;

        element.appendChild(genreTemplate);
    })
}

function renderFilms(array, element){
    element.innerHTML = null;
        
    array.forEach(film => {

        var filmsTemplate = elFilmTemplate.cloneNode(true)

        filmsTemplate.querySelector(".films__img").src = film.poster;
        filmsTemplate.querySelector(".films__title").textContent = film.title;
        filmsTemplate.querySelector(".films__text").textContent = film.overview;
        filmsTemplate.querySelector(".films__time").textContent = normalizeDate(film.release_date);
        

        var elGenres =  filmsTemplate.querySelector(".films__genres");

        renderGernes(film.genres, elGenres);

        element.appendChild(filmsTemplate);  
})
}

elForm.addEventListener("submit", (evt)=>{
    evt.preventDefault();

   
   
});

renderFilms(films,elList);



