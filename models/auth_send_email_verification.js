// [START auth_send_email_verification_modular]
import { getAuth, sendEmailVerification } from "firebase/auth";

const auth = getAuth();
sendEmailVerification(auth.currentUser)
    .then(() => {
        // Email verification sent!
        // ...
    });
// [END auth_send_email_verification_modular]