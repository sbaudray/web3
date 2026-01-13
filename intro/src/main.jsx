import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Post } from "./Post.jsx";
import { PostIndex } from "./PostIndex.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="posts">
          <Route index element={<PostIndex />} />
          <Route path=":postId" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

localhost / localhost / posts / localhost / posts / 1;

// functiion Comp ({children}) {
//   return (
//     <div>
//       {children}
//     </div>
//   )
// }

// function Other () {
//   return (
//     <Comp>
//       <div>
//         hello
//       </div>
//     </Comp>
//   )
// }
