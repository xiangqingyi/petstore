<template>
    <div>
        <my-header :cartItemCount="cartItemCount"></my-header>
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="pane1-heading">Pet Depot Checkout</div>
                <div class="pane1-body">
                    <div class="form-group">
                        <div class="col-md-12">
                            <h4><strong>Enter Your Information</strong></h4>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-md-6">`
                            <strong>First Name</strong>
                            <input v-model.trim="order.firstName" class="form-control" />
                        </div>
                        <div class="col-md-6">
                            <strong>Last Name</strong>
                            <input v-model.trim="order.lastName" class="form-control" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-md-12"><strong>City:</strong></div>
                        <div class="col-md-12">
                            <input v-model.trim="order.city" class="form-control" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-md-2">
                            <strong>State:</strong>
                            <select v-model="order.state" class="form-control">
                                <option value="" disabled>State</option>
                                <option v-for="(state, key) in states" :key="state.value" :value="state">{{key}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-md-6 col-md-offset-4">
                            <strong>Zip / Postal Code:</strong>
                            <input v-model.number="order.zip" class="form-control"  type="number" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-md-6 boxes">
                            <input type="checkbox" id="gift" value="true" :true-value="order.sendGift"
                                :false-value="order.dontSendGift"
                                v-model="order.gift">
                            <label for="gift">Ship As Gift</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-md-6 boxes">
                            <input type="radio" id="home" :value="order.home" v-model="order.method">
                            <label for="business">Business</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-md-6">
                            <button type="submit" class="btn btn-primary submit" @click="submitForm">Place Order</button>
                        </div>
                    </div>
                    <div class="col-md-12 verify">
                        <pre>
                            First Name: {{order.firstName}}
                            Last Name: {{order.lastName}}
                            Address: {{order.address}}
                            City: {{order.city}}
                            Zip: {{order.zip}}
                            State: {{order.state}}
                            Method: {{order.method}}
                            Gift: {{order.gift}}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
     import MyHeader from './Header';
     export default {
         name: 'Form',
         props: ['cartItemCount'],
         data() {
             return {
                 states: {
                     AL: 'Alabama',
                     AK: 'Alaska',
                     AR: 'Arizona',
                     CA: 'California',
                     NV: 'Nevada'
                 },
                 order: {
                   firstName: '',
                   lastName: '',
                   address: '',
                   city: '',
                   zip: '',
                   state: '',
                   method: 'Home Address',
                   business: 'Business Address',
                   home: 'Home Address',
                   gift: '',
                   sendGift: 'Send As A Gift',
                   dontSendGift: 'Do Not Send As A Gift'  
                 }
             }
         },
         components: {MyHeader},
         methods: {
             submitForm() {

             }
         }
     }
</script>