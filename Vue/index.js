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
    watch:{
        counter : function(value){
            vm=this;
            setTimeout(function(){
                vm.counter=0;
            },5000)
        }
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
        secCounter: 0,
        Result: 'YAY',
        clickRed: false,
        clickGreen: false,
        clickBlue: false,
        color: 'demo',
        width : 100 
    },
    computed:{
        output: function(){
            this.Result= this.counter > 10 ? 'DIE' : 'LIVE'
        },
        RBclass:function(){
            return {
                red : this.clickRed,
                blue : !this.clickRed,
            }
        },
        GRclass:function(){
            return {
                green : this.clickGreen,
                red : !this.clickGreen,
            }
        },
        BGclass:function(){
            return {
                blue : this.clickBlue,
                green : !this.clickBlue,
            }
        },
        Mystyle: function(){
            return{ 
                background:this.color,
                width:this.width + 'px',
                height:this.width + 'px'
            }
        }
    },
    watch:{
        secCounter: function(value){
            vm=this;
            alert(vm.secCounter);
        }        
    },
    methods:{
        Click: function(){
            this.Result= this.counter > 10 ? 'DIE' : 'LIVE'
        }
    }
});
new Vue({
    el : '#app3',
    data:{
        show : true ,
        tshow : false,
        newf:'',
        food: ['orange','chicken','pork','potatoes'],
        friends:[
            {name:'John',age:'24',money:'2000'},
            {name:'Nick',age:'23',money:'20000'},
            {name:'Chris',age:'25',money:'200'}
        ]
    }
});