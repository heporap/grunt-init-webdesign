#grunt commands

```
#grunt
```

コンパイルを行います。

This will compile the files.

**src/css**ディレクトリの中の.cssファイルがひとまとめになって、**htdocs/css/style.min.css**ファイルに保存されます。
**src/js**ディレクトリの中の.jsファイルがひとまとめになって、**htdocs/css/script.min.js**ファイルに保存されます。
**lib**ディレクトリの.cssファイル、.jsファイルはそれぞれhtdocs/css、htdocs/jsディレクトリにコピーされます。サードパーティー製のライブラリなどを保存してください。


This will copy **src/js/*.js** files to **htdocs/js/script.min.js** with compression, **src/css/*.css* to **htdocs/css/style.min.css**. Also **lib/*.css** and **lib/*.js** will be copied.

## miscellaneous

構成を変更する場合は、Gruntfile.js、package.jsonを改変してください。

Edit Gruntfile.js, package.json to change the constructions.
