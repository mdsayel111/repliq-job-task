// "use client";
// import { setUser } from "@/redux/slices/user-slice";
// import axiosInstance from "@/utils/axios-instance";
// import Link from "next/link";
// import { useRef } from "react";
// import toast from "react-hot-toast";
// import { useDispatch, useSelector } from "react-redux";

// const Navbar = () => {
//   const navCloseBtnRef = useRef(null);
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.user?.user);

//   const handleNavClose = () => {
//     navCloseBtnRef.current.click();
//   };

//   const handleLogout = async () => {
//     try {
//       await axiosInstance.get("/logout");
//       dispatch(setUser({}));
//       toast.success("Logged out successfully");
//     } catch (error) {
//       toast.error("Something went wrong");
//     }
//   };
//   return (
//     <nav className="fixed z-50 w-full bg-white  md:absolute md:bg-transparent">
//       <div className="container m-auto px-2 md:px-12 lg:px-7">
//         <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
//           <input
//             type="checkbox"
//             name="toggle_nav"
//             id="toggle_nav"
//             className="peer hidden"
//           />
//           <div className="w-full px-6 flex justify-between lg:w-max md:px-0 z-30">
//             <Link
//               onClick={handleNavClose}
//               href="/"
//               aria-label="logo"
//               className="flex space-x-2 items-center"
//             >
//               <span className="text-2xl font-bold text-yellow-900 ">
//                 Tailus <span className="text-yellow-700 ">Feedus</span>
//               </span>
//             </Link>

//             <div className="flex items-center lg:hidden max-h-10">
//               <label
//                 ref={navCloseBtnRef}
//                 role="button"
//                 htmlFor="toggle_nav"
//                 aria-label="hamburger"
//                 id="hamburger"
//                 className="relative w-10 h-auto p-2 "
//               >
//                 <div
//                   id="line"
//                   className="m-auto h-0.5 w-6 rounded bg-yellow-900  transition duration-300"
//                 ></div>
//                 <div
//                   id="line2"
//                   className="m-auto mt-2 h-0.5 w-6 rounded bg-yellow-900  transition duration-300"
//                 ></div>
//               </label>
//             </div>
//           </div>

//           <label
//             role="button"
//             htmlFor="toggle_nav"
//             className="hidden peer-checked:block fixed w-full h-full left-0 top-0 z-10 bg-yellow-200  bg-opacity-30 backdrop-blur backdrop-filter lg:hidden"
//           ></label>
//           <div className="hidden peer-checked:flex w-full flex-col lg:flex lg:flex-row justify-end z-30 items-center gap-y-6 p-6 rounded-xl bg-white  lg:gap-y-0 lg:p-0 md:flex-nowrap lg:bg-transparent lg:w-[64%]">
//             <div className="text-gray-600 lg:pr-4 flex-grow">
//               <ul className="tracking-wide font-medium text-sm flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row w-full">
//                 <li>
//                   <Link
//                     onClick={handleNavClose}
//                     htmlFor="toggle_nav"
//                     href="/all-recipes"
//                     className="block md:px-4 transition hover:text-yellow-700"
//                   >
//                     <span>All recipes</span>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     onClick={handleNavClose}
//                     htmlFor="toggle_nav"
//                     href="/add-recipe"
//                     className="block md:px-4 transition hover:text-yellow-700"
//                   >
//                     <span>Add recipe</span>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     onClick={handleNavClose}
//                     htmlFor="toggle_nav"
//                     href="/cart"
//                     className="block md:px-4 transition hover:text-yellow-700"
//                   >
//                     <span>Cart</span>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     onClick={handleNavClose}
//                     htmlFor="toggle_nav"
//                     href="/wishlist"
//                     className="block md:px-4 transition hover:text-yellow-700"
//                   >
//                     <span>Wishlist</span>
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             {!user?.email ? (
//               <div className="w-full min-w-max space-y-2 border-yellow-200 lg:space-y-0 sm:w-max lg:border-l ">
//                 <Link href={"/sign-up"}>
//                   <button
//                     onClick={handleNavClose}
//                     type="button"
//                     title="Start buying"
//                     className="w-full py-3 px-6 text-center rounded-full transition active:bg-yellow-200   focus:bg-yellow-100 sm:w-max"
//                   >
//                     <span className="block text-yellow-800 font-semibold text-sm">
//                       Sign up
//                     </span>
//                   </button>
//                 </Link>
//                 <Link href={"/login"}>
//                   <button
//                     onClick={handleNavClose}
//                     title="Start buying"
//                     className="w-full py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max"
//                   >
//                     <span className="block text-yellow-900 font-semibold text-sm">
//                       Login
//                     </span>
//                   </button>
//                 </Link>
//               </div>
//             ) : (
//               <button
//                 onClick={() => {
//                   handleLogout();
//                   handleNavClose();
//                 }}
//                 title="Start buying"
//                 className="w-full py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max"
//               >
//                 <span className="block text-yellow-900 font-semibold text-sm">
//                   Log out
//                 </span>
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import { setUser } from "@/redux/slices/user-slice";
import axiosInstance from "@/utils/axios-instance";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.user);

  const handleLogout = async () => {
    try {
      await axiosInstance.get("/logout");
      dispatch(setUser({}));
      toast.success("Logged out successfully");
      setNavOpen(false);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleNavClose = () => {
    setNavOpen(false);
  };

  return (
    <nav className="fixed z-50 w-full bg-white md:absolute md:bg-transparent">
      <div className="container m-auto px-2 md:px-12 lg:px-7">
        <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
          <div className="w-full px-6 flex justify-between lg:w-max md:px-0 z-30">
            <Link
              onClick={handleNavClose}
              href="/"
              aria-label="logo"
              className="flex space-x-2 items-center"
            >
              <span className="text-2xl font-bold text-yellow-900">
                Tailus <span className="text-yellow-700">Feedus</span>
              </span>
            </Link>

            <div className="flex items-center lg:hidden max-h-10">
              <button
                onClick={() => setNavOpen((prev) => !prev)}
                aria-label="hamburger"
                className="relative w-10 h-auto p-2"
              >
                <div className="m-auto h-0.5 w-6 rounded bg-yellow-900 transition duration-300" />
                <div className="m-auto mt-2 h-0.5 w-6 rounded bg-yellow-900 transition duration-300" />
              </button>
            </div>
          </div>

          {/* Overlay (small screens only) */}
          {navOpen && (
            <div
              onClick={handleNavClose}
              className="fixed lg:hidden w-full h-full left-0 top-0 z-10 bg-yellow-200 bg-opacity-30 backdrop-blur backdrop-filter"
            />
          )}

          {/* Navigation links */}
          <div
            className={`${
              navOpen ? "flex" : "hidden"
            } w-full flex-col lg:flex lg:flex-row justify-end z-30 items-center gap-y-6 p-6 rounded-xl bg-white lg:gap-y-0 lg:p-0 md:flex-nowrap lg:bg-transparent lg:w-[64%]`}
          >
            <div className="text-gray-600 lg:pr-4 flex-grow">
              <ul className="tracking-wide font-medium text-sm flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row w-full">
                {["/all-recipes", "/add-recipe", "/cart", "/wishlist"].map(
                  (path) => (
                    <li key={path}>
                      <Link
                        onClick={handleNavClose}
                        href={path}
                        className="block md:px-4 transition hover:text-yellow-700"
                      >
                        <span>{path.replace("/", "").replace("-", " ")}</span>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {!user?.email ? (
              <div className="w-full min-w-max space-y-2 border-yellow-200 lg:space-y-0 sm:w-max lg:border-l">
                <Link href="/sign-up">
                  <button
                    onClick={handleNavClose}
                    className="w-full py-3 px-6 text-center rounded-full transition active:bg-yellow-200 focus:bg-yellow-100 sm:w-max"
                  >
                    <span className="block text-yellow-800 font-semibold text-sm">
                      Sign up
                    </span>
                  </button>
                </Link>
                <Link href="/login">
                  <button
                    onClick={handleNavClose}
                    className="w-full py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max"
                  >
                    <span className="block text-yellow-900 font-semibold text-sm">
                      Login
                    </span>
                  </button>
                </Link>
              </div>
            ) : (
              <button
                onClick={handleLogout}
                className="w-full py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max"
              >
                <span className="block text-yellow-900 font-semibold text-sm">
                  Log out
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
