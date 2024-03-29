import React, { useState } from 'react';
import styled from "styled-components";
import style from "./Signupstyle.module.css";

// import { useDispatch } from 'react-redux'
// import { useHistory } from 'react-router';
// import { signUp } from '../../../Redux/Auth/authAction';

const Section = styled.section`
    // background-color: #F26314;
    height: 170px;
    margin-top: -16px;
    justify-content: center;

`
const Heading = styled.p`

    color: ${props => props.primary ? "black" : "#6D6E6D"};
    font-size: ${props => props.primary ? "40px" : "20px"};
    line-height: ${props => props.primary ? "40px" : "30px"};
    font-weight: ${props => props.primary ? "700" : "500"};
    margin: ${props => props.primary ? "0px" : null};
    text-align: ${props => props.primary ? "center" : "center"};
    padding-top: ${props => props.primary ? "40px" : "0px"};

`
const Button = styled.button`

    width: 100%;
    margin-top: 20px;
    padding: 15px 30px;
    background-color: #20960B;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 15px;
    font-weight: 600;

`


export default function Signup() {
    const url="http://localhost:8080/auth/google/callback"
    function googleauth(){
window.open(url,'_self')

    }

    return (
        <div style={{ backgroundImage: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/3048-free-trial-2-column%2Bprogressive-form/aura-top-right-corner-min.jpg" }}>
            <br />
            <div style={{ cursor: 'pointer' }}>
                <div style={{ width: "150px", cursor: 'pointer', marginTop: "50px", margin: "auto" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="26" fill="none" viewBox="0 0 324 65" aria-label="Harvest">
                        <path fill="#fa5d00" d="M0 4.9v59.2h4a4 4 0 0 0 3.9-4V1h-4A4 4 0 0 0 0 4.9ZM63.2 1v59a4 4 0 0 1-4 4h-3.9V5A3.9 3.9 0 0 1 59.2 1h4ZM106 23.8c-6.2 0-10.8 2.7-12.7 7.5V9.6h-8v54.5h8V33a23 23 0 0 1 8.6-1.9c6.2 0 9.4 2.7 9.4 8.1v24.8h8V37.5c0-8.8-5-13.7-13.4-13.7ZM313.5 24.8H324v1.5c0 1.4-.5 2.8-1.4 3.8-1.1 1.2-2.6 1.8-5 1.8h-4v21c0 2.6 1.3 4 4 4h6.4V64h-7.6c-7 0-10.8-3.8-10.8-10.6V32h-6.1v-1.6c0-3.3 2.4-5.5 5.7-5.5h.4V14h8v10.8ZM274.5 36c0 2.6 1.7 4.3 4.7 4.4l7.7.5c7.7.5 12 4.5 12 11.4 0 7.7-6 12.7-15.7 12.7-9.8 0-16.6-5-17.2-12.7h8c.5 3.4 4 5.8 9 5.8 5.2 0 8.3-2.2 8.3-5.5 0-2.7-1.8-4.4-5.3-4.6l-7.6-.5c-7.4-.4-11.6-4.4-11.6-11.2 0-7.6 6.1-12.5 15.4-12.5 9 0 15 4.8 15.6 12.1H290c-.5-3.1-3.6-5.2-7.8-5.2-4.8 0-7.7 2-7.7 5.3Z"></path>
                        <path fill="#fa5d00" fillRule="evenodd" d="M263.3 44.9c0-12.5-6.3-21-18.5-21-11.2 0-19 8.3-19 20.5 0 12 7.6 20.6 19.6 20.6 9.2 0 16-5 17.3-12.7H255c-1.2 3.5-5 5.7-9.5 5.7-7 0-10.9-4.6-11.7-11h29.5v-2.1Zm-28-2.7c-.9 1-1.4 2.1-1.6 3.4v-1.2c0-8 4.6-13.6 11.1-13.6 5.4 0 9.3 3.7 10.4 9.6h-14.4c-2.7 0-4.4.7-5.5 1.8Z" clipRule="evenodd"></path>
                        <path fill="#fa5d00" d="m198 24.8 10.4 31 10.3-31h8.1L213.1 64h-9.9l-13.7-39.3h8.5ZM179.8 24.8c-3.4 0-4.8.5-5.9 1.4a8 8 0 0 0-2.4 4.6v-6h-8V64h8V32.5h8.7c3.5 0 5-.8 6.1-2 1-1 1.4-2.4 1.4-3.8v-2h-8Z"></path>
                        <path fill="#fa5d00" fillRule="evenodd" d="M124.8 37.6c.4-8.3 7-13.8 16.8-13.8 9.5 0 15.6 5.4 15.6 13.7v26.6h-7.8v-6.6c-2 4.8-6.7 7.3-12.6 7.3-8.1 0-13-4.9-13-11.8 0-7.7 6-12.7 15-12.7 5.2 0 9.3 2 10.6 5v-6.9c0-4.6-3.2-7.6-8-7.6s-8.3 2.7-8.8 6.8h-7.8Zm7 14.8c0 3.6 2.7 5.9 7.2 5.9 4.4 0 7.8-2 10.4-5.9v-5.7h-10.6c-4.4 0-7 2.2-7 5.7Z" clipRule="evenodd"></path>
                        <path fill="#fa5d00" d="M27.6 64V40.6h8a4 4 0 0 0 3.8-4V24.7H27.6a4 4 0 0 0-4 4V64h4ZM51.3 1h-3.9v15.8a4 4 0 0 0-4 3.9V64h4a4 4 0 0 0 3.9-4V1ZM15.8 64h-4V5a3.9 3.9 0 0 1 4-3.9h4v43.3a4 4 0 0 1-4 4V64Z"></path>
                    </svg>
                </div>
            </div>

            <Section>
                <Heading primary>Start your free 30-day trial.</Heading>
                <Heading> Fully functional. No credit card required.</Heading>
            </Section>

            <a style={{ width: "30%", textDecoration: 'none' }} href={url}> <div style={{ width: "40%", margin: "auto", backgroundColor: "white", display: 'flex', border: '1px solid black', borderRadius: "10px" }}>
                <img width="30px" height="30px" style={{ marginTop: "10px", marginLeft: "20px" }} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjUiIGhlaWdodD0iMjUiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNMTIuNSA2LjFjMiAwIDMuMy45IDQuMSAxLjZsMy0yLjljLTEuOS0xLjgtNC4zLTIuOC03LjEtMi44LTQuMSAwLTcuNyAyLjQtOS40IDUuOGwzLjQgMi42Yy45LTIuNSAzLjItNC4zIDYtNC4zeiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9ImIiPjx1c2UgeGxpbms6aHJlZj0iI2EiIG92ZXJmbG93PSJ2aXNpYmxlIi8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjYikiPjxkZWZzPjxyZWN0IGlkPSJjIiB4PSItMTUuNSIgeT0iLTE1LjUiIHdpZHRoPSIyMjUuMiIgaGVpZ2h0PSI1NiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9ImQiPjx1c2UgeGxpbms6aHJlZj0iI2MiIG92ZXJmbG93PSJ2aXNpYmxlIi8+PC9jbGlwUGF0aD48cmVjdCB4PSItMi43IiB5PSItMy44IiBjbGlwLXBhdGg9InVybCgjZCkiIGZpbGw9IiNFQTQzMzUiIHdpZHRoPSIyOC4xIiBoZWlnaHQ9IjIwLjEiLz48L2c+PGRlZnM+PHBhdGggaWQ9ImUiIGQ9Ik0yMi42IDEyLjdjMC0uOS0uMS0xLjUtLjItMi4xaC05Ljl2My45aDUuOGMtLjEgMS0uNyAyLjQtMi4xIDMuNGwzLjMgMi42YzEuOS0xLjkgMy4xLTQuNiAzLjEtNy44eiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9ImYiPjx1c2UgeGxpbms6aHJlZj0iI2UiIG92ZXJmbG93PSJ2aXNpYmxlIi8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjZikiPjxkZWZzPjxyZWN0IGlkPSJnIiB4PSItMTUuNSIgeT0iLTE1LjUiIHdpZHRoPSIyMjUuMiIgaGVpZ2h0PSI1NiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9ImgiPjx1c2UgeGxpbms6aHJlZj0iI2ciIG92ZXJmbG93PSJ2aXNpYmxlIi8+PC9jbGlwUGF0aD48cmVjdCB4PSI2LjciIHk9IjQuOCIgY2xpcC1wYXRoPSJ1cmwoI2gpIiBmaWxsPSIjNDI4NUY0IiB3aWR0aD0iMjEuNyIgaGVpZ2h0PSIyMS41Ii8+PC9nPjxkZWZzPjxwYXRoIGlkPSJpIiBkPSJNNi41IDE0LjZjLS4yLS43LS40LTEuNC0uNC0yLjEgMC0uNy4xLTEuNC4zLTIuMWwtMy4zLTIuNmMtLjcgMS40LTEuMSAzLTEuMSA0LjdzLjQgMy4zIDEuMSA0LjdsMy40LTIuNnoiLz48L2RlZnM+PGNsaXBQYXRoIGlkPSJqIj48dXNlIHhsaW5rOmhyZWY9IiNpIiBvdmVyZmxvdz0idmlzaWJsZSIvPjwvY2xpcFBhdGg+PGcgY2xpcC1wYXRoPSJ1cmwoI2opIj48ZGVmcz48cmVjdCBpZD0iayIgeD0iLTE1LjUiIHk9Ii0xNS41IiB3aWR0aD0iMjI1LjIiIGhlaWdodD0iNTYiLz48L2RlZnM+PGNsaXBQYXRoIGlkPSJsIj48dXNlIHhsaW5rOmhyZWY9IiNrIiBvdmVyZmxvdz0idmlzaWJsZSIvPjwvY2xpcFBhdGg+PHJlY3QgeD0iLTMuOCIgeT0iMiIgY2xpcC1wYXRoPSJ1cmwoI2wpIiBmaWxsPSIjRkJCQzA1IiB3aWR0aD0iMTYuMiIgaGVpZ2h0PSIyMS4xIi8+PC9nPjxkZWZzPjxwYXRoIGlkPSJtIiBkPSJNMTIuNSAyM2MyLjggMCA1LjItLjkgNy0yLjVsLTMuMy0yLjZjLS45LjYtMi4xIDEuMS0zLjYgMS4xLTIuOCAwLTUuMS0xLjgtNi00LjRsLTMuNCAyLjZjMS43IDMuNCA1LjIgNS44IDkuMyA1Ljh6Ii8+PC9kZWZzPjxjbGlwUGF0aCBpZD0ibiI+PHVzZSB4bGluazpocmVmPSIjbSIgb3ZlcmZsb3c9InZpc2libGUiLz48L2NsaXBQYXRoPjxnIGNsaXAtcGF0aD0idXJsKCNuKSI+PGRlZnM+PHJlY3QgaWQ9Im8iIHg9Ii0xNS41IiB5PSItMTUuNSIgd2lkdGg9IjIyNS4yIiBoZWlnaHQ9IjU2Ii8+PC9kZWZzPjxjbGlwUGF0aCBpZD0icCI+PHVzZSB4bGluazpocmVmPSIjbyIgb3ZlcmZsb3c9InZpc2libGUiLz48L2NsaXBQYXRoPjxyZWN0IHg9Ii0yLjciIHk9IjguNyIgY2xpcC1wYXRoPSJ1cmwoI3ApIiBmaWxsPSIjMzRBODUzIiB3aWR0aD0iMjgiIGhlaWdodD0iMjAuMSIvPjwvZz48L3N2Zz4=" alt="" />
                <p style={{ textAlign: "left", marginLeft: "180px", textDecoration: "none", color: "black" }} className="pds-button pds-button-lg pds-w-full button-gapps" onClick={googleauth}>
                    Sign in with Google
                </p>
            </div></a>

            <div style={{ margin: 'auto', marginLeft: "550px", marginTop: "50px", width: "40%", display: 'flex' }}>
                <div style={{ width: "200px", backgroundColor: "black", height: "1px", border: "0.5px solid black" }}></div>
                <p style={{ marginTop: "-10px" }}>or</p>
                <br />
                <div></div>
                <div style={{ width: "200px", backgroundColor: "black", height: "1px", border: "0.5px solid black" }}></div>
            </div>

            <Button style={{ width: "30%", marginLeft: "550px", cursor: 'pointer', backgroundColor: "#11742A", borderRadius: "10px", color: "white" }}>Sign up with email</Button>


            <form className={style.formTag}>
                <div className={style.formdiv}>
                    <table>

                        <tbody>
                            {/* <tr>
                                <td colSpan="2">
                                    <h5> Sign up with your email below </h5>
                                </td>
                            </tr> */}

                            <tr>
                                <td>
                                    <label >First Name</label>
                                </td>
                                <td>
                                    {/* <input name="fname" onChange={handleInp} /> */}
                                    <input name="fname" />
                                </td>
                                <td>
                                    <label>Last Name</label>
                                </td>
                                <td>
                                    {/* <input name="lname" onChange={handleInp} /> */}
                                    <input name="lname" />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label>Company Name</label>
                                </td>
                                <td>
                                    {/* <input name="cname" onChange={handleInp} /> */}
                                    <input name="cname" />
                                </td>
                                <td>
                                    <label>Work Email</label>
                                </td>
                                <td>
                                    {/* <input name="wemail" onChange={handleInp} /> */}
                                    <input name="wemail" />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label>Password</label>
                                </td>
                                <td>
                                    {/* <input name="password" onChange={handleInp} /> */}
                                    <input name="password" />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    {/* <Button onClick={submitSignUp}>Create My Account</Button> */}
                                    {/* <Button >Create My Account</Button> */}
                                    {/* <Button style={{ cursor: 'pointer', backgroundColor: "#11742A", borderRadius: "10px", color: "white" }}>Sign up with email</Button> */}
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>

            </form>
            <p style={{ textAlign: 'center' }}>No credit card required.</p>
            <p style={{ textAlign: 'center' }}>Already a customer? <a href="">Sign in</a> </p>
            <p style={{ textAlign: 'center' }}>By creating an account, you agree to the Harvest <a href="https://www.getharvest.com/terms-of-service">Terms of service</a> and <a href="https://www.getharvest.com/privacy-policy">Privacy policy</a>.</p>
        </div >
    )
}
