import React, { Component } from 'react'
import "./PageStyles/startupage.css"
import Timeline from "../Components/Presentational/Timeline"

export class StartupPage extends Component {
    render() {
        return (
            <div style = {{color: 'white'}}>
                <div className = "sp_main_container">
                    <div className = "sp_left_flex">
                        <div className = "startup_name_container">
                            <h2>Krikaa</h2>
                            <span className = "ceo_container">
                                    <h6>Amogh</h6>
                                </span>
                        </div>
                        <div className = "about_container">
                            Quis consectetur amet aliqua culpa nisi dolore ea labore excepteur veniam. Do magna reprehenderit esse commodo nostrud ad velit minim magna sit irure dolor veniam officia. Laborum dolor nostrud sit eiusmod excepteur proident in adipisicing tempor sit pariatur aliquip. Fugiat aliqua velit nulla deserunt minim aliquip voluptate velit. Laboris veniam nostrud pariatur dolore esse.
                        </div>
                    </div>
                    <div className = "sp_right_flex">
                        <Timeline/>
                    </div>
                </div>
                <div className = "sp_posts_wrapper">
                    <div className = "sp_posts_container">
                        Here will be all posts
                    </div>
                </div>
            </div>
        )
    }
}

export default StartupPage
