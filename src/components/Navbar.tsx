import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };
  return (
    <div className="bg-red-400 flex justify-end text-sm text-white p-2 sm:text-2xl w-full">
      <Link to="/" className="mr-5 underline hover:no-underline">
        Home{" "}
      </Link>{" "}
      {!user ? (
        <Link to="login" className="mr-5 underline hover:no-underline">
          Login
        </Link>
      ) : (
        <Link to="/createpost" className="mr-5 underline hover:no-underline">
          create post
        </Link>
      )}
      <div className="flex">
        {user && (
          <>
            <h2 className="mr-2">{user?.displayName}</h2>
            <img
              src={user?.photoURL || ""}
              width={40}
              height={40}
              className="rounded-full mr-2"
            />
            <button
              onClick={signUserOut}
              className="mr-2 text-sm sm:text-xl text-black hover:bg-red-200 border rounded-md p-1"
            >
              Log out -
            </button>
          </>
        )}
      </div>
    </div>
  );
};
