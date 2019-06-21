# How to Deploy an application on Heroku - githubpages - Nelify

- What is Heroku and why do we need it?
- Hosting static sites with Github Pages or Netlify

### What is required in order to deploy on Heroku and things to consider?

* https://devcenter.heroku.com/articles/getting-started-with-rails5#deploy-your-application-to-heroku
* Heroku account & Heroku CLI
  * Create account on Heroku
  * `$ brew tap heroku/brew && brew install heroku`
  * `$ heroku login` - connect your account to CLI
* Github repo of your application
  * `git push heroku master` - to push to heroku
  * `heroku run ...` - run console commands in Heroku server
* how do we hide environment variables? secret keys, api keys, and private information
  * specifying environment
    * dotenv gem - suggested use for development .env file, .gitignore
    * What about production?
      * config variables
* common issues - wrong version of ruby/rails, upgrade to ruby version 2.5+, Rails version 5+
* how to serve up a static page?
  * GitHub pages!
  * Or rack server to display index.html file

### Heroku CLI Tool
- Install Tool `brew tap heroku/brew && brew install heroku`
- Login to Heroku from CLI `heroku login`

### Using Heroku
- Get the git url and add it as a remote to your project
- Push your code to the heroku repo
- Run any rake tasks (migrate, seed)

#### Configuration
Remember, when deploying an app, consider changes that need to be made for these things:

- Environment variables (API Keys, JWT secrets)
- URLs
- CORS

#### Common Problems

- Ruby version must be 2.5 and greater
	- Use RVM to install other versions of Ruby and change versions
	- Gems are installed for a specific version of Ruby, so if you change versions, you must reinstall gems
	- Installing bundler problems: https://stackoverflow.com/questions/54087856/cant-find-gem-bundler-0-a-with-executable-bundle-gemgemnotfoundexceptio

### Deploying on Github Pages
- Create a new branch off master called `gh-pages` - Github will look for branches with this name to create static pages 
  - Make sure to update your API url to point to Heroku!
- Run `git push -u origin gh-pages` to create a new upstream branch
- Double-check the GitHub Pages section in your project's settings on GitHub: `https://github.com/<Username>/<Reponame>/settings`, it should tell you if the project has been published (check that the Source is set to your `gh-pages` branch)
- Your project will be published to `https://<Username>.github.io/<Reponame>/`.

### Deploying on Netlify
- Netlify is another good option for static sites, it has a nice Continuous Integration/Continuous Deployment pipeline that makes it a good choice for React apps
- It also will work fine for vanilla JS static sites
- You can get up and running from their site but let's stick to CLIs because they're dope

#### Deploy using Netlify CLI:
https://www.netlify.com/docs/cli/

- Install CLI tools: `$ npm install netlify-cli -g`

- Login: `$ netlify login`
  - This will open in browser to authenticate

- Initialize project: `$ netlify init`

- Select these options: 
  - Create & configure a new site
  - login with your Github credentials (if you haven't already connected your Github account)
  - Build command: leave blank for static sites (unless you have webpack or something that builds/bundles)
  - Directory: leave blank (if index.html is in your root)
  - netlify.toml is a build configuration, say yes to create

- Not any time you push to master it will also push to netlify using `$ git push`
- Open the project in browser with `$ netlify open`


#### Bonus for mod 4+ projects when building with React
When deploying a React app built using `create-react-app` you must specify a buildpack to use `process.env` properly.
	- Go to Settings on the dashboard and go down to buildpacks. Click "Add a buildpack" and enter the following URL: https://github.com/mars/create-react-app-buildpack
	- This buildpack will only apply on a redeploy, so to see the changes, you must redeploy your application

#### Other useful bits
- Access to error logging via the heroku dashboard (More -> View logs)
- Access to environment variables on the settings page
- Use `heroku config` from your terminal to see config vars for a particular repo
  - this is very helpful to see if you able to access environment variables
- User `heroku run <TERMINAL COMMAND>` to run terminal commands on the Heroku server
  - ie. `heroku run rails console`


#### Bonus for mod 4+ projects when building with React common problems
- Frontend fetch URLs are all "localhost" but should be switched to your deployed backend's URL
	- Use the adapter pattern so your fetches are all in one place
	- Use the environment (`process.env.NODE_ENV`) to determine which URL to use

Helpful link:
* how to install the heroku CLI  - https://devcenter.heroku.com/articles/git#prerequisites-install-git-and-the-heroku-cli
* how to deploy with heroku cli and git - https://devcenter.heroku.com/articles/git
* how to deploy static site using Rack - https://devcenter.heroku.com/articles/static-sites-ruby
* how to install with github pages - https://pages.github.com/
* faker gem - https://github.com/stympy/faker
* dotenv gem - https://github.com/bkeepers/dotenv
* fast json gem - serializer https://github.com/Netflix/fast_jsonapi
