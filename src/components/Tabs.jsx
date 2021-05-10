import React, { useState } from "react";

const Tabs = (props) => {
    console.log(props);

    const [selectedTab, setSelectedTab] = useState(props.items[1]);

    return (
    <div>
        <ul className="nav nav-tabs mt-5">
            { props.items.map((item, i) => {

                return (
                <>
                    <li onClick={(e) => {
                        setSelectedTab(item);
                    }} key={i} className=" mr-2 nav-item">
                    <a className="nav-link" aria-current="page" href="#">{item.header}</a>
                </li>
            </>
            )})
            }
        </ul>
        <div>
            <p> { selectedTab.content } </p>
        </div>
    </div>
    );
};

export default Tabs;
