# Streaker

Don't-Break-the-Chain style web-app for managing multiple tasks

## Getting Started

### macOS Setup

#### Core Components

It's suggested you use a package manager like brew on macOS. More information in the link below.

''' https://brew.sh '''

This project uses node.js which can be installed using brew with the following terminal command (with brew of course)

''' brew install node '''

Navigate to the root folder structure of the project. All of the required node packages should be in a file called package.json

You can install all the packages by running the following command in the root project directory

''' npm install'''

The command above looks for the package.json file and proceeds to install alll required packages.

#### The Database

This project uses PostgresSQL database

To install postgresql on macOS run the following terminal command.

''' brew install postgresql '''

Once PostgreSQL is installed the proper database has to be created. This can be done by running the command below.

''' createdb DBTC '''

The current codebase will be looking for this specific database.

### Linux (Debian/Ubuntu)

#### Core Components

This projects uses node.js which can be installed using the default package manager.

For maintained instructions please check the link below but instructions will still be added to the README (noted in case there are issues with the README instructions)

''' https://nodejs.org/en/download/package-manager/ '''

First thing is to add the NodeSource APT repository for Debian-based distributions and the PGP key for verifying packages.

''' curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash - '''

Then we use the following command to install node.js

''' sudo apt-get install -y nodejs '''

Navigate to the root folder structure of the project. All of the required node packages should be in a file called package.json

You can install all the packages by running the following command in the root project directory

''' npm install '''

The command above looks for the package.json file and proceeds to install alll required packages.

#### The Database

This project uses PostgresSQL database

To install postgresql on Debian/Ubuntu run the following terminal commands.

''' sudo apt-get update '''

''' sudo apt-get install postgresql postgresql-contrib '''

Once PostgreSQL is installed the proper database has to be created. This can be done by running the command below.

''' sudo -u postgres createdb DBTC '''

The current codebase will be looking for this specific database. -u postgres is so that postgresql will use the built in user "postgres" to create the database.

##### database - notes for devops

Change pg authentication to md5 maybe

''' sudo -u postgres psql ''' to open psql ''' SHOW hba_file; ''' to see the location of the pg_hba.conf 

change the following line

''' local  all       postgres                peer '''

to

''' local  all       postgres                md5 '''

## Before Starting

''' npm run start-dev '''

''' npm run seed '''
