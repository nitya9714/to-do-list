import React, { useState } from 'react'

function Todolist(props) {
    // const [checked, setChecked] = useState(false);
    // function completed(e) {
    //   if (e.target.checked) {
    //     setChecked(true);
    //   } else {
    //     setChecked(false);
    //   }
    // }
    return (
        <li className='list-item'>
            {/* <input type="checkbox" onClick={completed} /> */}
            <div className="text">
                {props.item}
            </div>
            {/* <input
        className="text"
        value={props.item}
      // disabled={(this.state.disabled) ? "disabled" : ""} 
      /> */}
            <span className='icons'>
                {/* <i className="far fa-edit icon-delete"
          onClick={this.handleGameClik.bind(this)}></i> */}
                <i className="fa-solid fa-trash-can icon-delete"
                    onClick={e => {
                        props.deleteItem(props.index)
                    }}></i>
            </span>
        </li>
    )
}

export default Todolist