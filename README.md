# Personal Website Development Repo

This site is built using [GatsbyJS](https://www.gatsbyjs.org/). :rocket:

The site is available at https://abinavseelan.com.

## Development

1. Clone repository and run `npm install` to install all the dependencies.
2. All development happens within the `src` folder. The entire project is a React application.

## Deployment

1. Run `$ ./publish.sh <commit message>` to build the project and move the built contents to a deployment folder.
2. The contents of this folder need to be pushed to http://github.com/abinavseelan/abinavseelan.github.io since `abinavseelan.com` needs to be mapped to `abinavseelan.github.io`.
3. Run `$ ./deploy.sh` to deploy!