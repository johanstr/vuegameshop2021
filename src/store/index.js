import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
  {
    state: {
      cart: [],
      games: [],
    },
    // Zijn niet direct toegankelijk.
    mutations: {
      storeLoadedGames(state, games) {
        state.games = games
      },
      addGameToCart(state, game) {
        let index = state.cart.findIndex( (cart_game) => {
            return cart_game.id === game.id
        })
        // Index waarden lopen 0 -> ....
        // index = -1 als iets niet gevonden wordt 
        if(index > -1) {
          state.cart[index].amount++
        } else {
          state.cart = [ ...state.cart, game ]
        }
      },
      increaseAmountForGame(state, id) {
        let index = state.cart.findIndex( item => item.id === id )

        if(index > -1) {
          state.cart[index].amount++;
        }
      },
      decreaseAmountForGame(state, id) {
        let index = state.cart.findIndex( item => item.id === id )

        if(index > -1) {
          if(state.cart[index].amount > 1)
            state.cart[index].amount--
        }
      },
      deleteItemFromCart(state, id) {
        let new_cart = state.cart.filter(item => item.id !== id)

        state.cart = new_cart
      }
    },
    // Zijn toegankelijk voor andere components
    actions: {
      addGameToCart({ commit }, game) {
        commit('addGameToCart', game)
      },
      incAmountForGame({ commit }, id ) {
        commit('increaseAmountForGame', id)
      },
      decAmountForGame({ commit }, id ) {
        commit('decreaseAmountForGame', id)
      },
      deleteGameFromCart({ commit }, id) {
        commit('deleteItemFromCart', id)
      },
      loadGames({ commit }, games ) {
        commit('storeLoadedGames', games)
      }
    },
    modules: {
    },
    getters: {
      getAllGames(state) {
        return state.games
      },
      countCartItems(state) {
        let amount = 0

        for(let index = 0; index < state.cart.length; index++ ) {
          amount += state.cart[index].amount
        }

        return amount
      },
      getShoppingCart(state) {
        return state.cart;
      },
      isCartEmpty(state) {
        return state.cart.length === 0;
      }
    }
  }
)
