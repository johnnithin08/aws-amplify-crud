import Amplify, { Analytics, Storage, API } from 'aws-amplify';

import awsconfig from './aws-exports';
API.configure(awsconfig);

const GetEventButton = document.getElementById('GetEventButton');
const AddEventButton = document.getElementById('AddEventButton');
const UpdateEventButton = document.getElementById('UpdateEventButton');
const DeleteEventButton = document.getElementById('DeleteEventButton');

GetEventButton.addEventListener('click', async (evt) => {
    console.log('calling api');
    const response = await API.get('devamlifytest', '/items');
    alert(JSON.stringify(response, null, 2));
  });

AddEventButton.addEventListener('click', async (evt) => {
    console.log('calling api');
    const response = await API.put('devamlifytest', '/items');
    alert(JSON.stringify(response, null, 2));
  });

UpdateEventButton.addEventListener('click', async (evt) => {
    console.log('calling api');
    const response = await API.post('devamlifytest', '/items');
    alert(JSON.stringify(response, null, 2));
  });

DeleteEventButton.addEventListener('click', async (evt) => {
    console.log('calling api');
    const response = await API.del('devamlifytest', '/items');
    alert(JSON.stringify(response, null, 2));
  });

