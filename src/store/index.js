import Vue from 'vue'
import Vuex from 'vuex'
import carts from './modules/cart'
import member from './modules/member'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)
const account = {
    state: {
        name: 'susan'
    }
}


export default new Vuex.Store({
    modules: {
        carts,
        account,
        member
    },
    // strict: debug,
    // plugins: debug ? [createLogger()] : []
})
