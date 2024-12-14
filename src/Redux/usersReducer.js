const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false
};

/*
Работа с кнопкой "Подписаться": 
1. При нажатии на кнопку "Подписаться" она должна измениться на  "Отписаться".

2. Но UI(интерфейс) не может измениться, пока не измениться BLL(бизнес логика).

3. Поэтому нам необходимо сперва произвести dispatch, для того чтобы отобразить в нашей логике намерения пользователя с помощью action(объект, который имеет как минимум type и другие данные, чтобы понять как конкретно нам нужно изменить наш state(база данных)).

4. Далее наш action получают все reducers(чистая функция, которая получает в себя action и свою часть state, и на выходе возвращают либо не изменённый state, либо если action предназначался ему, то изменённый). 

5. Наконец, store отправляет изменённый state обратно в UI и перерисовывает интерфейс.
*/

/*
Перед тем, как сделать какие-либо изменения в state, необходимо сперва скопировать тот элемент, который хотим изменить.

Ниже мы хотим изменить 
*/
const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true };
					}
					return u;
				}),
			};

		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false };
					}
					return u;
				}),
			};

		case SET_USERS: {
			return { ...state, users: [...action.users] };
		}

		case SET_CURRENT_PAGE: {
			return { ...state, currentPage: action.currentPage}; 
		}

		case SET_TOTAL_USERS_COUNT: {
			return { ...state, totalUsersCount: action.count}; 
		}

		case TOGGLE_IS_FETCHING: {
			return { ...state, isFetching: action.isFetching}; 
		}
		default:
			return state;
	}
};

//Создание action
export let follow = userId => ({ type: FOLLOW, userId });
export let unfollow = userId => ({ type: UNFOLLOW, userId });
export let setUsers = users => ({ type: SET_USERS, users });
export let setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage });
export let setTotalUsersCount = totalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export let toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default usersReducer;
