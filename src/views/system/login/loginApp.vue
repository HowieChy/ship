<template>
  <div>
    <div class="logo"><a @click="back"></a></div>
    <div class="m-login">
      <ul>
        <li><input type="number" placeholder="请输入手机号码" v-model="phone"></li>
        <li><input type="text" placeholder="请输入密码" v-model="pass2"></li>
      </ul>
      <p><a href="./forget.html">忘记密码？</a></p>
      <p class="g-button" style="margin-top:3rem"><button @click="go">登录</button></p>
      <p class="g-button g-button2"><button @click="register">注册</button></p>

    </div>

  </div>
</template>
<script>
    import Lib from 'assets/js/Lib';
    export default {
        data() {
            return {
                phone:null,
                pass2:'',
            }
        },

        //相关操作事件
        methods: {
            //返回
            back(){
                window.history.go(-1);
            },

            go(){

                if(!this.phone||this.reg.checkPhone(this.phone)!='ok'){
                    this.$dialog.toast({
                        mes: '请输入正确手机号码',
                        timeout: 1500
                    });
                    return false;
                }

                if(!this.pass2){
                    this.$dialog.toast({
                        mes: '请输入密码',
                        timeout: 1500
                    });
                    return false
                }

                window.location.href='../home/index.html';
            },


            //注册
            register(){
                window.location.href='./register.html';
            },



        },
        mounted(){

            // this.code=Lib.M.getUrlQuery('id',Lib.C.url_host)
        },

    }
</script>