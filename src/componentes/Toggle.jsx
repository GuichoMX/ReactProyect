function Toggle(props) {
    const handleClick = (evt) => {
        evt.preventDefault();

        let next;
        // if (props.toggle === "light") {
        //     next = "medium";
        // } else if (props.toggle === "medium") {
        //     next = "dark";
        // } else if (props.toggle === "dark") {
        //     next = "light";
        // }
        switch (props.toggle) {
            case "light":
                next = "medium";
                break;
            case "medium":
                next = "dark";
                break;
            case "dark":
                next = "light";
                break;
            default:
        }

        props.setToggle(next);
    };

    return (
        <button onClick={handleClick}>{props.toggle}</button>
    )
}

export default Toggle;