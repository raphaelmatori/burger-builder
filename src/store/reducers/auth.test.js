import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/'
}

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(INITIAL_STATE)
    });

    it('should store the token upon login', () => {
        expect(reducer(INITIAL_STATE, {
            type: actionTypes.AUTH_SUCCESS,
            idToken: 'some-token',
            userId: 'some-user-id'
        })).toEqual({
            token: 'some-token',
            userId: 'some-user-id',
            error: null,
            loading: false,
            authRedirectPath: '/'
        })
    })
});