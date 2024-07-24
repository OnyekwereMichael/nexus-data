**Contribution Guide**

Welcome to the project! We appreciate your interest in contributing. Please take a moment to review this guide to ensure a smooth contribution process.

**Getting Started**

Before contributing, ensure you have the following installed:

**Set up your development environment**

**1. Node.js and npm installation:**

**For Mac:**

-Open the terminal

-Install Homebrew (if not already installed)

    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

-Install Node.js and npm

    brew install node

**For Windows:**

-Download the Node.js installer from the official website.

-Run the installer and follow the prompts to install Node.js and npm.


**2. Clone the GitHub Repository:**

Use git clone to clone the project repository to your local machine.

    git clone {repository URL}


**3. Navigate to the Project Directory**

Using your code editor (probably VS Code); open the folder where you cloned the repository.

Then open your code editor's (VS Code) terminal and install dependencies by running;

    npm install


**Development**

**Running the Project**

To run the project locally, use:

    npm run dev

The application will typically be accessible at http://localhost:3000.

**Making Changes**

Create a new branch for your feature or bug fix:

    `git checkout -b feature/new-feature`

Make your changes and test locally:

Ensure all tests pass:

    `npm test`

Commit your changes with a descriptive message(use conventional commit):

    `git add .`

    `git commit -m "Add new feature: description of changes"`

Push your branch to GitHub:

    `git push origin feature/new-feature`

**Submitting a Pull Request**

Navigate to your fork on GitHub.

Click on New Pull Request.

Select the main branch of the original repository as the base branch.

Ensure the feature/new-feature branch of your fork is selected as the compare branch.

Provide a descriptive title and detailed description for your pull request.

Click Create Pull Request.

**Code Review**

The maintainers will review your code.

Address any feedback or requested changes.

Once approved, your pull request will be merged.

**Code Style**

Follow existing code style conventions.

Use TypeScript for all code contributions.

Ensure code is well-documented with appropriate comments.

**Testing**

Write unit tests for new features and ensure all tests pass before submitting a pull request.

Use Jest or preferred testing framework for writing and running tests.

**Documentation**

Update documentation alongside code changes.

Document new features or changes in the README.md or relevant documentation files.
