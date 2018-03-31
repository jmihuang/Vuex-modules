import api from '../../api/shop';

const state = {
    data: {},
    list: ['a', 'b', 'c'],
    aph: ['b', 'c']
}

const mutations = {
    toDone(state, payload) {
        state.list.splice(payload.idx, 1);
    },
    setDate(state, payload) {
        state.data = payload
    }
}

const getters = {
    getLength(state, getters, rootState, rootGetters) {
        return state.list.length;
    },
    getAccount(state, getters, rootState, rootGetters) {
        return rootState.account.name;
    },
    getAllmember(state, getters, rootState, rootGetters) {
        return rootState.member;
    },
    getMoney(state, getters, rootState, rootGetters) {
        return getters.getLength * 1000;
    }
}

const actions = {
    productApi({ commit, dispatch, state, getters, rootState, rootGetters }) {
        api.getProducts(function (rs) {
            commit('setDate', rs);
        })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
};