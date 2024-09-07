# Setting Up Cypress And Running The Test


Welcome to the Sauce Demo Automation Test repository! This README provides an overview of the project, its purpose, and instructions on how to set up and run the automated tests using Cypress.

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Tests](#running-the-tests)

## Project Overview

This repository contains automated test cases written in Cypress, an end-to-end testing framework, to verify the functionality of the Sauce Demo application. 

## Getting Started

### Prerequisites

Before you can run the Cypress test cases, make sure you have the following prerequisites installed on your system:

1. **Node.js**: Cypress requires Node.js to be installed. You can download and install Node.js from the official website: [Node.js Downloads](https://nodejs.org/). Ensure you have Node.js version 14 or higher installed.

2. **Browser**: Ensure you have a compatible browser installed (e.g., Chrome, Firefox) as Cypress relies on a browser for testing.

### Installation

To set up this project and install the required dependencies, follow these steps:

1. Clone this repository to your local machine:
   ```bash
   git clone git@github.com:taqirazaj/saucedemo.git
   ```

2. Navigate to the project directory:
   ```bash
    cd saucedemo
   ```
3. Install the project dependencies:
   ```bash
   npm install cypress
   ```

## Running the Tests
1. To run the Cypress test cases, use the following command:
   For macOS, Windows, and Ubuntu:

   ```bash
   npx cypress open
   ```
  This command will open the Cypress Test Runner, where you can select and run individual test files or all tests in the suite.


2. To run tests headlessly (without the Test Runner UI), use the following command:

   ```bash
   npx cypress run
   ```

4. Specify Browser at Runtime:

To run tests in a specific browser, use the --browser option when executing Cypress commands. Here’s how you can do it:

 Run with Chrome
  ```bash
  npx cypress run --browser chrome
  ```

 Run with Firefox
 ```bash
  npx cypress run --browser firefox
  ```











