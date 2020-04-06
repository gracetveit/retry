'use strict'

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure("Klunk");
    }
}

function reliableMultiply(a, b) {
    for (;;) {
        try {
            console.log(primitiveMultiply(a, b))
            break
        }
        catch (e) {
            if (e instanceof MultiplicatorUnitFailure) {
                console.log("Trying again, " + e)
            } else {throw e}
        }
    }
}

console.log(reliableMultiply(8, 8));
// > 64