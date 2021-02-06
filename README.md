# Dockerfile with gulp

This is a Dockerfile with [gulp](https://gulpjs.com). The file will transform, minify and concatenat your js files. 

## Usage

Copy the `docker-compose.yml`-file into your project and  adjust the `docker-compose.yml`-file.
There are two volumes. The `javascript`-directory must contains the your javascript files and `js`-directory will contain the compressed files at the end.

If you want, you can change the names of the compressed files. For this purpose there are the environment variables __FILENAME_CONCAT__ and __FILENAME_MIN__.

```yaml
  gulp:
    container_name: gulp
    image: "fknorre/gulp:latest"
    tty: true
    command: ./runGulp.sh
    environment:
      FILENAME_CONCAT: 'app.js' 
      FILENAME_MIN: 'app.min.js' 
    volumes:
     - ./resources/javascript/:/gulp/javascript # uncompressed
     - ./webroot/js/:/gulp/js # compressed
```

Run the following command, this will spin a container with gulp und run the watch task. 
```bash
docker-compose up -d
```

## Re-/Build

```bash
docker build --tag fknorre/gulp:latest .
docker tag gulp:latest fknorre/gulp:latest
docker push fknorre/gulp:latest
```

## npm packages 

* [gulp](https://www.npmjs.com/package/gulp)
* [gulp-babel](https://www.npmjs.com/package/gulp-babel)
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
* [gulp-concat](https://www.npmjs.com/package/gulp-concat)
* [@babel/core](https://www.npmjs.com/package/@babel/core)
* [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)

