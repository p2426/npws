const clamp = function(min, max, v) {
    return v <= min ? min : v >= max ? max : v;
}

export default clamp;