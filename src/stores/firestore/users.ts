import { db } from '@/utils/firebase';
import { DBUser } from '@/types/db-user';
import {
  DocumentSnapshot,
  Timestamp,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc
} from 'firebase/firestore';

export const collectionName = 'users';

type Data = Omit<DBUser, 'uid'>;

export const docConverter = {
  toFirestore: (user: DBUser): Data => {
    const { uid, ...data } = user;
    return data;
  },
  fromFirestore: (snapshot: DocumentSnapshot, options: any): DBUser => {
    const data = snapshot.data(options) as any;
    const dataWithUid = { ...data, uid: snapshot.id } as DBUser;
    return dataWithUid;
  }
};

export const docRef = collection(db, collectionName).withConverter(
  docConverter
);

export const getDocRef = (uid: string) => doc(db, collectionName, uid);

export const createDBUser = async (
  data: Omit<Data, 'createdAt'>,
  uid: string
) => {
  const newDocRef = doc(docRef, uid);
  const sendData: Data = { ...data, createdAt: Timestamp.now() };
  await setDoc(newDocRef, sendData);
};

export const getAllDBUsers = async () => {
  const snapshot = await getDocs(docRef);
  const users: DBUser[] = snapshot.docs.map((doc) => doc.data());
  return users;
};

export const getDBUser = async (uid: string): Promise<DBUser> => {
  const snapshot = await getDoc(getDocRef(uid));
  return snapshot.data() as DBUser;
};

export const updateDBUser = async (uid: string, user: Data) => {
  await updateDoc(getDocRef(uid), user);
};

export const existsDBUser = async (uid: string) => {
  const snapshot = await getDoc(getDocRef(uid));
  return snapshot.exists();
};
