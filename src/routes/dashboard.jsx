// dash route core components
// import Dashboard from "../views/Dashboard/Dashboard.jsx";
import Scaffolding from "../views/Scaffold/Wizard.jsx";

// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import Store from "@material-ui/icons/Store";
import Book from "@material-ui/icons/Book";
import Apps from "@material-ui/icons/Apps";
// constants
const WEBSITE = "https://holochain.org"
const GITBOOK = "https://developer.holochain.org/"
const DEVDOCS = "https://holochain.github.io/holochain-rust/"

const dashRoutes = [
  {
    path: "/scaffold",
    name: "Scaffold",
    icon: DashboardIcon,
    component: Scaffolding
  },
  {
    path: "/scaffold",
    name: "HC-Manuel",
    icon: Book,
    component: GITBOOK
  },
  {
    path: "/scaffold",
    name: "Developer Docs",
    icon: Apps,
    component: DEVDOCS
  },
  {
    path: "/scaffold",
    name: "Holochain",
    icon: Store,
    component: WEBSITE
  },
  { redirect: true, path: "/", pathTo: "/scaffold", name: "Scaffold" }
];
export default dashRoutes;
