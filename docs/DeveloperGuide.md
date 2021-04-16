# Developer Guide

## Knowledge and Learning

You will need to be familiar with a few libraries and languages to manage the core application. Suggest to get into Google and find some tutorials, then execute a few simple use cases to come up to speed with these.

* Familiarity with CSS/HTML/Javascript is a must.
* Typescript - to be honest I usually skip typescript and just use straight JS. But it's there if you prefer it.
* Specific libraries - React, NextJS & Tailwind CSS Framework
* NodeJS for API and server side integration.
* Knowledge of REST API and general API Hosting
* Optionally, AWS hosting, administration and features, although we'll probalby use a separate team for this.


## Setup Guide

### Prerequisites
* You will neeed npm and NodeJS configured. In Mac OSX the easiest way is to install with brew. Just google it for your OS https://www.newline.co/@Adele/how-to-install-nodejs-and-npm-on-macos--22782681

### Access Requirements
* Access to the Big Commerce Demo Store - Contact Richard.Gilling@tryzens.com for an account.
* Bitbucket Repo - Contact Richard.Gilling@tryzens.com for an account.
* Other 3rd party services - we will need credentials but these are not configured yet.

## Environments

### Big Commerce
This is the URL to the Big Commerce Store. Once you have access you will be able to manipulate the products and content.
https://store-fbwf2ddo6m.mybigcommerce.com/manage

You will need a preview code to be able to checkout an order from NextJS. It's in the .local.env file but it's: `fz6brpsc31`

It requires an API Client - the credentials for the API are setup in Big Commerce panel, but it's also in the local .env file.
If there's any issues with the API key, let Richard know and we can reset it to a new one.

### AWS
To be continued. Not up to this point yet, but we shall probably just use EC2 for the Node environments and may refactor some API elements into AWS API Gateway.

### Storage
To get started I was planning to just use PostGRES but in the future we can swap it to a managed DB on AWS. I'll setup sequelize to manage migrations and ORM, shortly.

### Static Assets
Similarly at the moment we are just committing into the repo under public for static files. These can be moved to Contentful later or served off an S3 bucket. For now just use local.

### IDE
I think it's fairly standard by now to use VS Code for Javascript development. But please feel free to use whichever IDE works for you. Got any productivity tips or extensions? Perhaps add them here:

These are vscode extensions that I use regularly:

* Prettier
* ESLint
* Markdown Preview
* REST Client
* Tailwind CSS Intellisense
* Apollo GraphQL

### Local Dev
https://bitbucket.org/tryzenssalesforce/poc_headless/src/master/

Checkout, at the moment I'm just committing straight to development. If more people come on board we might start committing through code review & pull request. For now just use development branch and we can revert anything that's not working.

So clone the repo to your local. If you need bitbucket access, please work with your practice lead to get that setup.

1. git checkout -b develop
2. npm install
3. npm run dev


At this point the store should be running locally and on http://localhost:3000

There shouldn't be too much more to set up at this point. So far I've been debugging in Chrome, but at some point we'll need the debugger setup for NodeJS.

Just run through an order and make you can complete checkout with test card:  4111 1111 1111 1111 (999 03/25)

### Tests and Coverage

One issue with Next Commerce is there are no tests. We're going to have to invest some time  to implement a test harness. 

### Code Quality

Similarly there's no linting in Next Commerce. There's a couple of utilities for GraphQL generation and some bundle size analysis tools, but that's about it. We'll need to factor some prettier or lint configurations into the changes.




