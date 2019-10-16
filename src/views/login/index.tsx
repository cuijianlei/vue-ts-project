import { Component, Vue } from 'vue-property-decorator';
import Cookies from 'js-cookie';
import { loginReq } from '@/api/user';

@Component
export default class LoginPage extends Vue {
  // tslint:disable-next-line:variable-name
  public user_name: string = '';
  public password: string | number = '';

  public login() {
    loginReq({user_name: this.user_name, password: this.password}).then((res) => {
      const { data: {code, msg}} = res;
      console.log(code);
      if (code === 0) {
        Cookies.set('token', 'value');

        this.$router.push('/home');
      } else {
        console.error(msg);
      }
    });
  }

  protected render() {
    return (
      <div class='login-page'>
        <input v-model={this.user_name}/>
        <input v-model={this.password} type='password' style='margin-left: 10px;'/>
        <button style='margin-left: 10px;' on-click={this.login}>登录</button>
      </div>
    );
  }
}
