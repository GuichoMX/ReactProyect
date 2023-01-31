function Toggle(props) {
    const handleClick = (evt, tipo) => {
        evt.preventDefault();
        props.setToggle({ tipo });
    };

    return (
        <>
            <button onClick={(e) => handleClick(e, "previo")}>previo</button>
            <button onClick={(e) => handleClick(e, "siguiente")}>siguiente</button>
        </>

    )
}

export default Toggle;