import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

interface CreatePostDate {
  title: string;
  desc: string;
}

const CreatePost = () => {
  const [user] = useAuthState(auth);
  const schema = yup.object().shape({
    title: yup.string().required("You must add a title"),
    desc: yup.string().required("Add description"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePostDate>({
    resolver: yupResolver(schema),
  });

  const postRef = collection(db, "posts");
  const navigate = useNavigate();

  const onCreatePost = async (data: CreatePostDate) => {
    console.log(data);
    await addDoc(postRef, {
      title: data.title,
      description: data.desc,
      username: user?.displayName,
      id: user?.uid,
    });
    alert("Post added");
    navigate("/");
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-red-200 m-2 p-5 rounded-md text-2xl mt-5">
        <h1 className="text-center text-white text-4xl">Create post</h1>
        <form onSubmit={handleSubmit(onCreatePost)}>
          <input
            type="text"
            placeholder="Title"
            className="p-2 rounded-md m-2"
            {...register("title")}
          />
          <p className="text-red-500">{errors.title?.message}</p>
          <textarea
            placeholder="Desciption"
            className="p-2 rounded-md m-2"
            {...register("desc")}
          />
          <p className="text-red-500">{errors.desc?.message}</p>
          <input
            type="submit"
            className="p-2 m-2 bg-red-300 rounded-md text-white hover:bg-red-500 "
          />
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
