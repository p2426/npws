const translateWithMouse = function(e, element, xScalar = 1, yScalar = 1, xMinus = 0, yMinus = 0) {
    // Normalise coords to center of window; flip both x and y
    const x = (e.clientX / window.innerWidth) - .5;
    const y = (e.clientY / window.innerHeight) - .5;

    element.style.setProperty('transform', `translate(${Math.round(x * xScalar) - xMinus}px, ${Math.round(y * yScalar) - yMinus}px)`, 'important');
}

export default translateWithMouse;