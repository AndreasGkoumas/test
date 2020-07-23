//full test
new Vue({
    el: '#app' ,
    data:{
        title:'Hello me!' ,
        link: 'http://google.gr',
        thing: 'SoMeThInG',
        html:'<br>',
        counter: 0 ,
        x: 0,
        y: 0
    },
    methods: {
            ChangeT: function(event){
                this.title=event.target.value; 
            },
            Saysomething: function(){
                this.thing='no change';
                return this.thing;
            },
            Click: function(step){
                this.counter+=step ;
            },
            updatemouse: function(event){
                this.x=event.clientX;
                this.y=event.clientY;
            },
            Alertyou: function(){
                alert('HELP');
            }
        }
});
new Vue({
    el: '#app2',
    data:{
        name: 'YOU',
        counter:0 ,
        Result: 'YAY'
    },
    methods:{
        Click: function(){
            this.counter++ ;
            this.Result= this.counter > 10 ? 'DIE' : 'LIVE'
        }
    }
});