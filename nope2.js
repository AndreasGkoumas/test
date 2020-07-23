new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            ALERT: function(){
                alert("DIE");
            },
            Down: function(event){
                this.value=event.target.value;
            }
        }
    });