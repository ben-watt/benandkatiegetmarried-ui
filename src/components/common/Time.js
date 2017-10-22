import React from 'react';

const Time = (props) => {

    this.formattedDate = () => {
        var d = new Date(props.children);
        console.log(props.children)
        console.log(d);
        return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
    }

    return (<span>{this.formattedDate()}</span>)
}

export default Time;