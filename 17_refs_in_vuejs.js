new Vue({
    el: '#vue-app-one',
    data: {
        output:''
    },
    methods: {
        readRefs: function(){
            console.log(this.$refs.input.value)
            this.output = this.$refs.input.value
        }
    },
    computed: {

    }

})