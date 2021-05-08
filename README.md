
# <center> Front-React </center> #


<!-- vscode-markdown-toc -->
* 1. [**About This Repo**](#AboutThisRepo)
* 2. [**Update Your branch**](#UpdateYourBranch)
* 3. [**Make A Pull-Request**](#MakeAPull-Request)
* 4. [**Standards**](#Standards)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->


##  1. <a name='AboutThisRepo'></a>**About This Repo**                                                                                                                                             
&emsp;&emsp;All front-end files are here.

&emsp;&emsp;Please NOTE that you should make changes in **your own branch**.You can pull your branch with commands:

```shell
git clone .......
git checkout XXX-feature
git pull
```

&emsp;&emsp;You can see all branches with:
```shell
git branch -a
```

##  2. <a name='UpdateYourBranch'></a>**Update Your Branch**


```shell
git checkout develop
git pull
git checkout XXX-feature
git merge develop
```

##  3. <a name='MakeAPull-Request'></a>**Make A Pull-Request**
&emsp;&emsp;For example:
```shell
# Update your branch first and resolve conflicts
git add .
git commit -m 'feat: all functions done'
git push
```

&emsp;&emsp;Please wait for another member to merge your pull request !


##  4. <a name='Standards'></a>**Standards**
&emsp;&emsp;Thes src directory has several directories:

        CSS:        includes CSS files.
        Pic:        includes pictures.
        Source:     Main codes here.This folder includes 5 folders.

                    Components  :   The minimum parts of a page,like a search bar、a user cell.
                    Containers  :   Containers of Components,like a collection of user cells.
                    View        :   Pages thar can interact with users,like a homepage.
                    Model       :   Core functions here.Don't put thoes functions that would be used in several places in a sigle class.
                    Services    :   Functions that interact with backend.


&emsp;&emsp;Please code in right folder for the convenience of maintenance.

&emsp;&emsp;You should comment where you create a function like:
```javascrip
/*
    作者: 张三
    描述：包括代码段功能以及需要完善的地方
    （修改人：修改者需要加上这条注释）
    （修改内容：修改者需要加上这条注释）
    最后修改时间：2022年1月1日

 */
```
&emsp;&emsp;Please add simple notes wherever you can!


