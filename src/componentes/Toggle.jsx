function Toggle(props) {
    const handleClick = (evt) => {
        evt.preventDefault();

        props.setToggle(!props.toggle);
    };

    return (
        <button onClick={handleClick}>{props.toggle ? "Dark" : "Light"}</button>
    )
}

export default Toggle;