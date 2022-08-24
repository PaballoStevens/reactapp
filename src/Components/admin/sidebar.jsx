import React from "react";
import { Link } from "react-router-dom";
import Test from "./Test";

function Sidebar() {
   return (
    <div className="nav-fixed">
      <nav className="topnav navbar navbar-expand shadow justify-content-between justify-content-sm-start navbar-light bg-white" id="sidenavAccordion">
            
            <button className="btn btn-icon btn-transparent-dark order-1 order-lg-0 me-2 ms-lg-2 me-lg-0" id="sidebarToggle"><i data-feather="menu"></i></button>
           
            <Link className="navbar-brand pe-3 ps-4 ps-lg-2" to="index.html">SB Admin Pro</Link>
            
            <form className="form-inline me-auto d-none d-lg-block me-3">
                <div className="input-group input-group-joined input-group-solid">
                    <input className="form-control pe-0" type="search" placeholder="Search" aria-label="Search" />
                    <div className="input-group-text"><i data-feather="search"></i></div>
                </div>
            </form>
            
            <ul className="navbar-nav align-items-center ms-auto">
              
                <li className="nav-item dropdown no-caret d-none d-md-block me-3">
                    <Link className="nav-link dropdown-toggle" id="navbarDropdownDocs" to="" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="fw-500">Documentation</div>
                        <i className="fas fa-chevron-right dropdown-arrow"></i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-end py-0 me-sm-n15 me-lg-0 o-hidden animated--fade-in-up" aria-labelledby="navbarDropdownDocs">
                        <Link className="dropdown-item py-3" to="https://docs.startbootstrap.com/sb-admin-pro" target="_blank">
                            <div className="icon-stack bg-primary-soft text-primary me-4"><i data-feather="book"></i></div>
                            <div>
                                <div className="small text-gray-500">Documentation</div>
                                Usage instructions and reference
                            </div>
                        </Link>
                        <div className="dropdown-divider m-0"></div>
                        <Link className="dropdown-item py-3" to="https://docs.startbootstrap.com/sb-admin-pro/components" target="_blank">
                            <div className="icon-stack bg-primary-soft text-primary me-4"><i data-feather="code"></i></div>
                            <div>
                                <div className="small text-gray-500">Components</div>
                                Code snippets and reference
                            </div>
                        </Link>
                        <div className="dropdown-divider m-0"></div>
                        <Link className="dropdown-item py-3" to="https://docs.startbootstrap.com/sb-admin-pro/changelog" target="_blank">
                            <div className="icon-stack bg-primary-soft text-primary me-4"><i data-feather="file-text"></i></div>
                            <div>
                                <div className="small text-gray-500">Changelog</div>
                                Updates and changes
                            </div>
                        </Link>
                    </div>
                </li>
                
                <li className="nav-item dropdown no-caret me-3 d-lg-none">
                    <Link className="btn btn-icon btn-transparent-dark dropdown-toggle" id="searchDropdown" to="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="search"></i></Link>
                    
                    <div className="dropdown-menu dropdown-menu-end p-3 shadow animated--fade-in-up" aria-labelledby="searchDropdown">
                        <form className="form-inline me-auto w-100">
                            <div className="input-group input-group-joined input-group-solid">
                                <input className="form-control pe-0" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                                <div className="input-group-text"><i data-feather="search"></i></div>
                            </div>
                        </form>
                    </div>
                </li>
             
                <li className="nav-item dropdown no-caret d-none d-sm-block me-3 dropdown-notifications">
                    <Link className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownAlerts" to="#;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="bell"></i></Link>
                    <div className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownAlerts">
                        <h6 className="dropdown-header dropdown-notifications-header">
                            <i className="me-2" data-feather="bell"></i>
                            Alerts Center
                        </h6>
                        
                        <Link className="dropdown-item dropdown-notifications-item" to="#!">
                            <div className="dropdown-notifications-item-icon bg-warning"><i data-feather="activity"></i></div>
                            <div className="dropdown-notifications-item-content">
                                <div className="dropdown-notifications-item-content-details">December 29, 2021</div>
                                <div className="dropdown-notifications-item-content-text">This is an alert message. It's nothing serious, but it requires your attention.</div>
                            </div>
                        </Link>
                        
                        <Link className="dropdown-item dropdown-notifications-item" to="#!">
                            <div className="dropdown-notifications-item-icon bg-info"><i data-feather="bar-chart"></i></div>
                            <div className="dropdown-notifications-item-content">
                                <div className="dropdown-notifications-item-content-details">December 22, 2021</div>
                                <div className="dropdown-notifications-item-content-text">A new monthly report is ready. Click here to view!</div>
                            </div>
                        </Link>
                    
                        <Link className="dropdown-item dropdown-notifications-item" to="#!">
                            <div className="dropdown-notifications-item-icon bg-danger"><i className="fas fa-exclamation-triangle"></i></div>
                            <div className="dropdown-notifications-item-content">
                                <div className="dropdown-notifications-item-content-details">December 8, 2021</div>
                                <div className="dropdown-notifications-item-content-text">Critical system failure, systems shutting down.</div>
                            </div>
                        </Link>
                        
                        <Link className="dropdown-item dropdown-notifications-item" to="#!">
                            <div className="dropdown-notifications-item-icon bg-success"><i data-feather="user-plus"></i></div>
                            <div className="dropdown-notifications-item-content">
                                <div className="dropdown-notifications-item-content-details">December 2, 2021</div>
                                <div className="dropdown-notifications-item-content-text">New user request. Woody has requested access to the organization.</div>
                            </div>
                        </Link>
                        <Link className="dropdown-item dropdown-notifications-footer" to="#!">View All Alerts</Link>
                    </div>
                </li>
                
                <li className="nav-item dropdown no-caret d-none d-sm-block me-3 dropdown-notifications">
                    <Link className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownMessages" to="#;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="mail"></i></Link>
                    <div className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownMessages">
                        <h6 className="dropdown-header dropdown-notifications-header">
                            <i className="me-2" data-feather="mail"></i>
                            Message Center
                        </h6>
                        
                        <Link className="dropdown-item dropdown-notifications-item" to="#!">
                            <img className="dropdown-notifications-item-img" src="https://sb-admin-pro.startbootstrap.com/assets/img/illustrations/profiles/profile-2.png" />
                            <div className="dropdown-notifications-item-content">
                                <div className="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                <div className="dropdown-notifications-item-content-details">Thomas Wilcox · 58m</div>
                            </div>
                        </Link>
                        
                        <Link className="dropdown-item dropdown-notifications-item" to="#!">
                            <img className="dropdown-notifications-item-img" src="https://sb-admin-pro.startbootstrap.com/assets/img/illustrations/profiles/profile-3.png" />
                            <div className="dropdown-notifications-item-content">
                                <div className="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                <div className="dropdown-notifications-item-content-details">Emily Fowler · 2d</div>
                            </div>
                        </Link>
                      
                        <Link className="dropdown-item dropdown-notifications-item" to="#!">
                            <img className="dropdown-notifications-item-img" src="https://sb-admin-pro.startbootstrap.com/assets/img/illustrations/profiles/profile-4.png" />
                            <div className="dropdown-notifications-item-content">
                                <div className="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                <div className="dropdown-notifications-item-content-details">Marshall Rosencrantz · 3d</div>
                            </div>
                        </Link>
                        
                        <Link className="dropdown-item dropdown-notifications-item" to="#!">
                            <img className="dropdown-notifications-item-img" src="https://sb-admin-pro.startbootstrap.com/assets/img/illustrations/profiles/profile-5.png" />
                            <div className="dropdown-notifications-item-content">
                                <div className="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                <div className="dropdown-notifications-item-content-details">Colby Newton · 3d</div>
                            </div>
                        </Link>
                        
                        <Link className="dropdown-item dropdown-notifications-footer" to="#!">Read All Messages</Link>
                    </div>
                </li>
                
                <li className="nav-item dropdown no-caret dropdown-user me-3 me-lg-4">
                    <Link className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownUserImage" to="#;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img className="img-fluid" src="assets/img/illustrations/profiles/profile-1.png" /></Link>
                    <div className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownUserImage">
                        <h6 className="dropdown-header d-flex align-items-center">
                            <img className="dropdown-user-img" src="https://sb-admin-pro.startbootstrap.com/assets/img/illustrations/profiles/profile-1.png" />
                            <div className="dropdown-user-details">
                                <div className="dropdown-user-details-name">Valerie Luna</div>
                                <div className="dropdown-user-details-email"><Link to="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="4c3a2039222d0c2d2320622f2321">[email&#160;protected]</Link></div>
                            </div>
                        </h6>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="#!">
                            <div className="dropdown-item-icon"><i data-feather="settings"></i></div>
                            Account
                        </Link>
                        <Link className="dropdown-item" to="#!">
                            <div className="dropdown-item-icon"><i data-feather="log-out"></i></div>
                            Logout
                        </Link>
                    </div>
                </li>
            </ul>
        </nav>

        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav className="sidenav shadow-right sidenav-light">
                    <div className="sidenav-menu">
                        <div className="nav accordion" id="accordionSidenav">
                            
                            
                            <div className="sidenav-menu-heading d-sm-none">Account</div>
                            
                            
                            <Link className="nav-link d-sm-none" to="#!">
                                <div className="nav-link-icon"><i data-feather="bell"></i></div>
                                Alerts
                                <span className="badge bg-warning-soft text-warning ms-auto">4 New!</span>
                            </Link>
                           
                            
                            <Link className="nav-link d-sm-none" to="#!">
                                <div className="nav-link-icon"><i data-feather="mail"></i></div>
                                Messages
                                <span className="badge bg-success-soft text-success ms-auto">2 New!</span>
                            </Link>
                           
                            <div className="sidenav-menu-heading">Core</div>
                           
                            <Link className="nav-link collapsed" to="#;" data-bs-toggle="collapse" data-bs-target="#collapseDashboards" aria-expanded="false" aria-controls="collapseDashboards">
                                <div className="nav-link-icon"><i data-feather="activity"></i></div>
                                Dashboards
                                <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </Link>
                            <div className="collapse" id="collapseDashboards" data-bs-parent="#accordionSidenav">
                                <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPages">
                                    <Link className="nav-link" to="dashboard-1.html">
                                        Default
                                        <span className="badge bg-primary-soft text-primary ms-auto">Updated</span>
                                    </Link>
                                    <Link className="nav-link" to="dashboard-2.html">Multipurpose</Link>
                                    <Link className="nav-link" to="dashboard-3.html">Affiliate</Link>
                                </nav>
                            </div>
                    
                            <div className="sidenav-menu-heading">Custom</div>
                           
                            <Link className="nav-link collapsed" to="#;" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="nav-link-icon"><i data-feather="grid"></i></div>
                                Pages
                                <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </Link>
                            <div className="collapse" id="collapsePages" data-bs-parent="#accordionSidenav">
                                <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPagesMenu">
                                    
                                    <Link className="nav-link collapsed" to="#;" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAccount" aria-expanded="false" aria-controls="pagesCollapseAccount">
                                        Account
                                        <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </Link>
                                    <div className="collapse" id="pagesCollapseAccount" data-bs-parent="#accordionSidenavPagesMenu">
                                        <nav className="sidenav-menu-nested nav">
                                            <Link className="nav-link" to="account-profile.html">Profile</Link>
                                            <Link className="nav-link" to="account-billing.html">Billing</Link>
                                            <Link className="nav-link" to="account-security.html">Security</Link>
                                            <Link className="nav-link" to="account-notifications.html">Notifications</Link>
                                        </nav>
                                    </div>
                                    
                                    <Link className="nav-link collapsed" to="#;" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                        Authentication
                                        <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </Link>
                                    <div className="collapse" id="pagesCollapseAuth" data-bs-parent="#accordionSidenavPagesMenu">
                                        <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPagesAuth">
                                           
                                            <Link className="nav-link collapsed" to="#;" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuthBasic" aria-expanded="false" aria-controls="pagesCollapseAuthBasic">
                                                Basic
                                                <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                            </Link>
                                            <div className="collapse" id="pagesCollapseAuthBasic" data-bs-parent="#accordionSidenavPagesAuth">
                                                <nav className="sidenav-menu-nested nav">
                                                    <Link className="nav-link" to="auth-login-basic.html">Login</Link>
                                                    <Link className="nav-link" to="auth-register-basic.html">Register</Link>
                                                    <Link className="nav-link" to="auth-password-basic.html">Forgot Password</Link>
                                                </nav>
                                            </div>
                                            
                                            <Link className="nav-link collapsed" to="#;" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuthSocial" aria-expanded="false" aria-controls="pagesCollapseAuthSocial">
                                                Social
                                                <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                            </Link>
                                            <div className="collapse" id="pagesCollapseAuthSocial" data-bs-parent="#accordionSidenavPagesAuth">
                                                <nav className="sidenav-menu-nested nav">
                                                    <Link className="nav-link" to="auth-login-social.html">Login</Link>
                                                    <Link className="nav-link" to="auth-register-social.html">Register</Link>
                                                    <Link className="nav-link" to="auth-password-social.html">Forgot Password</Link>
                                                </nav>
                                            </div>
                                        </nav>
                                    </div>

                                    <Link className="nav-link collapsed" to="#;" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                        Error
                                        <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </Link>
                                    <div className="collapse" id="pagesCollapseError" data-bs-parent="#accordionSidenavPagesMenu">
                                        <nav className="sidenav-menu-nested nav">
                                            <Link className="nav-link" to="error-400.html">400 Error</Link>
                                            <Link className="nav-link" to="error-401.html">401 Error</Link>
                                            <Link className="nav-link" to="error-403.html">403 Error</Link>
                                            <Link className="nav-link" to="error-404-1.html">404 Error 1</Link>
                                            <Link className="nav-link" to="error-404-2.html">404 Error 2</Link>
                                            <Link className="nav-link" to="error-500.html">500 Error</Link>
                                            <Link className="nav-link" to="error-503.html">503 Error</Link>
                                            <Link className="nav-link" to="error-504.html">504 Error</Link>
                                        </nav>
                                    </div>
                                    <Link className="nav-link" to="pricing.html">Pricing</Link>
                                    <Link className="nav-link" to="invoice.html">Invoice</Link>
                                </nav>
                            </div>
                            
                            <Link className="nav-link collapsed" to="#;" data-bs-toggle="collapse" data-bs-target="#collapseApps" aria-expanded="false" aria-controls="collapseApps">
                                <div className="nav-link-icon"><i data-feather="globe"></i></div>
                                Applications
                                <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </Link>
                            <div className="collapse" id="collapseApps" data-bs-parent="#accordionSidenav">
                                <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavAppsMenu">
                                   
                                    <Link className="nav-link collapsed" to="#;" data-bs-toggle="collapse" data-bs-target="#appsCollapseKnowledgeBase" aria-expanded="false" aria-controls="appsCollapseKnowledgeBase">
                                        Knowledge Base
                                        <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </Link>
                                    <div className="collapse" id="appsCollapseKnowledgeBase" data-bs-parent="#accordionSidenavAppsMenu">
                                        <nav className="sidenav-menu-nested nav">
                                            <Link className="nav-link" to="knowledge-base-home-1.html">Home 1</Link>
                                            <Link className="nav-link" to="knowledge-base-home-2.html">Home 2</Link>
                                            <Link className="nav-link" to="knowledge-base-category.html">Category</Link>
                                            <Link className="nav-link" to="knowledge-base-article.html">Article</Link>
                                        </nav>
                                    </div>
                                   
                                    <Link className="nav-link collapsed" to="#;" data-bs-toggle="collapse" data-bs-target="#appsCollapseUserManagement" aria-expanded="false" aria-controls="appsCollapseUserManagement">
                                        User Management
                                        <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </Link>
                                    <div className="collapse" id="appsCollapseUserManagement" data-bs-parent="#accordionSidenavAppsMenu">
                                        <nav className="sidenav-menu-nested nav">
                                            <Link className="nav-link" to="user-management-list.html">Users List</Link>
                                            <Link className="nav-link" to="user-management-edit-user.html">Edit User</Link>
                                            <Link className="nav-link" to="user-management-add-user.html">Add User</Link>
                                            <Link className="nav-link" to="user-management-groups-list.html">Groups List</Link>
                                            <Link className="nav-link" to="user-management-org-details.html">Organization Details</Link>
                                        </nav>
                                    </div>
                                   
                                    <Link className="nav-link collapsed" to="#;" data-bs-toggle="collapse" data-bs-target="#appsCollapsePostsManagement" aria-expanded="false" aria-controls="appsCollapsePostsManagement">
                                        Posts Management
                                        <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </Link>
                                    <div className="collapse" id="appsCollapsePostsManagement" data-bs-parent="#accordionSidenavAppsMenu">
                                        <nav className="sidenav-menu-nested nav">
                                            <Link className="nav-link" to="blog-management-posts-list.html">Posts List</Link>
                                            <Link className="nav-link" to="blog-management-create-post.html">Create Post</Link>
                                            <Link className="nav-link" to="blog-management-edit-post.html">Edit Post</Link>
                                            <Link className="nav-link" to="blog-management-posts-admin.html">Posts Admin</Link>
                                        </nav>
                                    </div>
                                </nav>
                            </div>
                            
                            <Link className="nav-link collapsed" to="#;" data-bs-toggle="collapse" data-bs-target="#collapseFlows" aria-expanded="false" aria-controls="collapseFlows">
                                <div className="nav-link-icon"><i data-feather="repeat"></i></div>
                                Flows
                                <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </Link>
                            <div className="collapse" id="collapseFlows" data-bs-parent="#accordionSidenav">
                                <nav className="sidenav-menu-nested nav">
                                    <Link className="nav-link" to="multi-tenant-select.html">Multi-Tenant Registration</Link>
                                    <Link className="nav-link" to="wizard.html">Wizard</Link>
                                </nav>
                            </div>
                           
                            <div className="sidenav-menu-heading">UI Toolkit</div>
                            
                            <Link className="nav-link collapsed" to="#;" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="nav-link-icon"><i data-feather="layout"></i></div>
                                Layout
                                <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </Link>
                            <div className="collapse" id="collapseLayouts" data-bs-parent="#accordionSidenav">
                                <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavLayout">
                                  
                                    <Link className="nav-link collapsed" to="#;" data-bs-toggle="collapse" data-bs-target="#collapseLayoutSidenavVariations" aria-expanded="false" aria-controls="collapseLayoutSidenavVariations">
                                        Navigation
                                        <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </Link>
                                    <div className="collapse" id="collapseLayoutSidenavVariations" data-bs-parent="#accordionSidenavLayout">
                                        <nav className="sidenav-menu-nested nav">
                                            <Link className="nav-link" to="layout-static.html">Static Sidenav</Link>
                                            <Link className="nav-link" to="layout-dark.html">Dark Sidenav</Link>
                                            <Link className="nav-link" to="layout-rtl.html">RTL Layout</Link>
                                        </nav>
                                    </div>
                                   
                                    <Link className="nav-link collapsed" to="#;" data-bs-toggle="collapse" data-bs-target="#collapseLayoutContainers" aria-expanded="false" aria-controls="collapseLayoutContainers">
                                        Container Options
                                        <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </Link>
                                    <div className="collapse" id="collapseLayoutContainers" data-bs-parent="#accordionSidenavLayout">
                                        <nav className="sidenav-menu-nested nav">
                                            <Link className="nav-link" to="layout-boxed.html">Boxed Layout</Link>
                                            <Link className="nav-link" to="layout-fluid.html">Fluid Layout</Link>
                                        </nav>
                                    </div>
                                    
                                    <Link className="nav-link collapsed" to="#;" data-bs-toggle="collapse" data-bs-target="#collapseLayoutsPageHeaders" aria-expanded="false" aria-controls="collapseLayoutsPageHeaders">
                                        Page Headers
                                        <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </Link>
                                    <div className="collapse" id="collapseLayoutsPageHeaders" data-bs-parent="#accordionSidenavLayout">
                                        <nav className="sidenav-menu-nested nav">
                                            <Link className="nav-link" to="header-simplified.html">Simplified</Link>
                                            <Link className="nav-link" to="header-compact.html">Compact</Link>
                                            <Link className="nav-link" to="header-overlap.html">Content Overlap</Link>
                                            <Link className="nav-link" to="header-breadcrumbs.html">Breadcrumbs</Link>
                                            <Link className="nav-link" to="header-light.html">Light</Link>
                                        </nav>
                                    </div>
                                    
                                    <Link className="nav-link collapsed" to="#;" data-bs-toggle="collapse" data-bs-target="#collapseLayoutsStarterTemplates" aria-expanded="false" aria-controls="collapseLayoutsStarterTemplates">
                                        Starter Layouts
                                        <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </Link>
                                    <div className="collapse" id="collapseLayoutsStarterTemplates" data-bs-parent="#accordionSidenavLayout">
                                        <nav className="sidenav-menu-nested nav">
                                            <Link className="nav-link" to="starter-default.html">Default</Link>
                                            <Link className="nav-link" to="starter-minimal.html">Minimal</Link>
                                        </nav>
                                    </div>
                                </nav>
                            </div>
                         
                            <Link className="nav-link collapsed" to="#;" data-bs-toggle="collapse" data-bs-target="#collapseComponents" aria-expanded="false" aria-controls="collapseComponents">
                                <div className="nav-link-icon"><i data-feather="package"></i></div>
                                Components
                                <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </Link>
                            <div className="collapse" id="collapseComponents" data-bs-parent="#accordionSidenav">
                                <nav className="sidenav-menu-nested nav">
                                    <Link className="nav-link" to="alerts.html">Alerts</Link>
                                    <Link className="nav-link" to="avatars.html">Avatars</Link>
                                    <Link className="nav-link" to="badges.html">Badges</Link>
                                    <Link className="nav-link" to="buttons.html">Buttons</Link>
                                    <Link className="nav-link" to="cards.html">
                                        Cards
                                        <span className="badge bg-primary-soft text-primary ms-auto">Updated</span>
                                    </Link>
                                    <Link className="nav-link" to="dropdowns.html">Dropdowns</Link>
                                    <Link className="nav-link" to="forms.html">
                                        Forms
                                        <span className="badge bg-primary-soft text-primary ms-auto">Updated</span>
                                    </Link>
                                    <Link className="nav-link" to="modals.html">Modals</Link>
                                    <Link className="nav-link" to="navigation.html">Navigation</Link>
                                    <Link className="nav-link" to="progress.html">Progress</Link>
                                    <Link className="nav-link" to="step.html">Step</Link>
                                    <Link className="nav-link" to="timeline.html">Timeline</Link>
                                    <Link className="nav-link" to="toasts.html">Toasts</Link>
                                    <Link className="nav-link" to="tooltips.html">Tooltips</Link>
                                </nav>
                            </div>
                          
                            <Link className="nav-link collapsed" to="#;" data-bs-toggle="collapse" data-bs-target="#collapseUtilities" aria-expanded="false" aria-controls="collapseUtilities">
                                <div className="nav-link-icon"><i data-feather="tool"></i></div>
                                Utilities
                                <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </Link>
                            <div className="collapse" id="collapseUtilities" data-bs-parent="#accordionSidenav">
                                <nav className="sidenav-menu-nested nav">
                                    <Link className="nav-link" to="animations.html">Animations</Link>
                                    <Link className="nav-link" to="background.html">Background</Link>
                                    <Link className="nav-link" to="borders.html">Borders</Link>
                                    <Link className="nav-link" to="lift.html">Lift</Link>
                                    <Link className="nav-link" to="shadows.html">Shadows</Link>
                                    <Link className="nav-link" to="typography.html">Typography</Link>
                                </nav>
                            </div>
                            
                            <div className="sidenav-menu-heading">Plugins</div>
                            
                            <Link className="nav-link" to="charts.html">
                                <div className="nav-link-icon"><i data-feather="bar-chart"></i></div>
                                Charts
                            </Link>
                            
                            <Link className="nav-link" to="tables.html">
                                <div className="nav-link-icon"><i data-feather="filter"></i></div>
                                Tables
                            </Link>
                        </div>
                    </div>
                    
                    <div className="sidenav-footer">
                        <div className="sidenav-footer-content">
                            <div className="sidenav-footer-subtitle">Logged in as:</div>
                            <div className="sidenav-footer-title">Valerie Luna</div>
                        </div>
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <main>
                <div className="container-xl px-4 mt-n10">
                  <Test/>
                 </div> 
                </main>
                <footer className="footer-admin mt-auto footer-light">
                    <div className="container-xl px-4">
                        <div className="row">
                            <div className="col-md-6 small">Copyright © Your Website 2021</div>
                            <div className="col-md-6 text-md-end small">
                                <Link to="#!">Privacy Policy</Link>
                                ·
                                <Link to="#!">Terms &amp; Conditions</Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </div>

   );
}

export default Sidebar;