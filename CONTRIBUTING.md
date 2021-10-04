# Dev Query Resolver

## Coding Guidelines

- Keep the module dependencies as low as possible.
- Keep the module dependencies only on the top of the module.
- Only use the below format for the module dependencies.

  > ![Dependency Format](media/DepFormat.png)

- Use asynchonous functions for the query resulution from database.
- Put meaningful comments in the code, PR and commit messages.

## How To Setup Dev Environment

Step 1: Forking
```
Fork the repo - Top right button.
```
Step 2: Cloning the project. Run the following command
```
git clone https://github.com/<user-name>/DevQueryResolver.git
```
Step 3: Add Remote Upstream
```
git remote add upstream https://github.com/DSC-IIIT-Surat/DevQueryResolver.git
```
Step 4: Change branch 
```
git checkout -b "NewBranchName"
```
Step 5: Make your changes to the repo of the branch.

Step 6: Stage the changes and commit with a Good Descriptive message.
```
git add .
git commit -m "Good Descriptive Message"
```
Step 7: A good practice is to pull in the main branch to check if there are some changes.
```
git checkout main
git pull
git checkout NewBranchName
git pull
```
Step 8: Push the branch to your forked repo
```
git push
```
Step 9: Compare and make pull request.

Thats it! Now you can discuss the changes with the project maintainers.

<br />

## ENV file
- Use the below format for development environment.

```
> MONGO_USER=<your-username>
> MONGO_PASSWORD=<your-password>
> MONGO_HOST=cluster0.<ff>.mongodb.net
> MONGO_DATABASE=userdb
> PORT=8000
```
