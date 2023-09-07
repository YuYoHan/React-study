import {useState} from "react";

function useState3() {
    const [person, setPerson] = useState([
        {
            name : "채원",
        },
    ]);

    const [personName, setPersonName] = useState("");

    const writeName = (e) => {
        setPersonName(e.target.name);
    }

    const onAdd = () => {
        setPerson([...person, {name: personName}])
        setPersonName("");
    }

    const onBan = (name) => {
        const ban = person.filter((user) => user.name !== name);
        setPerson(ban);
    }

    return (
        <>
            <p>현재 파티원 : </p>
            {person.map((user) => (
                <>
                    <div>
                        <span>{user.name}</span> &nbsp;
                        <button onClick={() => onBan(user.name)}>ban</button>
                    </div>
                </>
            ))}
            <div>
                <input value={personName} onChange={writeName}/>
            </div>
            <button onClick={onAdd}>add</button>
        </>
    )
}
export default useState3;