new Vue({
  el: '#exercise',
  data: {
    flag : false ,
    sclass : 'highlight' ,
    ssclass: '' ,
    scclass: '' ,
    cflag : true ,
    rick:{
      background: 'blue' ,
      width: 50 + 'px' ,
      height: 50 + 'px' ,
      border : 5 + 'px solid black'
    },
    prvalue : 0 ,
    pclass : ''
    
  },
  methods: {
    startEffect: function() {
      var vm=this;  
      setInterval(function(){
        vm.flag = !vm.flag;
        vm.sclass= vm.flag == true ? 'shrink' : 'highlight' ;
      },1000)
      
    },
    progress: function(){
      var vp = this;
      setInterval(function(){
        vp.prvalue++;
      },1000)
    }
  }
});
