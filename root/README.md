#grunt commands

`
#grunt
`
コンパイルを行います。

This will compile the files.

src/cssディレクトリの中の.cssファイルがひとまとめになって、htdocs/css/style.min.cssファイルに保存されます。 src/jsディレクトリの中の.jsファイルがひとまとめになって、htdocs/css/script.min.jsファイルに保存されます。 libディレクトリの.cssファイル、.jsファイルはそれぞれhtdocs/css、htdocs/jsディレクトリにコピーされます。サードパーティー製のライブラリなどを保存してください。

This will copy src/js/*.js files to htdocs/js/script.min.js with compression, src/css/.css to **htdocs/css/style.min.css. Also lib/*.css and lib/*.js will be copied.

## miscellaneous

構成を変更する場合は、Gruntfile.js、package.jsonを改変してください。

Edit Gruntfile.js, package.json to change the constructions.
