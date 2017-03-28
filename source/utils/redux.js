import {connect} from "react-redux";

export function Connect(actions, dispatch) {
    return function (target) {
        return connect(actions, dispatch)(target);
    }
}