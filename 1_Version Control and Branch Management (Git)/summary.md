# Version Control dan Branch Management (Git)

### Versioning adalah mengatur versi dari source code program

Problemnya adalah akan ada banyak file revisi setiap melakukan perubahan


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

### Saving Changes

<aside>
💼 Staging: 
working directory → Staging area : git add
Staging area → repository: git commit

</aside>


> Git add : add a file as it looks now to your next commit (stage)
Git commit -m “message”: commit your staged content as a new commit snapshot
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

- Master branch jangan diganggu
- Jangan langsung edit di development
- Terapkan perubahan fitur di branch development saja
- Terapkan master dengan develop setelah proses developing clear

# Praktikum Git
Jadi tugasnya itu saya diminta membuat fitur pertama pada branch-ketiga dan fitur kedua di forth-branch yang mana branch tersebut berdiri di atas development branch.
    
![image](https://user-images.githubusercontent.com/67999361/155072883-3687f491-be4b-4a51-becd-bef8ead1fec5.png)

Pertama-tama saya membuat repository yang memiliki branch utama bernama master dan file bernama README.md serta index.js . Setelah itu saya membuat cabang baru bernama development sebagai cabang untuk mengupdate atau memperbaiki fitur. Pada cabang development, saya membuat cabang baru bernama branch-ketiga sebagai tempat untuk menambahkan teks pada README.md. Branch-ketiga digabung dengan development branch agar perubahan tersebut nantinya dapat diupdate ke branch master. Selanjutnya adalah saya membuat branch baru di development branch yang bernama forth-branch untuk menambahkan teks pada README.md, lalu digabungkan dengan development branch. Dengan ini akhirnya saya memiliki 2 branch utama yaitu branch master yang berisi file awal yang akan dieksekusi pada produksi dan branch development yang berisi konten dari master, branch-ketiga, dan forth-branch.
