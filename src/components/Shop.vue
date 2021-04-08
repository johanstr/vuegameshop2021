<template>
    <v-container>
        <v-layout wrap>
            <GameCard v-for="game in getAllGames" :game="game" :key="game.id" />
        </v-layout>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import GameCard from './GameCard'

export default {
    name: 'Shop',

    components: {
        GameCard
    },

    data: () => ({
        
    }),
    computed: {
        ...mapGetters([
            'getAllGames'
        ]),
    }
}
</script>

<style>
</style>