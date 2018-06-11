<template >
<div id="div">
  <nav style="background-color: white  ">
    <div class="nav-wrapper ">
        <a href="#!" class="brand-logo">MYNOTE</a>
        <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons cyan-text">menu</i></a>
        <ul class="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">组件</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">手机</a></li>
            <li> <a href="#!" class="btn waves-effect waves-teal ">登录</a></li>
            <li> <a href="#!" class=" waves-effect waves-teal btn">注册</a></li>
        </ul>
        <ul class="side-nav" id="mobile-demo">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">组件</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">手机</a></li>
            <li><a href="collapsible.html">登录</a></li>
            <li><a href="mobile.html">注册</a></li>
        </ul>
    </div>
</nav>
<div class=" row">
    <div class="col s12 l4 m6 offset-m3 offset-l4">
        <div class="card card-panel hoverable">
            <div class="row ">
                <form class="col s12  ">
                    <div class="row">
                        <div class="input-field col s11">
                            <i class=" material-icons prefix">perm_identity</i>
                            <input id="first_name" type="text" class="validate">
                            <label for="first_name">用户名</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s11">

                            <i class=" material-icons prefix">lock_outline</i>
                            <input id="password" type="password" class="validate">
                            <label for="password">密码</label>
                        </div>
                    </div>


                    <div class="row ">
                        <a href="#!" class="center col s6  " >立即注册</a>
                        <a href="#!" class="center col s6  " >忘记密码</a>
                    </div>
                    <div class="row center-align">
                        <a href="#!" class=" waves-effect waves-teal btn " style="background-color: #00bcd4">登录</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<!--页脚-->

</div>
</template>

<script>
// import  MJS from './materialize/js/materialize.min.js'
import MCSS from './materialize/css/materialize.min.css'
import a from './materialize/js/1.js'
export default {
  name: 'App',
  
}
</script>

<style>
 
        nav ul a, nav .brand-logo {
            color: #444;
        }
        .brand-logo {
            color: #846C63 !important;
            font-family: 'Abel', sans-serif;
            text-transform: uppercase;
            left: 50px;
            color: #795548;
        }


        main {
            flex: 1 0 auto;
        }

        .waves-effect.waves-qs .waves-ripple {
            /* The alpha value allows the text and background color
            of the button to still show through. */
            background-color: #00bcd4;
        }
        .btn{
          background-color: #00bcd4
        }
        #div{
          background: url(./assets/BJ05.jpg) no-repeat 100%;
          width: 100%;
          height: 100%;
        }
</style>
