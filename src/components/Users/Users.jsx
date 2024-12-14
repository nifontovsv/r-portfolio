import React from 'react'
import userPhoto from '../../assets/image/userPhoto.avif'
import styles from './Users.module.css'
import { Link } from 'react-router';

function Users(props) {

		let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

		let pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
		}

	return (
			<div>
				<div>
					{pages.map(p => {
						return <span onClick={(e) => {props.onPageChanged(p)}} className={props.currentPage === p && styles.selectedPage}>{p}</span>
					})}
				</div>
				{props.users.map(u => (<div key={u.id}>
						<span>
							<div>
								<Link to={'/profile/' + u.id}>
								<img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} alt='' />
								</Link>
							</div>
							<div>
							{u.followed 
							? <button onClick={ () => {props.unfollow(u.id)} }> Unfollow </button> 
							: <button onClick={ () => {props.follow(u.id)} }> Follow </button> }
							</div>
						</span>
						<span>
							<div>{u.name}</div>
							<div>{u.status}</div>
						</span>
						<span>
							<div>{"u.location.country"}</div>
							<div>{"u.location.city"}</div>
						</span>
					</div>
				))}
			</div>
	)
}

export default Users