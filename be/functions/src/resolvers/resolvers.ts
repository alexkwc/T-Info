/* eslint-disable max-len */
import dateScalar from "../scalar/date";
import IntelType, {IntelName} from "../types/intel";
import functions from "firebase-functions";
import {getFirestore} from "firebase-admin/firestore";
import {initializeApp} from "firebase-admin/app";

initializeApp(functions.config().firebase);

const db = getFirestore();
const intelCollection = db.collection(IntelName);

const createdAt = "createdAt" as const;
const resolvers = {
  Date: dateScalar,
  Query: {
    intels: async (): Promise<IntelType[]> => {
      const docs = (await intelCollection.get()).docs;
      return docs.map((i) => i.data() as IntelType);
    },
    intelsByLocation: async (_: unknown, {x, y}: {x: number, y: number}): Promise<IntelType[]> => {
      const docs = (await intelCollection.where("x", "==", x).where("y", "==", y).orderBy(createdAt, "desc").get()).docs;
      return docs.map((i) => i.data() as IntelType);
    },
  },
  Mutation: {
    reportIntel: async (
        _: unknown,
        intel: Omit<IntelType, typeof createdAt>
    ): Promise<IntelType> => {
      const result = await intelCollection.add({...intel, createdAt: +new Date()});
      return (await result.get()).data() as IntelType;
    },
  },
};

export default resolvers;
