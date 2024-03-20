import "../styles/bootstrap-responsive.min.css";
import "../styles/bootstrap.min.css";
import "../styles/font-awesome.css";
import "../styles/theme.css";
import { Link, Route, Routes } from "react-router-dom";
import { pathname } from "./path";

function Layout() {
  return (
    <>
      <div class="navbar navbar-fixed-top">
        <div class="navbar-inner">
          <div class="container">
            <a
              class="btn btn-navbar"
              data-toggle="collapse"
              data-target=".navbar-inverse-collapse"
            >
              <i class="icon-reorder shaded"></i>
            </a>
            <a class="brand" href="~/">
              Admin{" "}
            </a>
            <div class="nav-collapse collapse navbar-inverse-collapse">
              <ul class="nav nav-icons">
                <li class="active">
                  <a href="#">
                    <i class="icon-envelope"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="icon-eye-open"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="icon-bar-chart"></i>
                  </a>
                </li>
              </ul>
              <form class="navbar-search pull-left input-append" action="#">
                <input type="text" class="span3" />
                <button class="btn" type="button">
                  <i class="icon-search"></i>
                </button>
              </form>
              <ul class="nav pull-right">
                <li class="nav-user dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <img src="~/images/user.png" class="nav-avatar" />
                    <b class="caret"></b>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="#">Your Profile</a>
                    </li>
                    <li>
                      <a href="#">Edit Profile</a>
                    </li>
                    <li>
                      <a href="#">Account Settings</a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a href="#">Logout</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="container">
          <div class="row">
            <div class="span3">
              <div class="sidebar">
                <ul class="widget widget-menu unstyled">
                  <li class="active">
                    <Link to="/">
                      <i class="menu-icon icon-dashboard"></i>Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="/persionals">
                      <i class="menu-icon icon-bullhorn"></i>Personal List{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/benifit">
                      {" "}
                      <i class="menu-icon icon-tasks"></i>Benefit Plans
                    </Link>
                  </li>
                  <li>
                    <Link to="/joblist">
                      <i class="menu-icon icon-inbox"></i>Job History
                    </Link>
                  </li>
                </ul>
                <ul class="widget widget-menu unstyled">
                  <li>
                    <Link
                      class="collapsed"
                      data-toggle="collapse"
                      to="/togglePages"
                    >
                      <i class="menu-icon icon-cog"></i>
                      <i class="icon-chevron-down pull-right"></i>
                      <i class="icon-chevron-up pull-right"></i>More Pages
                    </Link>
                    <ul id="togglePages" class="collapse unstyled">
                      <li>
                        <a href="#">
                          <i class="icon-inbox"></i>Login{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="icon-inbox"></i>Profile{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="icon-inbox"></i>All Users{" "}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <i class="menu-icon icon-signout"></i>Logout{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="span9">
              <Routes>
                {pathname.map((item, i) => {
                  const Page = item.Component;
                  return <Route path={item.path} element={<Page />} />;
                })}
              </Routes>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="container">
          <b class="copyright">&copy; 2014 Admin - DaoNguyen </b>All rights
          reserved.
        </div>
      </div>
    </>
  );
}

export default Layout;
