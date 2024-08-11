import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";

export interface Posts {
  id: string;
  username: string;
  title: string;
  description: string;
}
const Home = () => {
  const postRef = collection(db, "posts");
  const [posts, setPosts] = useState<Posts[] | null>(null);

  const displayPost = async () => {
    const data = await getDocs(postRef);
    console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setPosts(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Posts[]
    );
  };

  useEffect(() => {
    displayPost();
  }, []);
  return (
    <div className="flex justify-center items-center text-center p-2 flex-wrap">
      {/* <h1>Home Page</h1> */}
      <div>
        <h1>
          {posts?.map((data) => (
            <div className="bg-red-500 m-2 p-6 rounded-md flex flex-col flex-wrap">
              <h1 className="text-4xl">{data.title} </h1>
              <h1 className="text-xl">{data.description} </h1>
              <h1 className="italic"> @{data.username} </h1>
              <button className="text-2xl bg-red-300 p-2 m-2 rounded-lg hover:bg-yellow-300">
                👍
              </button>
            </div>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default Home;
