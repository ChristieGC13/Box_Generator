import React, { useState } from 'react';
import styles from './BoxForm.module.css';

const BoxForm = (props) => {
    const {inputs, setInputs} = props;
    const [allBoxes, setAllBoxes] = useState([]);

    const onChange = e => {
        setInputs({ 
            ...inputs, 
        [e.target.name]:e.target.value
    })
    }

    const submitHandler = e => {
        e.preventDefault();
        setAllBoxes([...allBoxes, inputs])

    }

    return (
        <div>
            <div>
                <form className="form-inline" onSubmit={ submitHandler }>
                    <div className="form-group mx-sm-3 mb-2">
                        <label for="color" className="mr-3">Color </label>
                        <input type="text" className="form-control" name="color" onChange={onChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Add</button>
                </form>
            </div>
            <div className={styles.container}>
                {allBoxes.map(box => {
                    return <div className={styles.box} style= {{backgroundColor: box.color}} ></div>
                })}
            </div>
        </div>
    );
}

export default BoxForm;