import { docRef, getDBPosts } from '@/stores/firestore/posts';
import { DBHookProps } from '@/types/db-hooks-props';
import { DBPost } from '@/types/db-post';
import { onSnapshot } from 'firebase/firestore';
import { useState, useEffect } from 'react';

export const useDBPosts = (options: DBHookProps) => {
  const [posts, setPosts] = useState<DBPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!options.realtime) {
      getDBPosts().then((posts) => {
        setPosts(posts);
        setLoading(false);
      });
    } else {
      onSnapshot(docRef, (snapshot) => {
        const posts = snapshot.docs.map((doc) => doc.data() as DBPost);
        posts.sort((a, b) => {
          return b.createdAt.toMillis() - a.createdAt.toMillis();
        });
        setPosts(posts);
        setLoading(false);
      });
    }
  }, [options.realtime]);

  return { posts, loading };
};
