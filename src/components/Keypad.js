function Keypad (){
    return (
        <input type="password"
            onClick={(e) => {
                console.log('Entering password...');
            }}
        />
    )
}

export default Keypad;
