import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../Redux/profileReducer';

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/3`)
        .then(response => {
            this.props.setUserProfile(response.data);
        })
        .catch(error => {
            console.error('Error occurred:', error);
        });
    }

		componentDidUpdate(prevProps) {
    if (prevProps.profile !== this.props.profile) {
        console.log('Profile updated:', this.props.profile);
    }
}

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);