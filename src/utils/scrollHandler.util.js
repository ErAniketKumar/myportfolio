function disableScroll() {
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
}

function enableScroll() {
    document.body.style.height = "auto";
    document.body.style.overflow = "auto";
}

export {
    disableScroll, enableScroll
}