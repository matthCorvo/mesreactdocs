import { useState } from "react";

function SelectForm() {
    const [choix, setChoix] = useState("france");
    return (
        <form>
            <select
                value={choix}
                onChange={(evt) => setChoix(evt.target.value)}>
                <option value='france'>france</option>
                <option value='polland'>polland</option>
                <option value='espagne'>espagne</option>
                <option value='england'>Angleterre</option>
            </select>
        </form>
    );
}

export default SelectForm;