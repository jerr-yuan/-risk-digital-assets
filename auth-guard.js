(function(){
  var HASH='df1aa7678fb3f99554f92a531cf0658b9a6dfe3003bcdcec8403e58b3b730afe';
  if(sessionStorage.getItem('_authed')==='1') return;
  document.documentElement.style.overflow='hidden';
  var ov=document.createElement('div');
  ov.id='auth-overlay';
  ov.style.cssText='position:fixed;inset:0;z-index:999999;background:#000;display:flex;align-items:center;justify-content:center;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif';
  ov.innerHTML='<div style="text-align:center;color:#fff;width:320px"><h2 style="font-size:22px;font-weight:700;margin:0 0 8px">Private Access</h2><p style="color:#888;font-size:13px;margin:0 0 24px">请输入访问密码</p><input id="auth-pw" type="password" placeholder="Password" style="width:100%;padding:12px 16px;font-size:15px;border:1px solid #333;border-radius:10px;background:#111;color:#fff;outline:none;box-sizing:border-box" autocomplete="off"/><button id="auth-btn" style="width:100%;margin-top:12px;padding:12px;font-size:15px;font-weight:600;border:none;border-radius:10px;background:#0071e3;color:#fff;cursor:pointer">进入</button><p id="auth-err" style="color:#ff453a;font-size:13px;margin:8px 0 0;display:none">密码错误</p></div>';
  document.body.appendChild(ov);
  var inp=document.getElementById('auth-pw'),btn=document.getElementById('auth-btn'),err=document.getElementById('auth-err');
  function attempt(){
    var pw=inp.value;
    crypto.subtle.digest('SHA-256',new TextEncoder().encode(pw)).then(function(buf){
      var h=Array.from(new Uint8Array(buf)).map(function(b){return b.toString(16).padStart(2,'0')}).join('');
      if(h===HASH){sessionStorage.setItem('_authed','1');ov.remove();document.documentElement.style.overflow=''}
      else{err.style.display='block';inp.value='';inp.focus()}
    });
  }
  btn.addEventListener('click',attempt);
  inp.addEventListener('keydown',function(e){if(e.key==='Enter')attempt()});
  setTimeout(function(){inp.focus()},100);
})();
