import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster
        toastOptions={{
          duration: 2250,
        }}
      />
    </div>
  );
}

export default App;
