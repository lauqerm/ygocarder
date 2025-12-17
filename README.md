If you are looking for V1, please visit [ygocarder-v1 repo](https://github.com/lauqerm/ygocarder-v1).

## YGO Carder

* Template provided by: [Grezar](https://www.deviantart.com/grezar), [9558able](https://www.deviantart.com/9558able), [SlackerMagician](https://www.deviantart.com/slackermagician) and [icycatelf](https://www.deviantart.com/icycatelf).
* GUI by me, a.k.a @lauqerm

### Thank you

Once again, my deepest gratitude goes to [Grezar](https://www.deviantart.com/grezar), [9558able](https://www.deviantart.com/9558able), [SlackerMagician](https://www.deviantart.com/slackermagician) and [icycatelf](https://www.deviantart.com/icycatelf), for allowing me to use their templates. Their hard work is the reason this project is possible in the first place.

### My goal

Create an easy-to-use GUI to make Yu-Gi-Oh! cards, for anyone who cannot afford Photoshop or the skill needed to use it.

Even though my app supports conversion between cards made by this app and cards made by other vendors such as YGOPro, Dueling Nexus and Neo Card Maker, I do not have any affiliation with them.

### What does it provide?

To put it more correctly: what advantage does my app offer over a dozen Yu-Gi-Oh! card-maker apps out there? In short, there are just 2 things:
* The UI - Most of the changes can be made with just a single click or keystroke. Other apps will need you to constantly cycle through multiple dropdowns.
* Automatic text compression - You may notice modern Yu-Gi-Oh! cards try to compress words to avoid using smaller font sizes. YGO Carder can replicate that behavior rather automatically, while other apps will just simply keep reducing font size and adding new lines, or provide you with a manual slider without solving any edge cases.

Other advantages such as foils and additional card frames come from the template of use, so again, big shout out to template owners who put their time and effort into creating them.

### What does it NOT provide?

The app of course has multiple shortcomings, many of them are by design, while others may become future plans:
* No template for Rush Duel - Template for Rush Duel is already available, so maybe I will revisit this idea in the future.
* No "ultra" card size - While some apps may offer 4K resolution for their card, this app does not. While I think the current card resolution of my app is decently enough, you can always seek for professional up-scale method. Up-scaling is a resource-intense operation that requires a powerful server to do which I cannot provide, while most of the user devices will hang for a good few minutes trying to run it, so there is no out for this problem in the near future.
* No remote saving - This app does not have a dedicated server for such a feature, but thanks to that I can serve the app for a long time completely free without the need for any financial support. The app only provides very simple card information export and import, and your card art should come from online links.

### Can I use your source code in my site?

Yes, you are free to fork it and do whatever, just don't claim it is yours. Also, I will be extra thankful if you keep the credit for me and the template makers.

If you want to modify app's assets, better contact template makers and ask for permission yourself.

You may also contact me through [Reddit](https://www.reddit.com/user/lauqerm/), but I rarely respond in time though, I only visit reddit once in a while.

### How to run

### Environment

If you want to deploy the app elsewhere, you will need to prepare your own `.env.production` file, which the following attributes:
```env
### Template file used for batch import function
REACT_APP_TEMPLATE_FILE="https://drive.google.com/file/d/1c8SdS0n1UERomLKdlm28dSul5ojBfSiC/view?usp=sharing"
```

### Local development

Prerequisites:
* [Node](https://nodejs.org/) version: 20+ (I'm using v20.10.0)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

If you are already familiar with a React app, you can run the app with the following steps:
* Install all the package: `yarn install` or `npm install`
* Run the app: `yarn start` or `npm start`
* Build the app: `yarn build` or `npm run build`

#### Using Docker

Check [README.Docker.md](README.docker.md)