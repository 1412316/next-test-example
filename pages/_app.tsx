import '../styles/globals.css'
import { useEffect } from 'react'
declare global { interface Window { fbAsyncInit: any; } }
declare global { interface Window { FB:any; } }

let FB = window.FB;

function MyApp({ Component, pageProps }) {

  // useEffect(() => {
  //   <script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v10.0&appId=224405702374158&autoLogAppEvents=1" nonce="bYmFnOn4"></script>
  // }, [])

  // useEffect(() => {
  //   window.fbAsyncInit = function() {
  //     FB.init({
  //       xfbml            : true,
  //       version          : 'v9.0'
  //     });
  //   };
  
  //   (function(d, s, id) {
  //     var js, fjs = d.getElementsByTagName(s)[0];
  //     if (d.getElementById(id)) return;
  //     js = d.createElement(s); js.id = id;
  //     js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
  //     fjs.parentNode.insertBefore(js, fjs);
  //   }(document, 'script', 'facebook-jssdk'));
  // }, [])

  useEffect(() => {
    window.fbAsyncInit = function() {
      FB.init({
        xfbml            : true,
        version          : 'v10.0'
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
