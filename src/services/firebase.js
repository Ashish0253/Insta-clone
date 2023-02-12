import { firebase } from "../lib/firebase"; // FieldValue

export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  //   console.log(result);

  return result.docs.map((user) => user.data().length > 0);
}

// get user from the firestore where userId (passed from the auth)
export async function getUserByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", userId)
    .get();

  // console.log("result", result);

  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  // console.log(user);
  return user;
}

export async function getSuggestedProfiles(userId) {
  const result = await firebase.firestore().collection("users").limit(10).get();

  console.log(result);
  return result;
}
