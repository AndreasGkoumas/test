new Vue({
  el: '#exercise',
  data: {
    flag : false,
    sclass : 'highlight',
    ssclass: '',
    scclass: '',
    rick:{
      backround: 'red' ,
      width: 50 + 'px' ,
      height: 50 + 'px',
      border : 1 + 'px'
    }
    
  
  },
  methods: {
    startEffect: function() {
      var vm=this;  
      setInterval(function(){
        vm.flag = !vm.flag;
        vm.sclass= vm.flag == true ? 'shrink' : 'highlight' ;
      },1000)
      
    }
  }
});
