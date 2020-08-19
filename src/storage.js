const lebonnet = require('./static/projects/Lebonnet.jpg')
const hackernews = require('./static/projects/HackerNews.jpg')
const sendflowers = require('./static/projects/SendFlowers.jpg')
const moneytracker = require('./static/projects/MoneyTrackerApp.jpg')

export const storage = [
  {
    img: moneytracker,
    liveLink: 'https://moneytrackerapp-0000.web.app/',
    description: {
      githubLink: 'https://github.com/ODanyor/money-tracker-app',
      title: 'Money Tracker App',
      content:
        'This application is tracking for your expenses and profits. According to the added transactions it will build the diagrams for the better data analyzing. To test this app, first you need to authenticate yourself. The application was built by React, Redux, Firebase. For detailed information, please, check github repository. (Warning! The app is not responsive yet)',
    },
  },
  {
    img: sendflowers,
    liveLink: 'https://www.sendflowers.io/',
    description: {
      title: 'Send Flowers(Production)',
      content:
        'This a fully functional react application that makes some actions with provided by the backend API. You can sort, filter and search for the data. In this project I was working only on the frontend and I have finished it in the rate of 2 weeks. Here is no link for the source code because the app is private and was ordered by customer.',
    },
  },
  {
    img: lebonnet,
    liveLink: 'https://lebonnet-0000.firebaseapp.com',
    description: {
      githubLink: 'https://github.com/ODanyor/lebonnet-clone',
      title: 'Le Bonnet Clone By Dany',
      content:
        "This is a modern ecommerce concept app made with React.js. Moreoften I work on the most important features to get different experiences. This is very nice built Ecommerce Website with such cool features as cart, authorization and authentication, post new products, etc. I've spent about 1-2weeks to finish it.",
    },
  },
  {
    img: hackernews,
    liveLink: 'https://odanyor.github.io/hacker-news',
    description: {
      githubLink: 'https://github.com/ODanyor/hacker-news',
      title: 'HackerNews api using website',
      content:
        "This application shows different news basicly about IT sphere. It's enough small project but uses many react functionalities, such as React hooks, context and lazyLoading just like this portfolio.",
    },
  },
]
