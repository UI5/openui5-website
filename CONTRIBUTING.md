## Contributing

If you have an improvement proposal you want to share with us, follow the description below. You only need to follow the installation instructions if you want to preview the page locally before submitting your pull request.

### TL;DR
It's just the standard steps: fork and clone the repo, run `npm i` and `npm start`, make your changes and preview them on http://localhost:3000, push to your fork and create a pull request to the `main` branch of this repo. The website itself is located in the `docs` folder.

### Detailed Instructions

#### Requirements

You need to have the following tools installed:

- [Git](https://git-scm.com) CLI
- [Node.js](https://nodejs.org) in a recent version like 20.x/22.x/24.x

#### Installation
- Fork this repository.
- [Clone the forked repository](https://help.github.com/articles/cloning-a-repository/) to your local machine.
- Install project dependencies. In the project folder:
  - Run `npm install`
- Start the web server:
  - Run `npm start`
  - (Your default browser should automatically open, showing the website at `http://localhost:3000`. For any changes done inside the website files, the browser will update automatically.)

#### Make Your Changes
- Make sure the `main` branch of your fork is up to date by [syncing your fork](https://help.github.com/articles/syncing-a-fork/). 
- Create a new feature branch from the latest `main`:
	- Run `git checkout -b the-feature-name`.
- Make your changes, and save your files. The website files are inside the `docs` folder.
- Commit and push your changes to the forked repository:
	- To commit, run `git add -A && git commit -m "Meaningful commit message"`
	- To push, run `git push`

#### Create a Pull Request
[Create a pull request](https://help.github.com/articles/creating-a-pull-request) from the feature branch of the forked repository to the main branch of the original repository.

We will review your changes and get back to you.

### Contributing with AI-generated code
As artificial intelligence evolves, AI-generated code is becoming valuable for many software projects, including open-source initiatives. While we recognize the potential benefits of incorporating AI-generated content into our open-source projects there are certain requirements that need to be reflected and adhered to when making contributions.

Please see our [guideline for AI-generated code contributions to SAP Open Source Software Projects](https://github.com/SAP/.github/blob/main/CONTRIBUTING_USING_GENAI.md) for these requirements.