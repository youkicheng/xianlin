<template>
  <div id="app">
    <Header></Header>
    <div>
      <router-view></router-view>
    </div>
   
    <div id="nav">
      <router-link to="/home">
        <img src="./assets/HomeDoor.png"  class="nav-home">
        <div class="nav-hometext">首页</div>
      </router-link> 
      <router-link to="/active">
        <img src="./assets/合并形状.png" class="nav-active">
        <div  class="nav-activetext">活动</div>
      </router-link> 
      <div class="nav-click" >  
         <img src="./assets/椭圆形 copy.png" class="nav-circular" >
         <span class="nav-add"></span>
      </div> 
      <router-link to="/things">
        <img src="./assets/分组 3.png" class="nav-things">
        <div  class="nav-thingstext">新鲜事</div>
      </router-link> 
      <router-link to="/user">
        <img src="./assets/路径.png" class="nav-user">
        <div  class="nav-usertext">我</div>
      </router-link> 
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
    
      }
    },
    methods: {
  
    }

  }
</script>

<script>
  import Header from './views/Header.vue'
  export default {
    components: {
      Header
    }
  }
</script>
<style lang="scss">
* {
  text-decoration: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

#app {
   display: flex;
   flex-direction:column;
   
}

#nav {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
   left: 0;
  bottom: 0;
  background-image: url("./assets/菜单-copy.png");
  background-repeat: no-repeat;
  background-size: cover;

  > * {
     color: #333;
     font-size: 12px;
     padding-top: 10px;
  
     .nav-hometext, .nav-activetext, .nav-thingstext, .nav-usertext{
       text-align: center;
     }  
     img {
       width:30px;
       height: 30px;

     }
     .nav-circular {
       height: 50px;
       width: 50px;
       margin-top: -8px;
       margin-left: -5px;
     }
     .nav-add {
       width: 30px;
       height: 30px;
       position: absolute;
       background-image: url("./assets/MathPlus.png");
       background-repeat: no-repeat;
       background-size: cover;
       top: 12px;
       left: 5px;
     }

     .nav-user {
       width: 20px;
     }
  }
  .nav-click {
    position: relative;
 
  }
}
</style>
