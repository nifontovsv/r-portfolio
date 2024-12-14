import React from 'react';
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../Redux/usersReducer';
import axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';



class UsersContainer extends React.Component {
	componentDidMount() {
			this.props.toggleIsFetching(true);
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
				this.props.toggleIsFetching(false);
			this.props.setUsers(response.data.items)
			this.props.setTotalUsersCount(response.data.totalCount)
		})
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(response.data.items)
		})
	}

	render() {
	
			return 	<>
			{this.props.isFetching ? <Preloader /> : null}
								<Users 
								onPageChanged={this.onPageChanged}
								currentPage={this.props.currentPage}
								users={this.props.users}
								follow={this.props.follow}
								unfollow={this.props.unfollow}
								totalUsersCount={this.props.totalUsersCount}
								pageSize={this.props.pageSize}
								/>
							</>
	}
}

/*
Процесс обмена данными:
Создаём контейнерную компоненту c помощью функции connect , для того, чтобы не загрязнять лишними данными нашу презентационную компоненту, а также чтобы напрямую передавать/принимать данные store и снабжать нашу чистую компоненту всем необходимым для её полной работоспособности. 
*/

//Функция mapStateToProps принимает весь state нашего приложения и возвращает только тот state, который нам нужен для этой компоненты.
const mapStateToProps = state => {
	return {
		//users из state
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	};
};
//Функция, которая предаёт через props callback-функции презентационной компоненте, которые она может вызывать.
// const mapDispatchToProps = dispatch => {
// 	return {
// 		//Функция, которая выполняет dispatch и передаёт action, который является результатом функции followAC
// 		follow: userId => {
// 			dispatch(followAC(userId));
// 		},
// 		unfollow: userId => {
// 			dispatch(unfollowAC(userId));
// 		},
// 		setUsers: users => {
// 			dispatch(setUsersAC (users));
// 		},
// 		setCurrentPage: pageNumber => {
// 			dispatch(setCurrentPageAC (pageNumber));
// 		},
// 		setTotalUsersCount: totalCount => {
// 			dispatch(setTotalUsersCountAC (totalCount));
// 		},
// 		toggleIsFetching: isFetching => {
// 			dispatch(toggleIsFetchingAC (isFetching));
// 		},
// 	};
// };
//Схема передачи: пользователь производит какое-либо действие, компонента передаёт намерения пользователя контейнерной компоненте их через callback-функции, затем контейнерная компонента производит dispatch передавая action.

export default connect(mapStateToProps, 
	{follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching}
	)(UsersContainer);
