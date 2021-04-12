<template>
    <tr>
        <td class="text-left">
            <v-avatar size="50px" rounded="0" class="mr-4 mt-2 mb-2">
                <img :alt="item.title" :title="item.title" :src="item.image" contain />
            </v-avatar>
            <span class="game-title">{{ item.title }}</span>
        </td>
        <td class="text-center">
            <v-icon @click="decreaseAmount" small color="blue">mdi-minus-circle</v-icon>
            <span class="ml-2 mr-2">{{ item.amount }}</span>
            <v-icon @click="increaseAmount" small color="blue">mdi-plus-circle</v-icon>
        </td>
        <td class="text-right">&euro; {{ parseFloat(item.price).toFixed(2) }}</td>
        <td class="text-right">&euro; {{ itemTotal }}</td>
        <td class="text-center">
            <v-btn @click="deleteItemFromCart" icon>
                <v-icon color="red">mdi-trash-can</v-icon>
            </v-btn>
        </td>
    </tr>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'CartItem',
    props: {
        item: Object
    },
    computed: {
        itemTotal() {
            return parseFloat(this.$props.item.amount * this.$props.item.price).toFixed(2)
        }
    },
    methods: {
        ...mapActions([
            'incAmountForGame',
            'decAmountForGame',
            'deleteGameFromCart'
        ]),
        increaseAmount() {
            this.incAmountForGame(this.$props.item.id)
        },
        decreaseAmount() {
            this.decAmountForGame(this.$props.item.id)
        },
        deleteItemFromCart() {
            this.deleteGameFromCart(this.$props.item.id)
        }
    }
}
</script>

<style>
</style>