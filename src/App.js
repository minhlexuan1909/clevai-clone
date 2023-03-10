import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LoginPage } from "./modules/auth";
import PrivateRoute from "./modules/common/pages/PrivateRoute/PrivateRoute";
import { ProfilePage } from "./modules/profile";
import { QuizPage } from "./modules/quiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
