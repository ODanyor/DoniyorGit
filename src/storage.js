const lebonnet = require("./static/projects/Lebonnet.jpg");
const socialapp = require("./static/projects/SocialApp.jpg");
const gameguides = require("./static/projects/GameGuides.jpg");
const hackernews = require("./static/projects/HackerNews.jpg");
const moneytracker = require("./static/projects/MoneyTrackerApp.jpg");

export const storage = [
  {
    img: moneytracker,
    liveLink: "https://moneytrackerapp-0000.web.app/",
    description: {
      githubLink: "https://github.com/ODanyor/money-tracker-app",
      title: "Money Tracker App",
      content:
        "This application is tracking for your expenses and profits. According to the added transactions it will build the diagrams for the better data analyzing. To test this app, first you need to authenticate yourself. The application was built by React, Redux, Firebase. For detailed information, please, check github repository. (Warning! The app is not responsive yet)"
    }
  },
  {
    img: lebonnet,
    liveLink: "https://lebonnet-0000.firebaseapp.com",
    description: {
      githubLink: "https://github.com/ODanyor/lebonnet-clone",
      title: "Le Bonnet Clone By Dany",
      content:
        "This is a modern ecommerce concept app made with React.js. Moreoften I work on the most important features to get different experiences. This is very nice built Ecommerce Website with such cool features as cart, authorization and authentication, post new products, etc. I've spent about 1-2weeks to finish it."
    }
  },
  {
    img: socialapp,
    description: {
      githubLink: "https://github.com/ODanyor/social-app",
      title: "Full Stack Social App",
      content:
        "Very cool social app for posting tweats and liking them. App provided by automatic notification system on likes and posts. Was built by React, Redux, Firebase cloud forestore, firebase functions and more small libries."
    }
  },
  {
    img: gameguides,
    liveLink: "https://odanyor.github.io/game-guidez",
    description: {
      githubLink: "https://github.com/ODanyor/game-guidez",
      title: "GameGuides",
      content:
        "Basicly built for using Authorization and Authentication system of Firebase. Also authenticated users are able to post posts and all posts will be displayed in live time for all online users."
    }
  },
  {
    img: hackernews,
    liveLink: "https://odanyor.github.io/hacker-news",
    description: {
      githubLink: "https://github.com/ODanyor/hacker-news",
      title: "HackerNews api using website",
      content:
        "This application shows different news basicly about IT sphere. It's enough small project but uses many react functionalities, such as React hooks, context and lazyLoading just like this portfolio."
    }
  }
];
