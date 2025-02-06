import {useState} from "react";


export default function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((prevState) => !prevState); // toggle the value of isEditing
    }

    let playerName = <span className='player-name'> {name}</span>
    // let btnText = 'EDIT';

    if (isEditing) {
        playerName = <input type='text' required value={name}/>
        // btnText = 'SAVE';
    }

    return (
        <li>
            <span className='player'>
                {playerName}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'SAVE' : 'EDIT '}</button>
        </li>
    )
}