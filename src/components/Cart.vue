<template>
    <v-container>
        <v-card>
            <v-simple-table>
                <thead>
                    <tr>
                        <th class="text-left">Game</th>
                        <th class="text-center">Aantal</th>
                        <th class="text-right">Prijs</th>
                        <th class="text-right">Totaal</th>
                        <th class="text-center">Acties</th>
                    </tr>
                </thead>
                <tbody>
                    <CartItem v-show="!isCartEmpty" v-for="item in getShoppingCart" :key="item.id" :item="item" />
                    <tr v-show="!isCartEmpty">
                        <td colspan="3" class="text-right">Totaal</td>
                        <td class="text-right">&euro; {{ cartTotal }}</td>
                        <td></td>
                    </tr>
                    <tr v-show="isCartEmpty"><td colspan="5">Geen items in de winkelwagen</td></tr>
                </tbody>
            </v-simple-table>
            <router-link to="/">
                <v-btn class="ma-2 back-button" color="primary">Terug</v-btn>
            </router-link>
            <v-btn v-show="!isCartEmpty" class="ma-2 order-button" color="primary">Bestellen</v-btn>
        </v-card>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import CartItem from './CartItem'

export default {
    name: 'Cart',

    components: {
        CartItem
    },

    data: () => ({

    }),
    computed: {
        ...mapGetters([
            'getShoppingCart',
            'isCartEmpty'
        ]),

        cartTotal() {
            let total = 0.0;

            this.getShoppingCart.forEach( (cart_item) => {
                console.log(cart_item);
                total += parseFloat(cart_item.amount) * parseFloat(cart_item.price)
            })

            return parseFloat(total).toFixed(2);
        }
    }
}
</script>

<style>

.back-button {
    float: left;
}
</style>