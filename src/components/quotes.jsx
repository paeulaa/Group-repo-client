import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.css";
import "../css/output.css";
import "../css/requeststyle.css";
import GroupedLogo from "../img/Grouped_Logo.svg";
import GroupedProfile from "../img/Grouped_Profile.svg";
import Althea from "../img/Althea.svg";
import QuotesIcon from "../img/Quotes.svg";
import BookmarksIcon from "../img/Bookmarks.svg";
import ProfileSettingsIcon from "../img/Profile Settings.svg";
import SignOutIcon from "../img/sign-out.svg";
import ScrollMessageIcon from "../img/Scroll Message.svg";
import SparkleWishHandIcon from "../img/sparkle-wish-hand.svg";
import PhilBtnIcon from "../img/phil-btn.svg";
import ProvBtnIcon from "../img/prov-btn.svg";
import AffirmBtnIcon from "../img/affirm-btn.svg";

export default function Quotes() {
  const navigate = useNavigate();

  return (
    <div className="body">
      <div>
        <div className="fixed top-0 left-0 inset-y-0 z-50 flex w-72 flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
            <div>
              <Link to="#" className="flex h-16 shrink-0 items-center">
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
                        to="chat.html"
                        className="bg-gray-800 text-white group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
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
                        to="quotes.html"
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
                        to="bookmark.html"
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
                        to="profilesettings.html"
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
              <Link
                to="signout.html"
                className="flex justify-center items-center"
              >
                <img
                  className="btn h-7 w-auto"
                  src={SignOutIcon}
                  alt="Sign Out Icon"
                ></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="scroll-message absolute">
          <img
            className="quotes-scroll"
            src={ScrollMessageIcon}
            alt="Scroll Message Icon"
          ></img>
          <div className="overlay-text absolute top-0 left-0 w-full h-full flex items-center justify-center"></div>
        </div>
      </div>
      <div className="make-a-wish-section">
        <div className="overlap-8">
          <img
            className="icon-hand-sparkles"
            src={SparkleWishHandIcon}
            alt="Sparkle Wish Hand Icon"
          ></img>
        </div>
      </div>
      <div className="py-10 lg:pl-72">
        <div className="btn px-4 sm:px-6 lg:px-8">
          <div>
            <a
              href="chat.html"
              className="philosophy-filter"
              onclick="request('Philosophy')"
            >
              <div className="overlap-7">
                <img
                  className="phil-btn"
                  src={PhilBtnIcon}
                  alt="Philosophy Button"
                ></img>
              </div>
            </a>
          </div>
          <div>
            <a href="chat.html" className="btn proverb-filter">
              <div className="overlap-group-3">
                <div>
                  <img
                    className="prov-btn"
                    src={ProvBtnIcon}
                    alt="Proverb Button"
                  ></img>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a href="chat.html" className="btn affirmation-filter">
              <div className="overlap-7">
                <img
                  className="affirm-btn"
                  src={AffirmBtnIcon}
                  alt="Affirmation Button"
                ></img>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
