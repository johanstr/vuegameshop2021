<template>
  <v-app>
    <v-toolbar app dark max-height="70">
      <v-toolbar-title class="headerline text-uppercase">
        <span>Gameshop</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/cart">
        <v-icon large color="grey lighten-1">
          mdi-cart
        </v-icon>
      </router-link>

      <v-badge right offset-x="10" offset-y="-5">
        <template v-slot:badge>
          <span>{{ countCartItems }}</span>
        </template>
      </v-badge>
    </v-toolbar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  // Property (Kenmerk, Eigenschap)
  name: 'App',

  // Property
  components: {
    
  },

  // Method
  data: () => ({

  }),
  methods: {
    ...mapActions([
      'loadGames'
    ]),
  },
  computed: {
    ...mapGetters([
      'countCartItems'
    ])
  },
  async mounted() {
    await fetch('https://games-api.ao-alfacollege.nl/api/games')
        .then( response => response.json() )
        .then( data => {
          console.log(data);
          this.loadGames(data)    // Action in de state manager
        })
        .catch( error => console.log(error) )
  }
};
</script>

<style>

</style>
