"use strict";

var gulp = require('gulp');
var scp2 = require('gulp-scp2');
var sequence = require('run-sequence');

gulp.task('dev', function(){
    return gulp.src('dist/**')
        .pipe(scp2({
            host: '106.14.184.214',
            username: 'root',
            password: 'Nbjl@2017',
            dest: '/usr/local/tomcat/tomcat/apache-tomcat-7.0.68/webapps/app/dist'
        }))
        .on('error', function(err) {
            throw err;
        });
});

/*gulp.task('pro', function(){//发布到正式
 return gulp.src('build/!**')
 .pipe(scp2({
 host: '60.191.133.198',
 username: 'root',
 password: 'Admin2014',
 dest: '/home/html/mobile_webroot/buyCar/oldcarList'
 }))
 .on('error', function(err) {
 throw err;
 });
 });*/

gulp.task('default', function(done){
    sequence(
        'dev',
        done
    )
});
