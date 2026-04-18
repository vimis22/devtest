import auth from '@react-native-firebase/auth';
import { GoogleSignin, isSuccessResponse } from '@react-native-google-signin/google-signin';
import { AccessToken, LoginManager } from 'react-native-fbsdk-next';

GoogleSignin.configure({
  webClientId: '582978776263-ss2h0rdu87ekr6hbu6qjvfpcfttj490b.apps.googleusercontent.com',
});

export const signInWithGoogle = async (): Promise<void> => {
  await GoogleSignin.hasPlayServices();
  const response = await GoogleSignin.signIn();
  if (!isSuccessResponse(response)) {
    throw new Error('Google Sign-In was cancelled');
  }
  const { idToken } = response.data;
  const credential = auth.GoogleAuthProvider.credential(idToken);
  await auth().signInWithCredential(credential);
};

export const signInWithFacebook = async (): Promise<void> => {
  const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  if (result.isCancelled) {
    throw new Error('Facebook login cancelled');
  }
  const data = await AccessToken.getCurrentAccessToken();
  if (!data) {
    throw new Error('No Access Token');
  }
  const credential = auth.FacebookAuthProvider.credential(data.accessToken);
  await auth().signInWithCredential(credential);
};

export const signOut = async (): Promise<void> => {
  await auth().signOut();
};

export const getCurrentUser = () => auth().currentUser;
