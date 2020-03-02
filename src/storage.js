const lebonnet = require("./static/images/Lebonnet.jpg");
const socialapp = require("./static/images/SocialApp.jpg");
const gameguides = require("./static/images/GameGuides.jpg");
const hackernews = require("./static/images/HackerNews.jpg");

export const storage = [
  {
    img: lebonnet,
    liveLink: "https://lebonnet-0000.firebaseapp.com",
    description: {
      githubLink: "https://github.com/ODanyor/LeBonnet",
      title: "Le Bonnet Clone By Dany",
      content:
        "This is a modern ecommerce concept app made with React.js. Moreoften I work on the most important features to get different experiences. This is very nice built Ecommerce Website with such cool features as cart, authorization and authentication, post new products, etc. I've spent about 1-2weeks to finish it."
    }
  },
  {
    img: socialapp,
    description: {
      githubLink: "https://github.com/ODanyor/SocialApp",
      title: "Full Stack Social App",
      content:
        "Very cool social app for posting tweats and liking them. App provided by automatic notification system on likes and posts. Was built by React, Redux, Firebase cloud forestore, firebase functions and more small libries."
    }
  },
  {
    img: gameguides,
    liveLink: "https://odanyor.github.io/GameGuidez",
    description: {
      githubLink: "https://github.com/ODanyor/GameGuidez",
      title: "GameGuides",
      content:
        "Basicly built for using Authorization and Authentication system of Firebase. Also authenticated users are able to post posts and all posts will be displayed in live time for all online users."
    }
  },
  {
    img: hackernews,
    liveLink: "https://odanyor.github.io/HackerNews",
    description: {
      githubLink: "https://github.com/ODanyor/HackerNews",
      title: "HackerNews api using website",
      content:
        "This application shows different news basicly about IT sphere. It's enough small project but uses many react functionalities, such as React hooks, context and lazyLoading just like this portfolio."
    }
  }
];
