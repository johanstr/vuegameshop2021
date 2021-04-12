import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
  {
    state: {
      cart: [
      ],
      games: [
        {
            id: 1,
            title: "Ryse",
            description: "Ryse: Son of Rome is a third-person action-adventure hack and slash video game developed by Crytek and published by Microsoft Studios.",
            image: "https://games-api.ao-alfacollege.nl/img/ryse.jpeg",
            price: "19.95",
            created_at: "2019-05-23T10:19:38.000000Z",
        },
        {
            id: 2,
            title: "Amnesia",
            description: "Amnesia: The Dark Descent, a first person survival horror. A game about immersion, discovery and living through a nightmare. ",
            image: "https://games-api.ao-alfacollege.nl/img/amnesia.jpeg",
            price: "29.95",
            created_at: "2019-05-23T10:19:38.000000Z",
        },
        {
            id: 3,
            title: "Avatar",
            description: "James Cameron's Avatar: The Game is a 2009 third-person action video game based on James Cameron's 2009 film Avatar. ",
            image: "https://games-api.ao-alfacollege.nl/img/avatar.jpeg",
            price: "39.95",
            created_at: "2019-05-23T10:20:25.000000Z",
        },
        {
            id: 4,
            title: "Horizon Zero Dawn",
            description: "Horizon Zero Dawn is een actierollenspel ontwikkeld door Guerrilla Games. ",
            image: "https://games-api.ao-alfacollege.nl/img/horizonzerodawn.jpeg",
            price: "39.95",
            created_at: "2019-05-23T10:20:25.000000Z",
        },
        {
            id: 5,
            title: "Just Cause",
            description: "Just Cause 2 is een third-person shooter sandboxspel ontwikkeld door Eidos Interactive en Avalanche Studios.",
            image: "https://games-api.ao-alfacollege.nl/img/justcause.jpeg",
            price: "49.95",
            created_at: "2019-05-23T10:21:03.000000Z",
        },
        {
            id: 6,
            title: "Project Cars",
            description: "Project CARS is a motorsport racing simulator video game developed by Slightly Mad Studios. ",
            image: "https://games-api.ao-alfacollege.nl/img/projectcars.jpeg",
            price: "39.95",
            created_at: "2019-05-23T10:21:03.000000Z",
        },
        {
            id: 7,
            title: "Prototype 2",
            description: "Prototype 2 is a 2012 open world action-adventure video game. Developed by Canadian studio Radical Entertainment.",
            image: "https://games-api.ao-alfacollege.nl/img/prototype2.jpeg",
            price: "39.95",
            created_at: "2019-05-23T10:21:49.000000Z",
        },
        {
            id: 8,
            title: "Trine",
            description: "Trine is a side-scrolling, action platform-puzzle video game developed by Frozenbyte and published by Nobilis. ",
            image: "https://games-api.ao-alfacollege.nl/img/trine.jpeg",
            price: "49.95",
            created_at: "2019-05-23T10:21:49.000000Z",
        },
        {
            id: 9,
            title: "Watchdogs",
            description: "Watch Dogs is een open wereld-, action-adventure- en third-person shooter-spel ontwikkeld door Ubisoft Montreal en enkele andere dochterondernemingen van Ubisoft. ",
            image: "https://games-api.ao-alfacollege.nl/img/watchdogs.jpeg",
            price: "19.95",
            created_at: "2019-05-23T10:22:15.000000Z",
        },
      ],
    },
    // Zijn niet direct toegankelijk.
    mutations: {
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
