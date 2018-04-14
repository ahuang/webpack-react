import Immutable from 'immutable';

const initValue = Immutable.fromJS({
    currentUser: {id: 1, name: '小明'}
});

 const appReducer =  (value=initValue, action) => {
    switch(action.type){
        case 'SET_CURRENT_USER':
            value = value.set('currentUser', action.userInfo);
            return value;
        default: 
            return value;
    }

}
export {appReducer}