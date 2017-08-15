let backgroundHeight = (refs, addOn) => {
    var height = window.innerHeight;   
    return refs.setAttribute("style","height:" + (height+addOn) + "px");
}

export default backgroundHeight;