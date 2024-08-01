<div align="center">
  <h1>Wistia Video Player</h1>

Project Link: [https://wistia-video-player.vercel.app/](https://wistia-video-player.vercel.app/)

A custom video player component built using React and the [Wistia JavaScript Player API](https://docs.wistia.com/docs/javascript-player-api). The React component itself and all the different props it accepts are documented in [Storybook](https://66aa07fde316cf9b3445ce6d-wzfdwyrtml.chromatic.com/). If you would like to try out the video player with your own Wistia videos, head on over to the [Wistia Player Playground](https://wistia-video-player.vercel.app/).

<h4>
    <a href="https://wistia-video-player.vercel.app/">Playground</a>
  <span> · </span>
    <a href="https://66aa07fde316cf9b3445ce6d-wzfdwyrtml.chromatic.com/">Storybook</a>
  <span> · </span>
    <a href="https://docs.wistia.com/docs/javascript-player-api">Wistia JavaScript Player API</a>
  <span> · </span> 
    <a href="https://github.com/philipstubbs13/wistia-video-player/issues">Report Issue</a>
  </h4>
</div>

<br />

# Table of Contents

- [Acknowledgments](#about-the-project)
- [About the Project](#about-the-project)
  - [Built With](#tech-stack)
  - [Features](#features)
- [Getting Started](#getting-started)
- [Wistia Player Playground](#playground)
- [Running Storybook](#running-storybook)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Contact](#contact)
- [Issues And Requests](#issues-and-requests)

## <a name="acknowledgments"></a>Acknowledgments

- [Wistia](https://wistia.com/) for their awesome video platform and API.
- [Next.js](https://nextjs.org/) for the robust and flexible React framework.

## <a name="about-the-project"></a>About the Project

### <a name="tech-stack"></a>Built With

  <ul>
      <li><a href="https://docs.wistia.com/docs/javascript-player-api"">Wistia JavaScript Player API</a></li>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://react.dev/">React.js</a></li>
    <li><a href="https://nextjs.org/">Next.js</a></li>
    <li><a href="https://tailwindcss.com/">Tailwind</a></li>
    <li><a href="https://66aa07fde316cf9b3445ce6d-wzfdwyrtml.chromatic.com/">Storybook</a></li>
    <li><a href="https://www.chromatic.com/library?appId=66aa07fde316cf9b3445ce6d">Chromatic</a></li>
  </ul>

### <a name="features"></a>Features

- **Embed Wistia videos using their video IDs.** You can pass any Wistia video id to the video player component via the **videoId** prop. When you provide the video id, the component loads the video and all the required assets from Wistia using the Wistia JavaScript Player API. All of this work is done by the component asynchronously when the page loads.

- **Responsive design for various screen sizes.** There are no fixed width or height values. The component is responsive and dynamically adjusts to fit the width and height of its parent container.

- **Easy integration of the Wistia JavaScript Player API into any React application.** The [Wistia Player Playground](https://wistia-video-player.vercel.app/) site shows an example of how you can efficiently and effectively integrate the Wistia video player component in a Next.js application using the app router. Although just one example, it shows just how easy the Wistia JavaScript Player API is to work with and integrate as a React developer.

## <a name="getting-started"></a>Getting Started

Follow these instructions to set up and run the project on your local machine.

Clone the project from GitHub.

```bash
  git clone https://github.com/philipstubbs13/wistia-video-player.git
```

Go to the project directory.

```bash
  cd wistia-video-player
```

Install dependencies.

```bash
  npm install
```

Start the Next.js development server.

```bash
  npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## <a name="playground"></a> Wistia Player Playground

The [Wistia Player Playground](https://wistia-video-player.vercel.app/) shows an example of how to integrate Wistia into a Next.js application using the app router.

To use the Wistia video player in the playground, provide the Wistia video ID using the **videoId** URL query parameter. For example:

```bash
https://wistia-video-player.vercel.app/?videoId=hv24s97rudm
```

## <a name="running-storybook"></a>Running Storybook

This project uses [Storybook](https://storybook.js.org/). Storybook is a frontend development tool for developing, testing, and documenting UI components in complete isolation from the applications in which they are used. In this Storybook, you will find a basic, working example of the video component, documentation on the various props the component accepts, and more.

To run Storybook for this project, run the following command in the root directory of this project.

```bash
  npm run storybook
```

The Storybook for this project is deployed to the following URL: <https://66aa07fde316cf9b3445ce6d-wzfdwyrtml.chromatic.com/>

## Chromatic

For this project, Storybook is deployed via Chromatic. Chromatic catalogs the component library across commits and branches. If you plan to contribute to this project, it can help with reviewing the video player component online, see past versions of the component, and get feedback on any work in progress.

The Chromatic library is available at the following URL (mostly valuale only if you plan to contribute to this project):

<https://www.chromatic.com/library?appId=66aa07fde316cf9b3445ce6d>

Currently, When you push code to the main branch, a GitHub action is set up for this repository to automatically kick off a build in Chromatic. The Chromatic GitHub action is located in the **.github/workflows** directory of the repository. The `CHROMATIC_PROJECT_TOKEN` must be configured as a repository secret in the settings of this repository for this action to work.

When this action is run, a build will be kicked off. After the build is complete, you can review the component changes associated with that build and either accept or deny those changes from the Chromatic library.

### <a name="deployment"></a>Deployment

This app is deployed through the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).
Deploys are set up to happen automatically when code is merged into the `main` branch.

## <a name="contributing"></a>Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## <a name="contact"></a>Contact

Phil Stubbs - philipstubbs13@gmail.com

## <a name="issues-and-requests"></a>Issues and Requests

If you find an issue while using the application or have a request, log the issue or request [here](https://github.com/philipstubbs13/wistia-video-player/issues). These will be addressed in a future code update.
