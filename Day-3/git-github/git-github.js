// Git -> Free and Open source (version control system -> tools that help to tracks changes in code)

// Github -> is a website where we host repositories online

// init - used to create a new git repo    // git init

// to add intial project to git below code is used
// git remote add origin <-link->
// git remote -v (to verify remote)
// git branch (to check branch)
// git branch -M main (to rename branch)
// git push origin main

// Branch Commands
// git branch (to check branch)
// git branch -M main (to rename branch)
// git checkout <- branch name ->  (to navigate)
// git checkout -b <- new branch name ->   (to create new branch)
// git branch -d <- branch name -> (to delete branch)

// created new branch feature which is temp branch
// wrote some code to add new feature to app

// basic command
// git pull origin main -> used to fetch and download content from a remote repo and immediately update the local repo to match that content

// merge conflicts -> an event that takes place when git is unable to automatically resolve differences in code between two commits

// git log -> describes how many and what commits is done

// Fixing mistakes
// case-1 : staged changes -> if we add file through (git add .) to unstage it below cmd is used
//          git reset <- filename ->
//          git reset

// case-2 : commited changes (for one commit)
//          git reset HEAD~1

// case-3 : commited changes (for many commit)
//          git reset <- commit hash ->
//          git reset --hard <- commit hash ->  // by hard after that perticular commit hash whatever is commited can't be seen 

// Forking -> a fork is a new repo that shares code and visibility settings with the original upstream repo.
// fork is a rough copy.