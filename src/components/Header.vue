<template>
    <header>
        <div class="navbar navbar-default">
            <div class="navbar-header">
                <h1>
                    <router-link :to="{name: 'iMain'}">
                        {{ sitename }}
                       
                    </router-link>
                </h1>
            </div>
            <div class="nav navbar-nav navbar-right cart">
                <router-link active-class="active" tag="button" class="btn btn-default btn-lg" :to="{name: 'Form'}">
                    <span class="glyphicon glyphicon-shopping-cart">{{cartItemCount}}</span> Checkout
                </router-link>
                <!-- <button type="button" class="btn btn-default btn-lg" v-on:click="showCheckout">
                    <span class="glyphicon glyphicon-shopping-cart">
                        {{cartItemCount}}
                    </span>Checkout
                </button> -->
            </div>
        </div>
    </header>
</template>         

<script>
    
    export default {
        name: 'my-header',
        data () {
            return {
                sitename: 'Vuejs Pet Depot'
            }
        },
        props: ['cartItemCount'],
        methods: {
            showCheckout() {
                this.$router.push({name: 'Form'})
            }
        }
    
    }
</script>
<style scoped>
    a {
        text-decoration: none;
        color: black;
    }
</style>