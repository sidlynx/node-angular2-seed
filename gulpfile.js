var gulp = require("gulp");

gulp.task("build",["buildFront","buildBack"], function (callback) {
    "use strict";

});

gulp.task("buildBack", function (callback) {
    "use strict";
    var spawn = require('child_process').spawn;
    var ls;
    if (/^win/.test(process.platform)) {
        ls = spawn('cmd.exe', ['/c', 'tsc -p src/back/src/tsconfig.json']);
    }
    else {
        ls = spawn('sh', ['-c', 'tsc -p src/back/src/tsconfig.json']);
    }


    ls.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
    });

    ls.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
    });

    ls.on('exit', function (code) {
        console.log('child process exited with code ' + code);
    });
});

gulp.task("buildFront", function (callback) {
    "use strict";

    var spawn = require('child_process').spawn;
    var ls;
    if (/^win/.test(process.platform)) {
        ls = spawn('cmd.exe', ['/c', 'cd src/front/ && ng build']);
    }
    else {
        ls = spawn('sh', ['-c', 'cd src/front && ng build']);
    }


    ls.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
    });

    ls.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
    });

    ls.on('exit', function (code) {
        console.log('child process exited with code ' + code);
    });

    //gulp.src(['src/front/dist/*']).pipe(gulp.dest('dist/public'));
});
