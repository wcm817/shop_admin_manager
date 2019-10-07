<template>
  <div class="login">
    <div class="container">
      <img src="../assets/avatar.jpg" alt class="avatar" />
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input placeholder="请输入用户名" prefix-icon="myicon-user" v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="请输入密码"
            prefix-icon="myicon-key"
            v-model="ruleForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
// 导入login的请求接口
import { login } from "@/api/login_index.js";
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      // rules的字段和ruleForm的字段保持一致
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 校验成功
          login(this.ruleForm)
            .then(res => {
              if (res.data.meta.status === 200) {
                // 将token存储到本地
                localStorage.setItem("icast_manager_37", res.data.data.token);
                // 登录成功，进行路由的跳转
                this.$router.push({ name: "home" });
              } else {
                this.$message({
                  message: res.data.meta.msg,
                  type: "warning"
                });
              }
            })
            .catch(res => {
              this.$message({
                message: "服务器异常，请稍后再试",
                type: "warning"
              });
            });
        } else {
          // 校验失败
          this.$message({
            // 提示信息
            message: "请输入所有的必填数据",
            type: "warning"
          });
          return false;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;
  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: white;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>