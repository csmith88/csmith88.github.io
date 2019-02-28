import app from 'firebase/app';

const config = {
    apiKey: "AIzaSyCfYYugHqgY8BKGsYenehbUN2QLxOXKBzg",
    authDomain: "wednesday-basketball.firebaseapp.com",
    databaseURL: "https://wednesday-basketball.firebaseio.com",
    projectId: "wednesday-basketball",
    storageBucket: "",
    messagingSenderId: "700617691605"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
    }
}

export default Firebase;