const FOLLOW = 'FOLLOW'
const UNFOLLOW ='UNFOLLOW'
const SET_USERS = 'SET_USERS'
let initialState={
  users:[{id:1, followed: true,name:'Olly',age:23, location:{country:'US', city:'Washington'}, status:'I\'ll go all arond the world for you', img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg_ZbduoivXF84oGeklgcNgttJIH_t3sJ2Yg&usqp=CAU"},
  {id:2, followed: true,name:'Maggie',age:28, location:{country:'Turkey', city:'Istanbul'}, status:'I\'ll go all arond the world for her',  img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjzC0b532z3APrylh10EMzBtk5lF9FiTOcQA&usqp=CAU'},
  {id:3, followed: false,name:'Alan',age:43, location:{country:'Spain', city:'Malaga'}, status:'I\'ll go all arond the world for him', img:'https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'},
  {id:4, followed: true,name:'Larry',age:51, location:{country:'Latvia', city:'Riga'}, status:'I\'ll go all arond the world for us', img:'https://images.unsplash.com/photo-1542065435-d6bc2eac3377?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}]
 
}
const usersReducer = (state = initialState, action)=>{
  
  switch(action.type){
   
   case FOLLOW:
     return{...state,
      // users:[...state.users],
      users:state.users.map(user=>{
        if(user.id === action.userId){
          return {...user,followed: true}
        }
        return user
      })
    }
    case UNFOLLOW:
    return{...state,
      // users:[...state.users],
      users:state.users.map(user=>{
        if(user.id === action.userId){
          return {...user,followed: false}
        }
        return user
      })
    }
    case SET_USERS:{
      return {...state, users:[...state.users,...action.users]}
    }
    default: return state

  } 
     
}
export const followCreator=(userId)=>{
return{type: FOLLOW ,userId}
}
export const unfollowCreator=(userId)=>{
return{type: UNFOLLOW, userId}
}
export const setUsersCreator=(users)=>{
 return{type: SET_USERS, users}
}

export default usersReducer