/* 
    api 文件夹中以业务模型对接口进行拆分，
    举个例子，将所有跟用户相关接口封装在 User 类中，此类称作用户模型。
    在 User 类中比如有登录、注册、获取用户信息等方法，如果有业务逻辑变动，只需要修改相关方法即可。

    把每个业务模型独立成一个 js 文件，声明一个类通过其属性和方法来实现这个模型相关的数据获取，
    这样可以大大提升代码的可读性与可维护性。
*/

/* 
    在需要使用接口的地方，引入对应的业务模型文件，参考如下：
    <script>
    import User from '@/api/user';

    export default {
        data() {
            return {
                username: '',
                password: '',
            };
        },
        methods: {
            async login() {
                const res = await User.login(this.username, this.password);
                console.log(res);
            },
        },
    };
    </script>
*/

import { post } from '@/utils/request';

export default class User {
  /**
   * 登录
   * @param {String} username 用户名
   * @param {String} password 密码
   * @returns
   */

  static async login(username, password) {
    return post('/login', {
      username,
      password,
    });
  }
}
