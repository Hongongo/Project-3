import React from 'react';
import Alert from "../layout/Alert";
import {Route, Switch} from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Profiles from "../profiles/Profiles";
import Profile from "../profile/Profile";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../dashboard/Dashboard";
import CreateProfile from "../profile-forms/CreateProfile";
import EditProfile from "../profile-forms/EditProfile";
import AddExperience from "../profile-forms/AddExperience";
import AddEducation from "../profile-forms/AddEducation";
import Posts from "../posts/Posts";
import Post from "../post/Post";
import FaqForm from "../faqs/FaqForm";
import Home from "../main/Home";
import Faqs from "../faqs/Faqs";
import Faq from "../faq/Faq";
import NotFound from "../layout/NotFound";

const Routes = () => {
    return (
        <section className="container">
            <Alert/>
            <Switch>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/profiles' component={Profiles}/>
                <Route exact path='/profile/:id' component={Profile}/>
                <Route exact path='/home' component={Home}/>
                <PrivateRoute exact path='/dashboard' component={Dashboard}/>
                <PrivateRoute exact path='/create-profile' component={CreateProfile}/>
                <PrivateRoute exact path='/edit-profile' component={EditProfile}/>
                <PrivateRoute exact path='/add-experience' component={AddExperience}/>
                <PrivateRoute exact path='/add-education' component={AddEducation}/>
                <PrivateRoute exact path='/posts' component={Posts}/>
                <PrivateRoute exact path='/faqs' component={Faqs}/>
                <PrivateRoute exact path='/faqs/:id' component={Faq}/>
                <PrivateRoute exact path='/posts/:id' component={Post}/>
                <PrivateRoute exact path='/faq-form' component={FaqForm}/>
                <Route component={NotFound}/>
            </Switch>
        </section>
    )
};

export default Routes;