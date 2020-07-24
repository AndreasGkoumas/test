new Vue({
    el: '#exercise' ,
    data:{
        tname:'Andreas' ,
        Age: '23',
        src:'img/random.jpg',
        
    },
    methods: {
            
            
            Rand: function(){
                return Math.random();
            }
           
        }
});