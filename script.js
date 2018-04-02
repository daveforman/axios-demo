const BASE_URL = "http://api.reactprototypes.com";
const API_KEY = "?key=testuser1234";

axios.get(`${BASE_URL}/todos${API_KEY}`).then(resp => {
    console.log("Server Response:", resp);
}).catch(err => {
    console.log("There was an error:", err.message);
});

const newItem = {
    title: 'Dave the awesome',
    details: "What are you smoking?"
}

// axios.post(`${BASE_URL}/todos${API_KEY}`, newItem).then(resp => {
//     console.log('Add response:', resp);
// });

const itemId = "5ac278d8329150131fbbff68";

axios.get(`${BASE_URL}/todos/${itemId + API_KEY}`).then(resp => {
    console.log("Server Response:", resp);
}).catch(err => {
    console.log("There was an error:", err.message);
});