import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import products from './modules/products';
Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        products
    }
})



// export const store = new Vuex.Store({
//     state: {
//         products:[]
//     },
//     mutations: {
//         'SET_STORE'(state, products) {
//             state.products = products
//         }
//     },
//     actions: {
//         initStore: ({commit}) => {
//             axios.get('../../static/products.json').then((response) => {
//                 commit('SET_STORE', response.data.products)
//             })
//         }
//     },
//     getters: {
//         products: state => state.products
//     }
// })