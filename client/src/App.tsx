import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Navigation from "./components/Navigation";
import { ProtectedRoute } from "./components/ProtectedRoutes";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { useAuthStore } from "./store/auth";

import { Container } from "./components/Container";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import AboutPage from "./pages/AboutPage";
import NoteFormPage from "./pages/NoteFormPage";
import DashLayout from "./pages/DashLayout";
import SummaryPage from "./pages/SummaryPage";
import UsersPage from "./pages/UsersPage";
import EmailsPage from "./pages/EmailsPage";

const queryClient = new QueryClient();

function App() {
  const isAuth = useAuthStore((state) => state.isAuth);

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster richColors />
      {/* <Dashboard /> */}
      <BrowserRouter>
        {/* <Navigation /> */}
        {/* <Container> */}
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* <Route path="/pricing" element={<PricingPage />} /> */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<HomePage />} />

          {/* <Route element={<ProtectedRoute isAllowed={isAuth} />}> */}
          <Route path="dash" element={<DashLayout />}>
            <Route index element={<SummaryPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="emails" element={<EmailsPage />} />
          </Route>
          {/* </Route> */}
        </Routes>
        {/* </Container> */}
      </BrowserRouter>
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
      {/* <Route path="/notes/new" element={<NoteFormPage />} /> */}

      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default App;
