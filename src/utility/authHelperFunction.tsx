import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from '@react-native-firebase/auth';


GoogleSignin.configure({
    webClientId: '293357260144-oeuoul1beohic83lmo2imhmbg77a0ehs.apps.googleusercontent.com',
});

export const handleLogin = async () => {

    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const userData = auth().signInWithCredential(googleCredential);

    userData.then((user) => {
        console.log(user);
    }).catch((err) => {
        console.log(err);
    })

}

export const signOut = async () => {
    try {
        await GoogleSignin.revokeAccess();
        await auth().signOut();
    } catch (error) {
        console.log(error);
    }
}