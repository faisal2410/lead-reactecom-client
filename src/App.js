import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Menu from "./components/nav/Menu";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/user/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminStudyArea from "./pages/admin/StudyArea";
import AdminSubject from "./pages/admin/Subject";
import AdminSubjects from "./pages/admin/Subjects";
import AdminUniversityUpdate from "./pages/admin/UniversityUpdate";
import AdminSubjectView from "./pages/admin/AdminSubjectView";
// import AddSubject from "./pages/admin/university/AddSubject";
import UserOrders from "./pages/user/Orders";
import UserProfile from "./pages/user/Profile";
import SearchProgram from "./pages/SearchProgram";
import Search from "./pages/Search";
import SubjectView from "./pages/SubjectView";
import PrivateRoute from "./components/routes/PrivateRoute";
import AdminRoute from "./components/routes/AdminRoute";
import StudyAreasList from "./pages/StudyAreasList";
import StudyAreaView from "./pages/StudyAreaView";
import Cart from "./pages/Cart";
import AdminOrders from "./pages/admin/Orders";
import ApplyNow from "./pages/ApplyNow";
import Footer from "./components/footer/Footer";


const PageNotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      404 | Page not found
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchprogram" element={<SearchProgram />} />       
        <Route path="/studyAreas" element={<StudyAreasList />} />
        <Route path="/studyArea/:slug" element={<StudyAreaView />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
        <Route path="/subject/:slug" element={<SubjectView />} />
        <Route path="/university/subject/:subjectSlug" element={<ApplyNow />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/profile" element={<UserProfile />} />
          <Route path="user/orders" element={<UserOrders />} />
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/studyArea" element={<AdminStudyArea />} />
          <Route path="admin/subject" element={<AdminSubject />} />
          <Route path="admin/subjects" element={<AdminSubjects />} />
          <Route path="admin/subject/:slug" element={<AdminSubjectView />} />
          <Route
            path="admin/university/update/:slug"
            element={<AdminUniversityUpdate />}
          />
          {/* <Route
            path="admin/university/addSubject/:slug"
            element={<AddSubject />}
          /> */}
          <Route path="admin/orders" element={<AdminOrders />} />
        </Route>
        <Route path="*" element={<PageNotFound />} replace />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
