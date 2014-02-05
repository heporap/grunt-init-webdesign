# grunt-init-webdesign

ウェブサイト用プロジェクトを[grunt-init][]ベースで作成するテンプレートです。

Create a localsite project with [grunt-init][], including Nodeunit unit tests.

[grunt-init]: http://gruntjs.com/project-scaffolding

## Installation
もしgrunt-initをインストールしていなければ、インストールしてください。

If you haven't already done so, install [grunt-init][].

一度インストールが完了すると、`~/.grunt-init/`ディレクトリにテンプレートを入れておくだけでスケルトンの作成が可能となります。テンプレートの保存は次のgitコマンドでできます。

Once grunt-init is installed, place this template in your `~/.grunt-init/` directory. It's recommended that you use git to clone this template into that directory, as follows:

```
git clone git@github.com:heporap/grunt-init-webdesign.git ~/.grunt-init/webdesign
```

_(Windowsユーザーは[grunt-initのドキュメント][grunt-init]を読んでください。)_

_(Windows users, see [the documentation][grunt-init] for the correct destination directory path)_

## Usage

開発ディレクトリに空のディレクトリを作成し、その中で次のコマンドを入力してください。

At the command-line, cd into an empty directory, run this command and follow the prompts.

```
grunt-init webdesign
```

ファイルの生成が完了すると、`git init`、`git add .`、`git remote add repository_name repository` コマンドを実行します。

repository_name に"none"を指定するとgit remoteは実行しません。

This will run `git init`, `git add .`, `git remote add repository_name repository`. If repository_name was set "none", this will not do "git remote".

_このテンプレートはカレントディレクトリの内容を書き換えます。ディレクトリに何もない事を確認してください。_

_Note that this template will generate files in the current directory, so be sure to change to a new directory first if you don't want to overwrite existing files._

`grunt-init`コマンドを実行した後に`npm install`を実行し、関連するライブラリをインストールしてください。

Run `npm install` after grunt-init to instal relative libraries.

## miscellaneous
構成を変更する場合は、Gruntfile.js、package.jsonを改変してください。

Edit Gruntfile.js, package.json to change the constructions.

## grunt commands

```
#grunt
```

コンパイルを行います。

This will compile the files.

**src/css**ディレクトリの中の.cssファイルがひとまとめになって、**htdocs/css/style.min.css**ファイルに保存されます。
**src/js**ディレクトリの中の.jsファイルがひとまとめになって、**htdocs/css/script.min.js**ファイルに保存されます。
**lib**ディレクトリの.cssファイル、.jsファイルはそれぞれhtdocs/css、htdocs/jsディレクトリにコピーされます。サードパーティー製のライブラリなどを保存してください。


This will copy **src/js/*.js** files to **htdocs/js/script.min.js** with compression, **src/css/*.css* to **htdocs/css/style.min.css**. Also **lib/*.css** and **lib/*.js** will be copied.
