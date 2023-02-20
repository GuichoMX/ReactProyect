import PropTypes from "prop-types";
import { UserType } from "../prop-types";

import UsersList from "./UsersList";

function BodyUser(props) {
    return (
        <main>
            <UsersList {...props} />
        </main>
    )
};

BodyUser.propTypes = {
    addUsers: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(UserType).isRequired,
};

export default BodyUser;