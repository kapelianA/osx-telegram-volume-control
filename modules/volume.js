var Volume = require('osx-volume-controls')

exports.volumeInit = (v) => {
    let number = Math.abs(parseInt(v));

    if (isNaN(number) == true) {
        return "Try again";
    }

    if (v.includes("+")) { // add volume
        Volume.volumeState(function (err, rtn) {
            Volume.set(rtn + number);
        });
    }
    else if (v.includes("-")) { // increase volume
        Volume.volumeState(function (err, rtn) {
            Volume.set(rtn - number);
        });
    }
    else { // set volume
        Volume.set(number);
    }

    return 'Ready!';
}