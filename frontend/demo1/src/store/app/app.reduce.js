import Immutable from 'immutable';

const initValue = Immutable.fromJS({
    currentUser: {}
});

 const appReducer =  (value=initValue, action) => {
    switch(action.type){
        case 'SET_USER_INFO':
            value = value.set('currentUser', 
                Immutable.fromJS(action.userInfo));
            return value;
        default: 
            return value;
    }

}
export {appReducer}