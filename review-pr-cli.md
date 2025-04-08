# GitHub CLI Guide: Viewing Pull Requests and Generating Permalinks

This guide will help you view pull requests (PRs) and generate permalinks using the GitHub CLI.

## Prerequisites

- GitHub CLI installed on your machine
- Access to the repository
- Appropriate permissions to review PRs

## Steps

### 1. Authenticate GitHub CLI

First, authenticate the GitHub CLI with your GitHub account:

```sh
gh auth login
```

Follow the prompts to complete the authentication process.

### 2. View Pull Requests

List all open pull requests in the repository:

```sh
gh pr list
```

View details of a specific pull request:

```sh
gh pr view <PR_NUMBER>
```

### 3. Checkout the Pull Request Branch

Checkout the branch of the pull request you want to review:

```sh
gh pr checkout <PR_NUMBER>
```

### 4. Generate Permalinks

To generate a permalink to a specific line or file in the pull request, use the following command:

```sh
gh pr view <PR_NUMBER> --web
```

This command will open the pull request in your default web browser, where you can navigate to the specific line or file and copy the permalink.

## Conclusion

Using the GitHub CLI to view pull requests and generate permalinks can streamline your workflow. Follow these steps to efficiently review and share pull request details.
