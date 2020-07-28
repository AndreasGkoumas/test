new Vue({
    el:'#game',
    data:{
        show : true,
        showcon:false,
        showlog:false,
        yhp : 100,
        mhp : 100,
        ydmg : 0,
        mdmag: 0,
        ymsg:'',
        mmsg:'',
        turns : 2,
        mcritflag : false,
        ycritflag : false,
        yfailflag : false,
        mfailflag : false
    },
    computed:{
        death: function(){
            if(this.yhp<=0){
                if(window.confirm("You died")){
                    this.show=true,
                    this.yhp=100,
                    this.mhp=100,
                    this.showcon=false,
                    this.showlog=false
                }
                else{
                    this.show=true
                }
            }    
        },  
        win:function(){
            if(this.mhp<=0){
                if(window.confirm("You killed it")){
                    this.show=true,
                    this.yhp=100,
                    this.mhp=100,
                    this.showcon=false,
                    this.showlog=false
                }
                else{
                    this.show=true
                }
            }
        }
    },

    methods:{
        start:function(){
            this.show= false,
            this.showcon= true,
            this.showlog= false,
            this.turns=2,
            this.yhp=100,
            this.mhp=100
            this.ymsg='';
            this.mmsg='',
            this.mcritflag=false,
            this.ycritflag=false,
            this.mfailflag = false,
            this.yfailflag = false
        },
        attack:function(){
            this.showlog=true;
            this.turns++,
            this.ydmg= this.damage(10);
            this.critical(true),
            this.mdmg= this.damage(15);
            this.critical(false),
            this.mhp= this.mhp - this.ydmg,
            this.yhp= this.yhp - this.mdmg        
        },
        spattack:function(){
            this.showlog=true;
            this.turns=0,
            this.ydmg= this.damage(10)*3;
            this.critical(true),
            this.mdmg= this.damage(15);
            this.critical(false),
            this.mhp= this.mhp - this.ydmg,
            this.yhp= this.yhp - this.mdmg
        },
        heal:function(){
            this.showlog=true;
            this.turns++,
            this.ydmg= this.damage(10);
            this.mdmg= this.damage(15);
            this.critical(false),
            this.yhp= this.yhp + (this.ydmg-this.mdmg)
        },
        retreat:function(){            
            if(window.confirm("You retreated")){
                this.show=true,
                this.showcon=false,
                this.showlog=false,
                this.yhp=100,
                this.mhp=100
            }
            else{
                this.show=true
            }          
       },
        damage:function(atrr){
            return dmg=(Math.floor(Math.random() *atrr)+1);
        },
        critical:function(play){
            var critical=(Math.floor(Math.random() *20)+1);
            if(critical==20){
                if(play==true){
                    this.ydmg*=2;
                    this.ycritflag=true;
                }
                else{
                    this.mdmg*=2;
                    this.mcritflag=true;
                }
            }
            else if(critical==1){
                if(play==true){
                    this.ydmg=0;
                    this.yfailflag=true;
                }
                else{
                    this.mdmg=0;
                    this.mfailflag=true;
                }
            }
            else{
                this.ycritflag=false;
                this.mcritflag=false;
                this.yfailflag=false;
                this.mfailflag=false;
            }    
        },
    }
});