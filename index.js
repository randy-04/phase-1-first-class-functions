function yes() {
    console.log("yes");
}

function receivesAFunction(cb) {
    cb();
}

function returnsANamedFunction() {
    return yes;
}

function returnsAnAnonymousFunction() {
    return function () {};
}