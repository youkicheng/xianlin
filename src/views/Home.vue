<template>
  <div class="home"> 
    <div class="home-nav">
      <div>
        <img src="../assets/分组 2.png">
        <div class="home-nav-text">消息</div>
      </div>  
      <div>
        <img src="../assets/xingquaihao.png">
        <div class="home-nav-text">兴趣</div>
      </div> 
      <div>
        <img src="../assets/wenda-2.png">
        <div class="home-nav-text">问答</div>
      </div> 
      <div>
        <img src="../assets/搜索.png">
        <div class="home-nav-text">搜索</div>
      </div>  
    </div>
    <div class="home-infor">新消息</div>
    <div class="home-content">
      <ul>
        <li>
          <div class="user-one">
            content
          </div>
        </li>
        <li>
          <div class="user-two">
            content
          </div> 
        </li>
        <li>
          <div class="user-three">
            content
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .home {
    width: 100%;
    min-height: calc(100vh - 120px);
   
    .home-nav{
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 10px 0;
      border-bottom: 1px solid #ccc;
      
      img {
        width: 40px;
        height: 40px; 
      }
      .home-nav-text {
        text-align: center;

      }
    }
    .home-infor {
      font-size: 14px;
      border-bottom: 1px solid #ccc;
      padding: 10px 0;
      text-align: center;
    }
    .home-content {
      div {
        width: 100%;
        height: 200px;
        border-bottom: 1px solid #ccc;

      }
    }
     
  }
  
</style>