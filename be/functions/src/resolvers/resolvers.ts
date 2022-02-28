import admin from "firebase-admin";
import UserType from "../types/user";

admin.initializeApp();

const db = admin.firestore();
const userCollection = db.collection("users");
const fetchAllUsers = async (callback: (data: unknown) => void) => {
  userCollection.get().then(
      (item) => {
        const items: unknown[] = [];
        item.docs.forEach((item) => {
          items.push(item.data());
        });
        return callback(items);
      }
  ).catch(console.log);
};

const resolvers = {
  Query: {
    users: () => {
      return new Promise((resolve) => {
        fetchAllUsers(resolve);
      });
    },
  },
  Mutation: {
    addUser: async (
        _: unknown,
        user: UserType
    ): Promise<void> => {
      await userCollection.add(user);
    },
  },
};

export default resolvers;
