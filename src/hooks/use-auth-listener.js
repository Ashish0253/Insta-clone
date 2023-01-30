import { useContext, useEffect, useState } from "react";
// import { parse } from "tar/lib/pax";
import { FirebaseContext } from "../context/firebase";

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      //we have a user ... therefore we rcan store the user in localstorage
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      }
      // we dont have authUser, therefore clear the localstorage
      else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    return () => listener();
  }, [firebase]);
  return { user };
}
