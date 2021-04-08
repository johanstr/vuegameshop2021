<template>
    <v-container>
        <v-card>
            <v-simple-table>
                <thead>
                    <tr>
                        <th>Game</th>
                        <th>Aantal</th>
                        <th>Prijs</th>
                        <th>Totaal</th>
                        <th>Acties</th>
                    </tr>
                </thead>
                <tbody>
                    <CartItem />
                </tbody>
            </v-simple-table>
            <router-link to="/">
                <v-btn class="ma-2 back-button" color="primary">Terug</v-btn>
            </router-link>
            <v-btn class="ma-2 order-button" color="primary">Bestellen</v-btn>
        </v-card>
    </v-container>
</template>

<script>
import CartItem from './CartItem'

export default {
    name: 'Cart',

    components: {
        CartItem
    },

    data: () => ({

    })
}
</script>

<style>

.back-button {
    float: left;
}
</style>