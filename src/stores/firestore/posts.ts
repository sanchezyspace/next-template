import { db } from '@/utils/firebase';
import { DBPost } from '@/types/db-post';
import {
  DocumentSnapshot,
  addDoc,
  collection,
  doc,
  getDocs
} from 'firebase/firestore';

export const collectionName = 'posts';
type Data = Omit<DBPost, 'uid'>;
export const docConverter = {
  toFirestore: (post: DBPost): Data => {
    const { uid, ...data } = post;
    return data;
  },
  fromFirestore: (snapshot: DocumentSnapshot, options: any): DBPost => {
    const data = snapshot.data(options) as any;
    const dataWithUid = { ...data, uid: snapshot.id } as DBPost;
    return dataWithUid;
  }
};

export const docRef = collection(db, collectionName).withConverter(
  docConverter
);
export const getDocRef = (uid: string) => doc(db, collectionName, uid);

export const createPost = async (post: Data) => {
  await addDoc(docRef, post);
};

export const getPosts = async () => {
  const snapshot = await getDocs(docRef);
  const posts: DBPost[] = snapshot.docs.map((doc) => doc.data());
  posts.sort((a, b) => {
    return a.createdAt.toMillis() - b.createdAt.toMillis();
  });
  return posts;
};
