const movies = [
	{
		id: 1,
		movie: 'Malditos Bastardos',
		img: 'https://static.wikia.nocookie.net/hitlerparody/images/b/b5/1efab829ec3ca59984a7cc139e924529.jpg/revision/latest/scale-to-width-down/333?cb=20201026114929&path-prefix=es',
		sipnosis: 'En la Francia ocupada por los nazis durante la Segunda Guerra Mundial, un plan para asesinar a los líderes nazis por parte de un grupo de soldados judíos estadounidenses coincide con los planes vengativos de la dueña de un cine.',
	},
	{
		id: 2,
		movie: 'Kill Bill: Volumen 1',
		img: 'https://pics.filmaffinity.com/kill_bill_volume_1-216872360-mmed.jpg',
		sipnosis: 'Tras despertar de un coma de cuatro años, una antigua asesina se venga del equipo de asesinos que la traicionó.',
	},
	{
		id: 3,
		movie: 'Kill Bill: Volumen 2',
		img: 'https://static.wikia.nocookie.net/doblaje/images/0/05/81ECEBD76.jpg/revision/latest/scale-to-width-down/350?cb=20150701191843&path-prefix=es',
		sipnosis: 'La novia continúa su búsqueda de venganza contra su antiguo jefe y amante Bill, el solitario portero Budd y la traicionera Elle, tuerta.',
	},
	{
		id: 4,
		movie: 'Pulp Fiction',
		img: 'https://static.posters.cz/image/750webp/1288.webp',
		sipnosis:'Las vidas de dos mafiosos, un boxeador, la esposa de un gánster y un par de bandidos se entrelazan en cuatro historias de violencia y redención.',
	},
	{
		id: 5,
		movie: 'Reservoir Dogs',
		img: 'https://es.web.img2.acsta.net/c_310_420/pictures/21/05/25/13/54/5939417.jpg',
		sipnosis: 'Cuando un sencillo robo de joyas acaba terriblemente mal, los delincuentes que sobreviven comienzan a sospechar que uno de ellos es informador de la policía.',
	},
	{
		id: 6,
		movie: 'Death Proof',
		img: 'https://pics.filmaffinity.com/grindhouse_death_proof-587849187-mmed.jpg',
		sipnosis: 'Dos grupos separados de mujeres voluptuosas son acechadas en diferentes momentos por un especialista con cicatrices que utiliza sus coches ""a prueba de muerte"" para ejecutar sus planes asesinos.',
	},
	{
		id: 7,
		movie: 'Érase una vez en... Hollywood',
		img: 'https://pics.filmaffinity.com/once_upon_a_time_in_hollywood-735160977-mmed.jpg',
		sipnosis: 'Un actor de televisión olvidado y su doble de acción se esfuerzan por alcanzar la fama y el éxito en los últimos años de la edad de oro de Hollywood en Los Ángeles de 1969.',
	},
	{
		id: 8,
		movie: 'Los Ochos Mas Odiados',
		img: 'https://memocineblog.files.wordpress.com/2016/09/wp-1474954112044.jpg',
		sipnosis: 'En pleno invierno en Wyoming, un cazador de recompensas y su prisionero encuentran refugio en una cabaña habitada por una colección de personajes infames.',
	},
	{
		id: 9,
		movie: 'Django Unchained',
		img: 'https://losinterrogantes.com/wp-content/uploads/2013/01/Cartel-Django-Desencadenado-300x427.jpg',
		sipnosis:'Con la ayuda de un cazarrecompensas alemán, un esclavo liberado se propone rescatar a su esposa de un brutal propietario de una plantación en Mississippi.',
	},
	]

const img = document.querySelector('.img_movie');
const titleMovie = document.querySelector('.title_movie');
const sipnosiMovie = document.querySelector('.sipnosis')


const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const btnRandom = document.querySelector('.random');


let currentItem = 0;
btnRandom.addEventListener('click', randomMovie)

window.addEventListener('DOMContentLoaded',()=>{
	showMovies(currentItem)
} )

function showMovies(film){
	let filmItem =  movies[film];
	titleMovie.textContent = filmItem.movie;
	sipnosiMovie.textContent= filmItem.sipnosis;
	img.src = filmItem.img;
	img.style.animation = 'bounce 2s infinite'

// setTimeout(()=>{
// 	img.style.animation = '';
// }, 2000)


}

function randomMovie (){
	let aleatorio = (Math.floor(Math.random()* movies.length));
	showMovies(aleatorio)
}


const previous = ()=>{
	currentItem--
	if(currentItem < 0){
		currentItem = movies.length -1
	}
	showMovies(currentItem)
}

const nextMovie = ()=>{
	currentItem++
	if(currentItem > movies.length -1){
		currentItem = 0;
	}
	showMovies(currentItem)
}

btnPrev.addEventListener('click', previous);
btnNext.addEventListener('click', nextMovie);