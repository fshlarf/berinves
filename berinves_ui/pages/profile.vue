<template>
    <div class="mt-3">
    <section class="container">
        <div class="card columns">
            <div class="card card-body" align="center">
                <div>
                    <i class="fa fa-user-circle-o" style="font-size: 100px"></i>
                </div>
                <br>
                <h5>{{user.firstname}}</h5>
                <h6>{{user.email}}</h6>
                
            </div>
        </div>
    </section>
    </div>
</template>

<script>

export default {
    layout: 'navbar',
        data () {
            return {
            }
    },
    computed: {
        user () { 
            return this.$store.state.user 
            
        },
    }
}
</script>


