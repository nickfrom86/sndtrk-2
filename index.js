import './airtable.js';
import SpotifyWebApi from 'spotify-web-api-node';
import Airtable from 'airtable';

const spotifyApi = new SpotifyWebApi({
  clientId: 'b6a28d3f0b2a4f34af85d5ccb32214f5',
  clientSecret: '2cdf873ecf324d389668879da0f9c8b5'
});

const airtable = new Airtable({ apiKey: 'keysbCmKFPRBZkZi7' });
const base = airtable.base('appXpnPyZSSb41dPT');

spotifyApi.clientCredentialsGrant()
  .then(data => {
    const accessToken = data.body['access_token'];
    spotifyApi.setAccessToken(accessToken);
    // Now you can make authenticated requests to the Spotify API

    // Example artist ID
    const artistId = '0xOeVMOz2fVg5BJY3N6akT';

    spotifyApi.getArtist(artistId)
    .then(artist => {
      const artistData = {
        id: artist.body.id,
        followers: artist.body.followers.total,
        name: artist.body.name,
        popularity: artist.body.popularity,
        uri: artist.body.uri
      };
      
      // Create a new record in Airtable with a timestamp field
      const currentTimestamp = new Date().toISOString(); // Get the current timestamp
      base('SpotifyMetrics').create(
        [
          {
            fields: {
              'Artist ID': artistData.id,
              'Followers': artistData.followers,
              'Name': artistData.name,
              'Popularity': artistData.popularity,
              'URI': artistData.uri,
              'Timestamp': currentTimestamp // Add the timestamp field
            }
          }
        ],
        function (err, records) {
          if (err) {
            console.error('Error creating record in Airtable:', err);
            return;
          }
          console.log('Record created in Airtable:', records);
        }
      );
    })
    .catch(error => {
      console.log('Error retrieving artist:', error);
    });
  