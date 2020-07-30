require('dotenv').config()
const express = require('express')
const router = express.Router()
const Spotify = require('node-spotify-api')

// create a API Spotify Client
let spotify = new Spotify({
    id: process.env.CLIENT_ID,
    secret: process.env.CLIENT_SECRET
});

//Store the results of a request to spotify
let results = [];

// GET ROUTE
router.post('/', function(req, res) {    
    //Get the type of Query from the User
    let type = req.body.param_type;

    //Get the query from the user
    let query = req.body.param_query;
    //Clear out old results
    results = [];
    //Make a request to Spotify
    spotify.search({type: type, query: query})
        .then(function (spotRes) {
        

            // Store the artist, song, preview link, and album in the results array
            spotRes[type+'s'].items.forEach(function(ea){
                if (type == 'album') {
                    results.push({id: ea.id,
                                uri: ea.uri,
                                image: ea.images[0],
                                name: ea.name,
                                artist: ea.artists[0].name,
                                // link: ea.external_urls.spotify
                    });
                } else if (type == 'artist') {
                    results.push({id: ea.id,
                                uri: ea.uri,
                                image: ea.images[0],
                                name: ea.name,
                                // link: ea.external_urls.spotify
                    });
                } else if (type == 'track') {
                    results.push({id: ea.id,
                                uri: ea.uri,
                                name:ea.name,
                                artist: ea.artists[0].name,
                                album: ea.album.name,
                                // link: ea.external_urls.spotify,
                                preview: ea.preview_url
                    });
                } 
            });
            res.send({results: results});
        })
        .catch(function (err) {
            console.log(err);
            throw err;
        });
    
});

// View tracks from album
router.get('/:id', (req, res) => {
    spotify
    .request('https://api.spotify.com/v1/albums/'+ req.params.id + '/tracks')
    .then(function(data) {
      res.send({results: data.items})
    })
    .catch(function(err) {
    console.error('Error occurred: ' + err); 
    })
});

module.exports = router