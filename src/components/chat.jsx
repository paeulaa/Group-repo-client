import { Link } from 'react-router-dom'; 
import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../css/output.css";
import "../css/chatstyle.css";
import "bootstrap/dist/css/bootstrap.css";
import GroupedLogo from '../img/Grouped_Logo.svg';
import GroupedProfile from '../img/Grouped_Profile.svg';
import Althea from '../img/Althea.svg';
import QuotesIcon from '../img/Quotes.svg';
import BookmarksIcon from '../img/Bookmarks.svg';
import ProfileSettingsIcon from '../img/Profile Settings.svg';
import SignOutIcon from '../img/sign-out.svg';
import AltheaH3 from '../img/althea-h3.svg'
import AltheaH2 from '../img/althea-h2.svg'
import AltheaH1 from '../img/althea-h1.svg'
import BlackBookmark from '../img/black-bookmark.svg'
import PaperPlane from '../img/icon-paper-plane.png'
import UserBubble1 from '../img/user-bubble-1.svg'
import UserBubble2 from '../img/user-bubble-2.svg'
import UserIcon from '../img/user_icon.svg'
import AltheaQuery from '../img/Althea-Query.svg'
import AltheaGreeting from '../img/Althea-Greeting.svg'
import AltheaBubble from '../img/Althea-Bubble.svg'


// Define the Chat component
export default function Chat() {
    const navigate = useNavigate();

    // State to manage user input
    const [userInput, setUserInput] = useState("");

    // Function to handle sending a message
    const sendMessage = () => {
        // Append user message to chatlog
        appendMessage(userInput, 'user');
        // Get and append bot response
        getBotResponse(userInput);
        // Clear user input
        setUserInput('');
    }

    // Function to append a message to the chatlog
    const appendMessage = (message, sender) => {
        const chatlog = document.getElementById('chatlog');
        const newMessage = document.createElement('p');
        newMessage.classList.add(sender + '-message');
        newMessage.innerHTML = message;
        chatlog.appendChild(newMessage);
    }

    // Function to get a bot response
    const getBotResponse = (userInput) => {
        const botResponse = generateBotResponse();
        appendMessage(botResponse, 'bot');
    }

    // Function to generate a random bot response
    const generateBotResponse = () => {
        const responses = [
            "You got this",
            "You'll figure it out",
            "You're a smart cookie",
            "I believe in you",
            "Sucking at something is the first step towards being good at something",
            "Struggling is part of learning",
            "Everything has cracks - that's how the light gets in",
            "Mistakes don't make you less capable",
            "We are all works in progress",
            "You are a capable human",
            "You know more than you think",
            "10x engineers are a myth",
            "If everything was easy you'd be bored",
            "I admire you for taking this on",
            "You're resourceful and clever",
            "You'll find a way",
            "I know you'll sort it out",
            "Struggling means you're learning",
            "You're doing a great job",
            "It'll feel magical when it's working",
            "I'm rooting for you",
            "Your mind is full of brilliant ideas",
            "You make a difference in the world by simply existing in it",
            "You are learning valuable lessons from yourself every day",
            "You are worthy and deserving of respect",
            "You know more than you knew yesterday",
            "You're an inspiration",
            "Your life is already a miracle of chance waiting for you to shape its destiny",
            "Your life is about to be incredible",
            "Nothing is impossible. The word itself says 'I’m possible!'",
            "Failure is just another way to learn how to do something right",
            "I give myself permission to do what is right for me",
            "You can do it",
            "It is not a sprint, it is a marathon. One step at a time",
            "Success is the progressive realization of a worthy goal",
            "People with goals succeed because they know where they’re going",
            "All you need is the plan, the roadmap, and the courage to press on to your destination",
            "The opposite of courage in our society is not cowardice... it is conformity",
            "Whenever we’re afraid, it’s because we don’t know enough. If we understood enough, we would never be afraid",
            "The past does not equal the future",
            "The path to success is to take massive, determined action",
            "It’s what you practice in private that you will be rewarded for in public",
            "Small progress is still progress",
            "Don't worry if you find flaws in your past creations, it's because you've evolved",
            "Starting is the most difficult step - but you can do it",
            "Don't forget to enjoy the journey",
            "It's not a mistake, it's a learning opportunity",
        ];
        const randomIndex = Math.floor(Math.random() * responses.length);
        return responses[randomIndex];
    };

    return (
        <div className="body">
            <div>
                <div className="fixed top-0 left-0 inset-y-0 z-50 flex w-72 flex-col">
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
                        <div>
                            <Link to="#" className="flex h-16 shrink-0 items-center">
                                <img className="btn h-10 w-auto" src={GroupedLogo} alt="Company Logo"></img>
                            </Link>
                        </div>
                        <div className="icon-user-circle-wrapper">
                            <img className="icon-user-circle" src={GroupedProfile} alt="User Profile"></img>
                        </div>
                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        <li>
                                            <Link to="chat.html"
                                                className="bg-gray-800 text-white group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                                                <img className="btn h-7 w-auto" src={Althea} alt="Crystal Ball"></img>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="quotes.html"
                                                className="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                                                <img className="btn h-7 w-auto" src={QuotesIcon} alt="Quotes Icon"></img>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="bookmark.html"
                                                className="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                                                <img className="btn h-7 w-auto" src={BookmarksIcon} alt="Bookmark Icon"></img>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="profilesettings.html"
                                                className="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                                                <img className="btn h-7 w-auto" src={ProfileSettingsIcon} alt="Cog Icon"></img>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <div>
                            <Link to="signout.html" className="flex justify-center items-center">
                                <img className="btn h-7 w-auto" src={SignOutIcon} alt="Sign Out Icon"></img>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chat-page">
                <div className="group-8">
                    <img className="group-9" src={AltheaH3} alt="Althea Head 3"></img>
                    <img className="icon-bookmark" src={BlackBookmark} alt="Black Bookmark Icon"></img>
                    <div className="content">
                        <div id="chatlog" className="text-wrapper-7"></div>
                        <img className="chat" src={AltheaBubble} alt="Althea Chat Bubble"></img>
                    </div>
                </div>
                <div className="group-10">
                    <img className="icon-user-circle-2" src={UserIcon} alt="Black User Icon"></img>
                    <div className="content-2">
                        <img className="content-2" src={UserBubble1} alt="White Chat Bubble"></img>
                    </div>
                </div>
                <div className="group-11">
                    <img className="icon-user-circle-3" src={UserIcon} alt="Black User Icon"></img>
                    <div className="overlap-9">
                        <img className="content-3" src={UserBubble2} alt="White Chat Bubble"></img>
                        <p className="text-wrapper-0">
                            I wish . . .
                            <input type="text" id="userInput"></input>
                            <input
                                type="image"
                                src={PaperPlane}
                                alt="Send"
                                width="42"
                                height="42"
                                onClick={sendMessage}
                            ></input>
                        </p>
                    </div>
                </div>
                <div className="group-12">
                    <img className="group-13" src={AltheaH1} alt="Althea Head 1"></img>
                    <div className="content-4">
                        <img className="content" src={AltheaGreeting} alt="Althea Chat Bubble"></img>
                    </div>
                </div>
                <div className="group-14">
                    <img className="group-13" src={AltheaH2} alt="Althea Head 2"></img>
                    <div className="content-5">
                        <img className="chat" src={AltheaQuery} alt="Althea Chat Bubble"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
