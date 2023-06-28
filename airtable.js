import Airtable from 'airtable';

const airtable = new Airtable({ apiKey: keysbCmKFPRBZkZi7 });
const base = airtable.base(appXpnPyZSSb41dPT);

// Example code to create a new record in Airtable
base('Table Name').create(
  [
    {
      fields: {
        'Artist ID': 'Value 1',
        'Name': 'Value 2',
        'Followers': 'Value 3',
        'Popularity': 'Value 4',
        'URI': 'Value 5',
        'Timestamp': 'Value 6'
        // Add more fields as needed
      },
    },
  ],
  function (err, records) {
    if (err) {
      console.error('Error creating record in Airtable:', err);
      return;
    }
    console.log('Record created in Airtable:', records);
  }
);