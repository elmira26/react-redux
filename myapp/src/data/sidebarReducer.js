
let initialState = {
  sidebar:[{name:'Sveta', id:1, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjzC0b532z3APrylh10EMzBtk5lF9FiTOcQA&usqp=CAU'},
                {name:'Sasha', id:2, img:'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'},
                {name:'Lucy', id:3, img:'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'},
                {name:'Alex', id:4, img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' },
                {name:'Arthur', id:5, img:'https://images.unsplash.com/photo-1640951613773-54706e06851d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}]
}
const sidebarReducer = (state = initialState,action)=>{
  return state
}
export default sidebarReducer;