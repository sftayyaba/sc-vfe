  import Vue from "vue";
  import Router from "vue-router";
  import CollegeSearch from "./views/CollegeSearch";
  import CollegeProfile from "./views/CollegeProfile";
  import Registration from "./views/Registration";
  import Dashboard from "./views/Dashboard";
  import Login from "./views/Login";
  import Home from "./views/Home";
  import SingleArticle from "./views/SingleArticle";
  import Admission from "./views/Admission";
  import MoneyTalks from "./views/MoneyTalks";
  import CollegeLiving from "./views/CollegeLiving";
  import GlobalEducation from "./views/GlobalEducation";
  import ViewAll from "./views/ViewAll";
  import Aboutus from "./views/Aboutus";
  import ESL_lander from "./views/ESL_lander";
  import Personalized from "./views/Personalized";
  import PrivacyPolicy from "./views/PrivacyPolicy";
  import AllArticles from "./views/AllArticles";
  import AllColleges from "./views/AllColleges";
  import ManualTripSearch from "./views/ManualTripSearch";
  import NewSingleArticle from "./views/NewSingleArticle";


Vue.use(Router);

  let router = new  Router({

  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },

  routes: [
    {
      path: "/collegeSearch",
      name: "CollegeSearch",
      component: CollegeSearch
    },
    {
      path: "/college_profile",
      name: "CollegeProfile",
      component: CollegeProfile
    },
    {
      path: "/registration",
      name: "Registration",
      component: Registration
    },
    {
      path: "/user_dashboard",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/single_article/:slug",
      name: "single_article",
      component: SingleArticle
    },
    {
      path: "/admission",
      name: "Admission",
      component: Admission
    },
    {
      path: "/money_talks",
      name: "money_talks",
      component: MoneyTalks
    },
    {
      path: "/college_living",
      name: "college_living",
      component: CollegeLiving
    },
    {
      path: "/global_education",
      name: "global_education",
      component: GlobalEducation
    },
    {
      path: "/view_all",
      name: "View_All",
      component: ViewAll

    },
    {
      path:"/about_us",
      name:"about_us",
      component:Aboutus
    },
    {
    path:"/esl_lander",
        name:"esl_lander",
        component:ESL_lander

    },
    {
        path:"/personalized",
        name:"personalized",
        component:Personalized
    },
    {
      path:"/privacy_policies",
      name:"privacy_policies",
      component:PrivacyPolicy
    },
    {
      path:"/all_articles",
      name:"all_articles",
      component:AllArticles
    },
    {
      path:"/all_colleges",
      name:"all_colleges",
      component:AllColleges
    },
    {
      path:"/manual_search",
      name:"manual_search",
      component:ManualTripSearch
    },
    {
      path:"/:year?/:month?/:slug?",
      name:"test",
      component:NewSingleArticle
    }
  ]
});
  //const router = new VueRouter();
  router.beforeEach( (to, from, next)  => {

    window.scrollTo(0,0);
    next();

  });




  export default router;

