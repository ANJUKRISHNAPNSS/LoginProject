import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { bindActionCreators } from "redux";
import { getCountryList } from "./dashboardActions";
import Newregistration from "./newRegistration";
import loginImage from '../loginImage.PNG'
import bottomImage from '../bImage.PNG'

function LoginPage(props) {
    const { getCountryLists } = props

    function loginfunction() {
        getCountryLists()
        console.log('kkkkkk')
        // return (<NavLink to="/dashboard" ></NavLink>)
    }

    function newRegistration() {
        return (<Newregistration />)
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ marginLeft: 100 }}>
                <h1 style={{ textAlign: 'left' }}>Sign In</h1>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ text: 'left' }}>New User?</div>{''}
                    <div style={{ marginLeft: '50px' }}><NavLink to={'/user'} style={{ width: 50, color: 'blue' }} onClick={newRegistration}>Create New Account</NavLink></div>
                </div>
                <div style={{ textAlign: 'left' }}>
                    <input
                        type='text'
                        placeholder="Enter User Name"
                        style={{ width: 400, height: 30, marginTop: 20 }}
                    />
                </div>
                <div style={{ textAlign: 'left' }}>
                    <input
                        type='text'
                        placeholder="Enter Password"
                        style={{ width: 400, height: 30, marginTop: 20 }}
                    />
                </div>
                <div style={{ textAlign: 'left', marginTop: 10 }}>
                    <input
                        type='checkbox'
                    // style={{ width: 400, height: 30, marginTop: 20 }}
                    />
                    Keep me signed in
                </div>
                <div style={{ textAlign: 'left', marginTop: 20 }}>
                    <button style={{ width: 410, height: 30 }} onClick={loginfunction}><NavLink to="/dashboard" >Login</NavLink></button>
                </div>
                <img src={bottomImage} />
                <div></div>
            </div>
            <div style={{ marginLeft: 400 }}>
                <img src={loginImage} />
            </div>
        </div>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCountryLists: () => dispatch(getCountryList())
    }
}

export default connect(null, mapDispatchToProps)(LoginPage)

// export default LoginPage