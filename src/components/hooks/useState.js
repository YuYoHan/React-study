import {useState} from "react";

const UseState = () => {
    // useState는 변수를 react의 state로 관리하는 hook함수
    // state로 관리하고 있는 함수는 일반적인 방법으로 재대입(초기화)가 불가능하다.
    // 오로지 set함수를 통해서만 state값을 변경 가능
    const [count, setCount] = useState(0);
    const [idol, setIdol] = useState("izone");

    const onAddNumber = () => {
        setCount(count + 1);
    };

    const onRemoveNumber = () => {
        setCount(count -1);
    }

    const onChangeName = () => {
        setIdol("르세라핌");
    };

    return (
        <>
            <div>
                <button onClick={onChangeName}>+</button>
                <button onClick={onRemoveNumber}>-</button>
                {count}
            </div>
            <div>
                {idol}
                <br/>
                <button onClick={onChangeName}>change to Idol</button>
            </div>
        </>
    );
};
export default UseState;