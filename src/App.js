import { useState } from "react";
import "./custom.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/dashboard/Main";
import Contactlist from "./pages/contact/Contactlist";
import ProductList from "./pages/product/ProductList";
import ProductEnquiry from "./pages/product/ProductEnquiry";
import TeamList from "./pages/about/TeamList";
import AddTeam from "./pages/about/AddTeam";
import AddProduct from "./pages/product/AddProduct";
import JourneyList from "./pages/investors/JourneyList";
import AddAnnualReports from "./pages/investors/AddAnnualReports";
import AnnualReportsList from "./pages/investors/AnnualReportsList";
import Login from "./pages/auth/Login";
import ProductBlogs from "./pages/Blogs/ProductBlogs";
import AddBlog from "./pages/Blogs/AddBlog";
import BlogList from "./pages/Blogs/BlogList";
import BlogEnquiry from "./pages/Blogs/BlogEnquiry";
import AddReports from "./pages/Reports/AddReports";
import ReportList from "./pages/Reports/ReportList";
import ReportEnquiry from "./pages/Reports/ReportEnquiry";
import Reports from "./pages/Reports/Reports";
import { Award } from "react-bootstrap-icons";
import AddAwards from "./pages/Awards/AddAwards";
import AwardList from "./pages/Awards/AwardList";
import Awards from "./pages/Awards/Awards";
import ProductNews from "./pages/News/ProductNews";
import AddNews from "./pages/News/AddNews";
import NewsList from "./pages/News/NewsList";
import NewsEnquiry from "./pages/News/NewsEnquiry";
import ProductCareer from "./pages/Career/ProductCareer";
import AddCareer from "./pages/Career/AddCaree";
import CareerList from "./pages/Career/CareerList";
import TreatmentList from "./pages/treatments/TreatmentList";
import AddTreatments from "./pages/treatments/AddTreatments";
import ResponsibilityList from "./pages/responsibility/ResponsibilityList";
import AddResponsibility from "./pages/responsibility/AddResponsibility";
import FAQList from "./pages/faq/FAQList";
import AddFAQ from "./pages/faq/AddFAQ";
import DirectorList from "./pages/Director/DirectorList";
import AddDirector from "./pages/Director/AddDirector";
import JobApplyList from "./pages/Career/JobApplyList";
import SubscribeList from "./pages/subscribe/SubscribeList";
import Intern from "./pages/Career/Intern";
import Anyone from "./pages/Career/Anyone";
import CreateCategory from "./pages/treatments/CreateCategory";
import CreateCategoryList from "./pages/treatments/CreateCategoryList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Main />} />
        <Route path="/contact-list" element={<Contactlist />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product-add" element={<AddProduct />} />
        <Route path="/product-enquiry" element={<ProductEnquiry />} />

        <Route path="/product-blogs" element={<ProductBlogs />} />
        <Route path="/blog-add" element={<AddBlog />} />
        <Route path="/blog-list" element={<BlogList />} />

        <Route path="/reports" element={<Reports />} />
        <Route path="/report-add" element={<AddReports />} />
        <Route path="/report-list" element={<ReportList />} />

        <Route path="/awards" element={<Awards />} />
        <Route path="/award-add" element={<AddAwards />} />
        <Route path="/award-list" element={<AwardList />} />

        <Route path="/product-news" element={<ProductNews />} />
        <Route path="/news-add" element={<AddNews />} />
        <Route path="/news-list" element={<NewsList />} />

        <Route path="/product-career" element={<ProductCareer />} />
        <Route path="/career-add" element={<AddCareer />} />
        <Route path="/career-list" element={<CareerList />} />
        <Route path="/JobApplyList" element={<JobApplyList />} />
        <Route path="/internform" element={<Intern />} />
        <Route path="/anyoneform" element={<Anyone />} />



        <Route path="/product-faq" element={<FAQList />} />
        <Route path="/faq-add" element={<AddFAQ />} />
        <Route path="/faq-list" element={<FAQList />} />

        <Route path="/product-treatment" element={<TreatmentList />} />
        <Route path="/treatment-add" element={<AddTreatments />} />
        <Route path="/treatment-list" element={<TreatmentList />} />
        <Route path="/createcategory" element={<CreateCategory />} />
        <Route path="/createcategorylist" element={<CreateCategoryList />} />



        <Route
          path="/product-responsibility"
          element={<ResponsibilityList />}
        />
        <Route path="/responsibility-add" element={<AddResponsibility />} />
        <Route path="/responsibility-list" element={<ResponsibilityList />} />

        <Route path="/about-team" element={<TeamList />} />
        <Route path="/about-add-team" element={<AddTeam />} />

        <Route path="/director-list" element={<DirectorList />} />
        <Route path="/director-add" element={<AddDirector />} />

        <Route path="/investors-journey-list" element={<JourneyList />} />
        <Route path="/investors-add-report" element={<AddAnnualReports />} />
        <Route path="/investors-report-list" element={<AnnualReportsList />} />

        <Route path="/SubscribeList" element={<SubscribeList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
