import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/themeContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       { path: "/about", element: <About /> },
//     ],
//   },
// ]);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      {/* <RouterProvider router={router} />; */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
