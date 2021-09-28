console.log('client side js!');

const searchForm = document.querySelector('form');
const query = document.querySelector('input');
const result = document.querySelector('#result');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const search = query.value;
	console.log(search);
    fetch("https://genius.p.rapidapi.com/search?q="+encodeURIComponent(search), {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "genius.p.rapidapi.com",
		"x-rapidapi-key": "d84d3570cbmsh4cf2e7f5a3d5ce8p1e433ejsnde64c49690bc"
	}
})
.then(response => {
	const songID = response.response.hits[0].result.api_path;
	fetch("https://genius.p.rapidapi.com/"+encodeURIComponent(songID), {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "genius.p.rapidapi.com",
		"x-rapidapi-key": "d84d3570cbmsh4cf2e7f5a3d5ce8p1e433ejsnde64c49690bc"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
})
.catch(err => {
	console.error(err);
});
})
