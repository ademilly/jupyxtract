# jupyxtract

Extracts source from Jupyter (http://jupyter.org/) notebook files.

```
    $ node --version
    v9.5.0
    $ yarn --version
    1.3.2
    $ tsc --version
    Version 2.7.2
```

## Usage

Extracts for each cell the source property and concats it to stdout.
```
    $ node jupyextract.js [path to file]
    $ node jupyextravt.js [path to file] > some_file.py
```

## Setup

```
    $ git clone github.com:ademilly/jupyextract && cd jupyextract
    $ yarn install
    $ tsc -p tsconfig.json
```
