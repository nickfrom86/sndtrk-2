import './airtable.js';

const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
  clientId: b6a28d3f0b2a4f34af85d5ccb32214f5,
  clientSecret: 2cdf873ecf324d389668879da0f9c8b5
});
spotifyApi.clientCredentialsGrant()
  .then(data => {
    spotifyApi.setAccessToken(data.body['access_token']);
    // Now you can make authenticated requests to the Spotify API
  })
  .catch(error => {
    console.log('Error authenticating with Spotify API:', error);
  });
  const Airtable = require('airtable');

  const airtable = new Airtable({ apiKey: keysbCmKFPRBZkZi7 });
  const base = airtable.base(appXpnPyZSSb41dPT);
