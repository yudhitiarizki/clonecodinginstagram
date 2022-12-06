import React from "react";
import './suggestions.css';
const Suggestions = () => {
    return (
        <div>
            <div className="side-menu__user-profile">
            <a
              className="side-menu__user-avatar">
              <img src="assets/default-user.png" alt="User Picture" />
            </a>
            <div className="side-menu__user-info">
              <a>leocosta1</a>
              <span>Leonardo Costa</span>
            </div>
            <button className="side-menu__user-button">Switch</button>
          </div>

        </div>
    )
}

export default Suggestions;