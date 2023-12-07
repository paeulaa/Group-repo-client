import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.css";
import "../css/bookmark.css";
import "../css/output.css";
import { Link } from "react-router-dom";
import GroupedLogo from "../img/Grouped_Logo.svg";
import GroupedProfile from "../img/Grouped_Profile.svg";
import Althea from "../img/Althea.svg";
import QuotesIcon from "../img/Quotes.svg";
import BookmarksIcon from "../img/Bookmarks.svg";
import ProfileSettingsIcon from "../img/Profile Settings.svg";
import SignOutIcon from "../img/sign-out.svg";

export default function Bookmarks() {
  return (
    <div className="mid-fidelity">
      <div className="fixed top-0 left-0 inset-y-0 z-50 flex w-72 flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
          <div>
            <Link to="/" className="flex h-16 shrink-0 items-center">
              <img
                className="btn h-10 w-auto"
                src={GroupedLogo}
                alt="Company Logo"
              ></img>
            </Link>
          </div>
          <div className="icon-user-circle-wrapper">
            <img
              className="icon-user-circle"
              src={GroupedProfile}
              alt="User Profile"
            ></img>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  <li>
                    <Link
                      to="/althea"
                      className="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    >
                      <img
                        className="btn h-7 w-auto"
                        src={Althea}
                        alt="Crystal Ball"
                      ></img>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/quotes"
                      className="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    >
                      <img
                        className="btn h-7 w-auto"
                        src={QuotesIcon}
                        alt="Quotes Icon"
                      ></img>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/bookmark"
                      className="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    >
                      <img
                        className="btn h-7 w-auto"
                        src={BookmarksIcon}
                        alt="Bookmark Icon"
                      ></img>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/settings"
                      className="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    >
                      <img
                        className="btn h-7 w-auto"
                        src={ProfileSettingsIcon}
                        alt="Cog Icon"
                      ></img>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div>
            <Link to="/signout" className="flex justify-center items-center">
              <img
                className="btn h-7 w-auto"
                src={SignOutIcon}
                alt="Sign Out Icon"
              ></img>
            </Link>
          </div>
        </div>
      </div>
      <div className="page-group">
        <div className="page-title">Bookmarks</div>
        <div className="tabs">
          <img className="line" src="/img/line-3.svg" />
          <ul className="categories">
            <li className="category" data-category="all">
              Overview
            </li>
            <li className="category" data-category="quote">
              Quotes
            </li>
            <li className="category" data-category="chat">
              Althea
            </li>
          </ul>
        </div>
        <ul className="bookmarks">
          <li className="bookmark" data-type="chat">
            <div className="bookmark-container">
              <img className="img" src="/img/share-icon.svg" />
              <img className="img-2" src="/img/delete-icon.svg" />
              <div className="text-wrapper">Stressed out by deadline</div>
              <div className="sample-frame">
                <div className="chat-message">
                  <span className="user-name">Jane Doe</span>
                  <p className="from-user">
                    Hello, Althea. I've been feeling quite stressed and
                    overwhelmed lately.
                  </p>
                  <div className="althea-chat">
                    <img className="althea-icon" src="/img/althea-icon.svg" />
                    <div className="althea-bubble">
                      <span className="althea-name">Althea</span>
                      <p className="from-althea">
                        Greetings, dear traveler. I'm here to help you find some
                        solace in the midst of life's storms. 🌧️ Let's work
                        through this together. May I know what's been troubling
                        you?
                      </p>
                    </div>
                  </div>
                  <span className="user-name">Jane Doe</span>
                  <p className="from-user">
                    It's work-related pressure and deadlines. I just can't seem
                    to catch a break.
                  </p>
                  <div className="althea-chat">
                    <img className="althea-icon" src="/img/althea-icon.svg" />
                    <div className="althea-bubble">
                      <span className="althea-name">Althea</span>
                      <p className="from-althea">
                        I understand how demanding work can be at times.
                        Remember, challenges are opportunities in disguise.
                        Here's your daily affirmation: "I am capable of managing
                        my tasks with grace and ease. Each challenge I face is a
                        stepping stone to my growth."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="bookmark" data-type="quote">
            <div className="overlap-2">
              <img className="img" src="/img/share-icon.svg" />
              <img className="img-2" src="/img/delete-icon.svg" />
              <div className="text-wrapper">An early-morning walk...</div>
              <div className="quotes-wrapper">
                <div className="quotes">
                  <div className="sample-quote">
                    <p className="an-early-morning">
                      <span className="span">
                        "An early-morning walk <br />
                        is a blessing for the whole day."
                      </span>
                      <span className="text-wrapper-2">&nbsp;</span>
                    </p>
                    <div className="text-wrapper-3">- Henry David Thoreau</div>
                  </div>
                  <img className="quote-scroll" src="/img/quotes-scroll.png" />
                </div>
              </div>
            </div>
          </li>
          <li className="bookmark" data-type="quote">
            <div className="bookmark-container">
              <img className="img" src="/img/share-icon.svg" />
              <img className="img-2" src="/img/delete-icon.svg" />
              <div className="text-wrapper">Stressed out by deadline</div>
              <div className="sample-frame">
                <div className="chat-message">
                  <span className="user-name">Jane Doe</span>
                  <p className="from-user">
                    Hello, Althea. I've been feeling quite stressed and
                    overwhelmed lately.
                  </p>
                  <div className="althea-chat">
                    <img className="althea-icon" src="/img/althea-icon.svg" />
                    <div className="althea-bubble">
                      <span className="althea-name">Althea</span>
                      <p className="from-althea">
                        Greetings, dear traveler. I'm here to help you find some
                        solace in the midst of life's storms. 🌧️ Let's work
                        through this together. May I know what's been troubling
                        you?
                      </p>
                    </div>
                  </div>
                  <span className="user-name">Jane Doe</span>
                  <p className="from-user">
                    It's work-related pressure and deadlines. I just can't seem
                    to catch a break.
                  </p>
                  <div className="althea-chat">
                    <img className="althea-icon" src="/img/althea-icon.svg" />
                    <div className="althea-bubble">
                      <span className="althea-name">Althea</span>
                      <p className="from-althea">
                        I understand how demanding work can be at times.
                        Remember, challenges are opportunities in disguise.
                        Here's your daily affirmation: "I am capable of managing
                        my tasks with grace and ease. Each challenge I face is a
                        stepping stone to my growth."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="bookmark" data-type="chat">
            <div className="overlap-2">
              <img className="img" src="/img/share-icon.svg" />
              <img className="img-2" src="/img/delete-icon.svg" />
              <div className="text-wrapper">An early-morning walk...</div>
              <div className="quotes-wrapper">
                <div className="quotes">
                  <div className="sample-quote">
                    <p className="an-early-morning">
                      <span className="span">
                        "An early-morning walk <br />
                        is a blessing for the whole day."
                      </span>
                      <span className="text-wrapper-2">&nbsp;</span>
                    </p>
                    <div className="text-wrapper-3">- Henry David Thoreau</div>
                  </div>
                  <img className="quote-scroll" src="/img/quotes-scroll.png" />
                </div>
              </div>
            </div>
          </li>
          <li className="bookmark" data-type="chat">
            <div className="bookmark-container">
              <img className="img" src="/img/share-icon.svg" />
              <img className="img-2" src="/img/delete-icon.svg" />
              <div className="text-wrapper">Stressed out by deadline</div>
              <div className="sample-frame">
                <div className="chat-message">
                  <span className="user-name">Jane Doe</span>
                  <p className="from-user">
                    Hello, Althea. I've been feeling quite stressed and
                    overwhelmed lately.
                  </p>
                  <div className="althea-chat">
                    <img className="althea-icon" src="/img/althea-icon.svg" />
                    <div className="althea-bubble">
                      <span className="althea-name">Althea</span>
                      <p className="from-althea">
                        Greetings, dear traveler. I'm here to help you find some
                        solace in the midst of life's storms. 🌧️ Let's work
                        through this together. May I know what's been troubling
                        you?
                      </p>
                    </div>
                  </div>
                  <span className="user-name">Jane Doe</span>
                  <p className="from-user">
                    It's work-related pressure and deadlines. I just can't seem
                    to catch a break.
                  </p>
                  <div className="althea-chat">
                    <img className="althea-icon" src="/img/althea-icon.svg" />
                    <div className="althea-bubble">
                      <span className="althea-name">Althea</span>
                      <p className="from-althea">
                        I understand how demanding work can be at times.
                        Remember, challenges are opportunities in disguise.
                        Here's your daily affirmation: "I am capable of managing
                        my tasks with grace and ease. Each challenge I face is a
                        stepping stone to my growth."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
