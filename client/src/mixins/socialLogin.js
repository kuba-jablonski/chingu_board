import firebase from 'firebase';

export default {
    data() {
        return {
            providers: {
                google: new firebase.auth.GoogleAuthProvider(),
                github: new firebase.auth.GithubAuthProvider()
            }
        }
    },
    methods: {
        signInWithProvider(provider) {
            firebase.auth().signInWithRedirect(provider);
        }
    }
}