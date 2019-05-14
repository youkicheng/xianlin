<template>
  <div class="header">
    <div class="header-local"> 
      <span>西溪海</span>
      <img  src="../assets/system-backnew copy.png">
    </div>
    <div class="header-name">贤邻</div>
    <div class="header-out">
      <div class="header-out-icon"></div>
    </div>
  </div>
 
</template>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    border-bottom: 1px solid #ccc;
    position: sticky;
    top: 0px;
    background-color: #fff;
    .header-local {
      color: #77b4f3;
      font-size: 14px;
      height: 18px;
      margin-left: -20px;
      span {
        padding: 0 10px 0 0;
      }
      img {
        vertical-align: middle;
        height: 10px;
      }     
    }

  
    .header-name {
      font-size: 18px;
      font-weight: 600;
    }
    .header-out-icon {
      width: 80px;
      height: 30px;
      border: 1px solid;
      border-radius: 20px;
      margin-right: -20px;
    }
  }
</style>