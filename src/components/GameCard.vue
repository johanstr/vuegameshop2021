<template>
    <v-flex sm4 pa-4 align-space-between justify-space-around row fill-height>
        <v-card>
            <v-img style="max-height: 410px;" :src="game.image"></v-img>
            <v-card-text>
                {{ game.description }}
            </v-card-text>
            <v-card-actions>
                <v-btn color="info">
                    <v-icon>
                        mdi-information
                    </v-icon>
                    Info
                </v-btn>
                <v-btn color="success" @click="add">
                    <v-icon>
                        mdi-cart
                    </v-icon>
                    Kopen
                </v-btn>
                <v-spacer></v-spacer>
                <div class="text-cs-center">
                    <v-chip color="red" text-color="white">
                        &euro; {{ game.price }}
                    </v-chip>
                </div>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'GameCard',
    props: {
        game: Object
    },
    methods: {
        ...mapActions([
            'addGameToCart'
        ]),

        add() {
            const shoppingcart_item = {
                amount: 1,
                ...this.$props.game
            }
            this.addGameToCart(shoppingcart_item)
        }
    }
}
</script>

<style>
</style>