import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../components/sign-up/sign-up-form.component";

import {
  SignInWithGooglePopup,
  SignInWithGoogleRedirect,
  auth,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await SignInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign IN Page</h1>
      <button onClick={logGoogleUser}>sign in with Google Popup</button>
      <SignUpForm />
    </div>
  );
};
export default SignIn;
