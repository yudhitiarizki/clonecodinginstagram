import React from "react";
import { Link, NavLink } from "react-router-dom";
import HOST_URL from "../proxy";
import Cookies from "js-cookie";

class InstaMenu extends React.Component {


    logout = (e) => {
        e.preventDefault();
        fetch(HOST_URL + "/logout", {
            method: "POST",
            headers: { "content-type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                if (data.status == 200) {
                    Cookies.remove("token");
                    localStorage.clear();
                    window.location.href = "/login";
                }
            }).catch(err => {
                console.log(err);
            })


        this.props.close();

    }



    render() {
        let username = localStorage.getItem("username")
        let style = {
            createStyle: {
                borderRadius: "5px",
                backgroundColor: "#fff",
                padding: "3px",
                boxShadow: "0px 0px 5px #ccc",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }
        }
        return <>

            <menu>
                <ul>
                    <li> <NavLink to="/" onClick={this.props.close}><i className="material-icons">home</i></NavLink></li>
                    <li><Link to="/inbox" onClick={this.props.close}><i className="material-icons" id="menu-send">send</i></Link></li>
                    <li><Link to="/create/" onClick={this.props.close} style={style.createStyle}><i className="material-icons" id="menu-create">add</i></Link></li>
                    <li><Link to="/explore" onClick={this.props.close}><i className="material-icons">explore</i></Link></li>
                    <li><Link to="/activity" onClick={this.props.close}><i className="material-icons">favorite_border</i></Link></li>
                    <li><i className="material-icons" onClick={this.props.handleClickProfile}>person</i>
                        {/* Sub Menu */}
                        <div className="sub-menu-profile">
                            <Link to={"/" + username} onClick={this.props.close}><span className="material-icons">person</span>  Profile</Link>
                            <Link to={"/" + username + "/__saved__"} onClick={this.props.close}><span className="material-icons">turned_in_not</span>  Saved</Link>
                            <Link to="/accounts/edit" onClick={this.props.close}><span className="material-icons">settings</span>  Setting</Link>
                            <div className="sub-menu-divider"></div>
                            <Link to="" onClick={this.logout}> Logout</Link>
                        </div>


                    </li>
                </ul>
            </menu>

        </>
    }


}
// export function MobileViewInstaMenu(props) {
//     let username = localStorage.getItem("username")
//     let [isClickedPerson, setIsClickedPerson] = React.useState(false);
//     const clickPerson = () => {
//         setIsClickedPerson(!isClickedPerson);
//     }

//     return <>
//         <div className="mobile-compatible-menubar">
//             <ul>
//                 <li> <NavLink to="/" ><i className="material-icons">home</i></NavLink></li>
//                 <li><Link to="/inbox" ><i className="material-icons" id="mobile-compatible-menu-send">send</i></Link></li>
//                 <li><Link to="/create/" ><i className="material-icons" id="mobile-compatible-menu-create">add</i></Link></li>
//                 <li><Link to="/explore"><i className="material-icons">explore</i></Link></li>
//                 <li><Link to="/activity" ><i className="material-icons">favorite_border</i></Link></li>
//                 <li><i className="material-icons" onClick={clickPerson} >person</i>
//                     {/* Sub Menu */}
//                     <div className={isClickedPerson ? "mobile-compatible-sub-menu-profile-active" : "mobile-compatible-sub-menu-profile-disable"}>
//                         {
//                             isClickedPerson ? <>
//                                 <Link to={"/" + username} id="m-c-sub-menu-person" ><span className="material-icons">person</span>  Profile</Link>
//                                 <Link to={"/" + username + "/__saved__"} id="m-c-sub-menu-saved" ><span className="material-icons">turned_in_not</span>  Saved</Link>
//                                 <Link to="/accounts/edit"><span className="material-icons" id="m-c-sub-menu-setting">settings</span>  Setting</Link>
//                                 <div className="nobile-compatible-sub-menu-divider" id="m-c-sub-menu-logout"></div>
//                                 <Link to="" id="m-c-sub-menu-logout" > Logout</Link>
//                             </> : null
//                         }
//                     </div>


//                 </li>
//             </ul>
//         </div>
//     </>



// }


export default InstaMenu;
