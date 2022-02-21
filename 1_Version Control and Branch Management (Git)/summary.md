# Version Control dan Branch Management (Git)

### Versioning adalah mengatur versi dari source code program

> Problemnya adalah akan ada banyak file revisi setiap melakukan perubahan
> 

![Untitled](Version%20Co%208aed7/Untitled.png)

### Tools

- Version Control System
- Source Code Manager
- Revision Control System

### Version Control System dibagi 3:

- Single user
- Centralized
- Distributed (Git)

### GIT

- Terdistribusi
- Dibuat oleh Linus Torvalds (2005)
- Git dapat melacak semua perubahan file
- Kita dapat menggunakan Github sebagai git hosting service

### Install Git di Windows

- Download Git
- Install Git
- Open Git bash / command prompt

### Setup Git

```jsx
**# git config
//set a name that is identifiable for credit when review version history
$ git config --global user.name “John Done” 
//set an email address that will be associated with each history marker
$ git config --global user.email “johndoe@email.com”

# start with init
$ git init //initialize an existing directory as a Git repository
$ git remote add <remote_name> <remote_repo_url>** //add a git URL as an alias
**$ git push -u <remote_name> <local_branch_name>** //Transmit local branch commits to the remote repository branch

**# start with an existing project, start working on the project
$ git clone ssh://john@example.com/path/to/my-project.git //retrieve an entire repository from a hosted location via URL
$ cd my-project**
```

### Saving Changes

<aside>
💼 Staging: 
working directory → Staging area : git add
Staging area → repository: git commit

</aside>

![Untitled](Version%20Co%208aed7/Untitled%201.png)

> Git add : add a file as it looks now to your next commit (stage)
Git commit -m “message”: commit your staged content as a new commit snapshot
> 

**Git Diff and Stash**

> git diff : diff of what is changed but not stage
git diff --staged : diff of what is staged but not yet commited
git stash: Save modified and staged changes
git stash apply: re-applying your stashed changes
> 

**File .gitignore**

penting untuk menahan file yang tidak perlu diupload ke github

### Inspecting Repository

**Git Log and Checkout**

- git log —oneline: viewing an old revision
- git checkout: switch to another branch and check it out into your working directory
- git reset:
    - —soft: uncommit changes, changes are left staged (index)
    - —hard: uncommit + unstage + delete change, nothing left

![Untitled](Version%20Co%208aed7/Untitled%202.png)

![Untitled](Version%20Co%208aed7/Untitled%203.png)

### Syncing

**Git Push, Fetch, Pull**

- Git push: Transmit local branch commits to the remote repository branch
- Git Fetch: fetch down all the branches from that Git remote
- Git pull: fetch and merge any commits from the tracking remote branch

![Untitled](Version%20Co%208aed7/Untitled%204.png)

### Branches

- Git branch —list: show all branch
- git branch <branch>: create new branch
- git branch -D <branch>: delete branch
- git branch -a: list remote branch
- git merge: Merging 2 branch (make sure u commit before merge)

### Best Practice

![Untitled](Version%20Co%208aed7/Untitled%205.png)

- Master branch jangan diganggu
- Jangan langsung edit di development
- Terapkan perubahan fitur di branch development saja
- Terapkan master dengan develop setelah proses developing clear