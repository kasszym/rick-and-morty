import React, { Component, useEffect, useState } from "react";
import "./navbar.css";
import logo from './pinot.png'

export default function Navbar(){
    return(
        <div className = "navbar">
            <div className = "navbar__image"><img src = {logo}/></div>
        </div>
    )
}