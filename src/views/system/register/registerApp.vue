<template>
  <div>
    <header>
      <a @click="back"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-return"></use></svg></a><p>注册</p></header>
    <div class="m-login">
      <ul>
        <li><input type="number" placeholder="请输入手机号码" v-model="phone"></li>
        <li class="m-yzm"><input type="text" placeholder="请输入验证码" v-model="yzm"><ins class="m-button m-sendm"  @click="getYzm">{{text}}</ins></li>
        <li><input type="text" placeholder="请输入新密码" v-model="pass2"></li>
        <li><input type="text" placeholder="再次输入新密码" v-model="pass3"></li>
      </ul>
      <p class="g-button" style="margin-top: 2rem"><button @click="go">注册</button></p>
    </div>

  </div>
</template>
<script>
    import Lib from 'assets/js/Lib';
    export default {
        data() {
            return {
                phone:null,
                text:'获取验证码',
                yzm:null,
                pass2:'',
                pass3:'',
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
                if(!this.pass3){
                    this.$dialog.toast({
                        mes: '请再次输入密码',
                        timeout: 1500
                    });
                    return false
                }
                if(this.pass3!=this.pass2){
                    this.$dialog.toast({
                        mes: '请正确输入确认密码',
                        timeout: 1500
                    });
                    return false
                }

                this.register()

            },


            //注册
            register(){

                this.$dialog.toast({
                    mes: '注册成功',
                    timeout: 1500
                });
                setTimeout(()=>{
                    window.location.href='./login.html';
                },1500)

                this.axios.get(Lib.C.url_mc+'/bangbangjinfu/app/user/register_h5',{
                    params:{
                        phone: this.phone,
                        verifyCode:this.yzm,
                        password:this.pass2
                    }
                }).then(res=>{

                }).catch(err=> {
                    console.log(err);
                })
            },

            //获取验证码
            getYzm(){
                console.log(event.target)
                var This=event.target;
                if(this.text!='获取验证码'){
                    return false
                }
                if(!this.phone||this.reg.checkPhone(this.phone)!='ok'){
                    this.$dialog.toast({
                        mes: '请输入正确手机号码',
                        timeout: 1500
                    });
//                    this.$hero.msg.show({
//                        text:'请输入正确手机号码',
//                        times:1500
//                    });
                }else if(this.reg.checkPhone(this.phone)=='ok'){
                    this.axios.get(Lib.C.url_mc+'/bangbangjinfu/app/user/sendCode',{
                        params:{
                            phone: this.phone,
                        }
                    }).then(res=>{
                        console.log(res.data);
                        if(res.data.msg){
                            this.$dialog.toast({
                                mes: '注册失败',
                                timeout: 1500
                            });
                        }else{
                            //注册成功
                            this.$hero.msg.show({
                                text:res.data.result,
                            })
                            var curCount=30;
                            this.text='重新获取'+curCount;
                            This.style.background='#ccc';
                            var timer=setInterval(()=>{
                                curCount--;
                                this.text='重新获取'+curCount;
                                if(curCount<0){
                                    this.text='获取验证码';
                                    This.style.background='#157cc7';
                                    clearInterval(timer)
                                }
                            },1000)
                        }
                    }).catch(err=> {
                        console.log(err);
                    })

                }
            },

        },
        mounted(){

           // this.code=Lib.M.getUrlQuery('id',Lib.C.url_host)
        },

    }
</script>