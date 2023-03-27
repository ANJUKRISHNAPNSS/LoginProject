import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Provider } from "react-redux"
import { store } from "./components/store";
import Newregistration from "./components/newRegistration";
import LoginPage from "./components/loginPage";
import Table from "./components/dashboard";

const AppRouter = (
    <Provider store={store}>
        <Router>
            {/* <Header></Header> */}
            {/* <Hyperlink></Hyperlink> */}
            <Switch>
                {/* <Route path="/viewProject" component={viewProject} />
                <Route path="/addProject" component={AddProject} />
                <Route path="/viewwork" component={viewwork} />
                <Route path="/addwork" component={Addwork} />
                <Route path="/fulldetails" component={viewFullProject} />
                {/* <Route exact path="/fulldetailsbyid" component={viewProjectbyId}/> */}
                <Route exact path="/" component={LoginPage} />
                <Route exact path="/user" component={Newregistration} />
                <Route exact path="/dashboard" component={Table} />

                {/* <Route exact path="/citydetails" component={viewcity}/>
            <Route exact path="/createcitydetails" component={AddProjectcity}/>
            <Route exact path="/addsitedetails" component={AddProjectsite}/> */}




                {/* <Route exact component={NotFound}/> */}
            </Switch>

        </Router>
    </Provider>
)

export default AppRouter