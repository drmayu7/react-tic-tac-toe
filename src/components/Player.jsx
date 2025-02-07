import {useState} from "react";


export default function Player({initialName, symbol, isActive}) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((prevState) => !prevState); // toggle the value of isEditing, using !isEditing is not recommended
    }

    function handleSaveClick(event) {
        setPlayerName(event.target.value)
    }

    let editablePlayerName = <span className='player-name'> {playerName}</span>

    if (isEditing) {
        editablePlayerName = <input type='text' required value={playerName} onChange={handleSaveClick}/>
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className='player'>
                {editablePlayerName}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'SAVE' : 'EDIT '}</button>
        </li>
    )
}