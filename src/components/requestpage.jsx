import React from "react";
import { useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.css";
import '../css/requeststyle.css';
import '../css/requestglobal.css';
import rectangle1 from '../img/Google.svg';

export default function RequestPage() {
  return (
    <div className="container mx-auto bg-[#f2ede7]">
    <div className="sidebar">
        <div className="frame-container">
            <div className="frame">
                <div className="frame-1">
                    <div className="overlap-group1">
                        <div className="ellipse-1"></div>
                        <div className="group-11">
                            <div className="rectangle-35 rectangle"></div>
                            <div className="rectangle-36 rectangle"></div>
                        </div>
                        <div className="overlap-group">
                            <img
                                className="star-1"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                anima-src="https://cdn.animaapp.com/projects/652d7b5a8bc3daa96e9ac171/releases/652d7ba1ad293a7240f2bc34/img/star-1.svg"
                                alt="Star 1"
                            />
                            <img
                                className="star-3"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                anima-src="https://cdn.animaapp.com/projects/652d7b5a8bc3daa96e9ac171/releases/652d7ba1ad293a7240f2bc34/img/star-3.svg"
                                alt="Star 3"
                            />
                            <img
                                className="star-2"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                anima-src="https://cdn.animaapp.com/projects/652d7b5a8bc3daa96e9ac171/releases/652d7ba1ad293a7240f2bc34/img/star-2.svg"
                                alt="Star 2"
                            />
                            <img
                                className="vector"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                anima-src="https://cdn.animaapp.com/projects/652d7b5a8bc3daa96e9ac171/releases/652d7ba1ad293a7240f2bc34/img/vector.svg"
                                alt="Vector"
                            />
                            <img
                                className="vector-1"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                anima-src="https://cdn.animaapp.com/projects/652d7b5a8bc3daa96e9ac171/releases/652d7ba1ad293a7240f2bc34/img/vector-1.svg"
                                alt="Vector"
                            />
                            <img
                                className="vector-2"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                anima-src="https://cdn.animaapp.com/projects/652d7b5a8bc3daa96e9ac171/releases/652d7ba1ad293a7240f2bc34/img/vector-2.svg"
                                alt="Vector"
                            />
                        </div>
                    </div>
                    <h1 className="surname valign-text-middle">Good Fortune</h1>
                </div>
            </div>
            <div className="frame-2">
                <div className="overlap-group4">
                    <div className="frame-3">
                        <div className="frame-4">
                            <div className="overlap-group-1">
                                <div className="search-for valign-text-middle">Search for...</div>
                                <div className="frame-5">
                                    <img
                                        className="search-icon"
                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                        anima-src="https://cdn.animaapp.com/projects/652d7b5a8bc3daa96e9ac171/releases/652d7ba1ad293a7240f2bc34/img/search-icon.svg"
                                        alt="search icon"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group-75">
                        <div className="user-profile">
                            <img
                                className="user-icon"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                anima-src="https://cdn.animaapp.com/projects/652d7b5a8bc3daa96e9ac171/releases/652d7ba1ad293a7240f2bc34/img/user-icon.svg"
                                alt="user icon"
                            />
                        </div>
                        <div className="name valign-text-middle name-2">Jane Doe</div>
                    </div>
                </div>
                <div className="overlap-group3 notoserif-semi-bold-cararra-18px">
                    <div className="frame-6">
                        <img
                            className="signout-icon"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                            anima-src="https://cdn.animaapp.com/projects/652d7b5a8bc3daa96e9ac171/releases/652d7ba1ad293a7240f2bc34/img/signout-icon.svg"
                            alt="Signout icon"
                        />
                        <div className="sign-out valign-text-middle notoserif-semi-bold-cararra-18px">Sign out</div>
                    </div>
                    <div className="profile-settings">
                        <img
                            className="settings-icon"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                            anima-src="https://cdn.animaapp.com/projects/652d7b5a8bc3daa96e9ac171/releases/652d7ba1ad293a7240f2bc34/img/settings-icon.svg"
                            alt="settings icon"
                        />
                        <div className="profile-settings-1 valign-text-middle notoserif-semi-bold-cararra-18px">
                            Profile Settings
                        </div>
                    </div>
                    <div className="bookmarks">
                        <img
                            className="bookmark-icon"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                            anima-src="https://cdn.animaapp.com/projects/652d7b5a8bc3daa96e9ac171/releases/652d7ba1ad293a7240f2bc34/img/bookmark-icon.svg"
                            alt="bookmark icon"
                        />
                        <div className="bookmarks-1 valign-text-middle notoserif-semi-bold-cararra-18px">Bookmarks</div>
                    </div>
                    <div className="overlap-group1-1">
                        <div className="quotes valign-text-middle">Quotes</div>
                        <img
                            className="scroll-icon"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                            anima-src="https://cdn.animaapp.com/projects/652d7b5a8bc3daa96e9ac171/releases/652d7ba1ad293a7240f2bc34/img/scroll-icon.svg"
                            alt="scroll icon"
                        />
                    </div>
                    <div className="overlap-group2">
                        <div className="name-1 valign-text-middle name-2">Althea</div>
                        <img
                            className="crystall-ball-icon"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                            anima-src="https://cdn.animaapp.com/projects/652d7b5a8bc3daa96e9ac171/releases/652d7ba1ad293a7240f2bc34/img/crystall-ball-icon.svg"
                            alt="crystall ball icon"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>

<div className = "" >
    <div className="quotes-1">
        <div className="scroll-message">
            <p className="unlock-your-self-con valign-text-middle">
                Unlock your self-confidence, stimulate self-reflection, &amp; discover self-enlightenment with Madam
                Althea’s mystical chatbot insights.
            </p>
        </div>
        <div className="overlap-group3-1">
            <img
                className="icon-hand-sparkles"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                anima-src="https://cdn.animaapp.com/projects/652d7b5a8bc3daa96e9ac171/releases/652d7ba1ad293a7240f2bc34/img/---icon--hand-sparkles-@2x.png"
                alt="icon &#34;Hand Sparkles&#34;"
            />
            <div className="make-a-wish valign-text-middle">Make a Wish</div>
        </div>
        <div className="overlap-group-container">
            <div className="overlap-group2-1">
                <img
                    className="icon-brain"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                    anima-src="https://cdn.animaapp.com/projects/652d7b5a8bc3daa96e9ac171/releases/652d7ba1ad293a7240f2bc34/img/---icon--brain-@2x.png"
                    alt="icon &#34;Brain&#34;"
                />
                <div className="philosophy">Philosophy</div>
            </div>
            <div className="overlap-group1-2">
                <img
                    className="icon-dove"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                    anima-src="https://cdn.animaapp.com/projects/652d7b5a8bc3daa96e9ac171/releases/652d7ba1ad293a7240f2bc34/img/---icon--dove-@2x.png"
                    alt="icon &#34;Dove&#34;"
                />
                <div className="affirmation">Affirmation</div>
            </div>
            <div className="overlap-group-2">
                <img
                    className="icon-scroll"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                    anima-src="https://cdn.animaapp.com/projects/652d7b5a8bc3daa96e9ac171/releases/652d7ba1ad293a7240f2bc34/img/---icon--scroll-@2x.png"
                    alt="icon &#34;Scroll&#34;"
                />
                <div className="proverb">Proverb</div>
            </div>
        </div>
    </div>
    </div >
    </div >
  )
}