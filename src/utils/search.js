const request = require('request');

const options =  {
  method: 'GET',
  url: 'https://genius.p.rapidapi.com/search',
  qs: {q: 'Kendrick Lamar'},
  headers: {
    'x-rapidapi-host': 'genius.p.rapidapi.com',
    'x-rapidapi-key': 'd84d3570cbmsh4cf2e7f5a3d5ce8p1e433ejsnde64c49690bc',
    useQueryString: true
  }
};

request(options, function (error, body) {
	if (error) {
        return console.log(error);
    }

	console.log(body.meta);
});
