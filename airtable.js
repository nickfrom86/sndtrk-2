import Airtable from 'airtable';

const airtable = new Airtable({ apiKey: keysbCmKFPRBZkZi7 });
const base = airtable.base(appXpnPyZSSb41dPT);

// Example code to create a new record in Airtable
base('Table Name').create(
  [
    {
      fields: {
        'id': 'Value 1',
        'artist name': 'Value 2',
        'followers': 'Value 3',
        'popularity': 'Value 4',
        'uri': 'Value 5',
        'timestamp': 'Value 6'
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