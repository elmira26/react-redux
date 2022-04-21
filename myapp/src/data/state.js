import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


let store = {
    _rerenderEntireTree(){
        console.log('rerender function')
        },
    _state:{
        profile:{ 
            newPostText:'',
            postsData:[
              {message:"here some text", id:1, name:"Alex", image:"https://www.w3schools.com/w3images/team2.jpg", likes: 12},
              {message:"some another text for post", id:2, name:"Frida", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Jan_Chabr_profile_pic.jpg/800px-Jan_Chabr_profile_pic.jpg", likes: 12},
              {message:"new additional message for post3", id:3,name:"Jerry", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg_ZbduoivXF84oGeklgcNgttJIH_t3sJ2Yg&usqp=CAU", likes: 5}],
            },
        dialogs:{    
            data :[{name:'Sveta', id:1, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjzC0b532z3APrylh10EMzBtk5lF9FiTOcQA&usqp=CAU'},
                {name:'Sasha', id:2, img:'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'},
                {name:'Lucy', id:3, img:'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'},
                {name:'Alex', id:4, img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' },
                {name:'Arthur', id:5, img:'https://images.unsplash.com/photo-1640951613773-54706e06851d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'},
                {name:'Camilla', id:6, img:'https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'},
                {name:'Mateo', id:7, img:'https://images.unsplash.com/photo-1542065435-d6bc2eac3377?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}],
            currentValue: '',
            mesData:[
                {message:"Hi there how are you doing", id:1},
                {message:"Hello aim okay haapy to hear from you", id:2},
                {message:"What's plan for this holiday? Going hiking?", id:3}]},
        sidebar:[{name:'Sveta', id:1, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjzC0b532z3APrylh10EMzBtk5lF9FiTOcQA&usqp=CAU'},
                {name:'Sasha', id:2, img:'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'},
                {name:'Lucy', id:3, img:'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'},
                {name:'Alex', id:4, img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' },
                {name:'Arthur', id:5, img:'https://images.unsplash.com/photo-1640951613773-54706e06851d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}]
       },
    getState(){
        return this._state;
    },
     subscribe(callBack){
        this._rerenderEntireTree= callBack;
     },
     dispatch(action){
         this._state.profile = profileReducer(this._state.profile, action);
         this._state.dialogs = dialogsReducer(this._state.dialogs, action);
       
         this._rerenderEntireTree(this._state);
         
     }           
}






window.store = store;
export  default store