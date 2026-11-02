/* VikingGOLD – téma: auto / light / dark (localStorage: vg_theme) */
(function(){
  function get(){try{return localStorage.getItem('vg_theme')||'auto'}catch(e){return 'auto'}}
  function apply(){
    var t=get(),r=t==='auto'?(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'):t;
    document.documentElement.setAttribute('data-theme',r);
    var m=document.querySelector('meta[name=theme-color]');if(m)m.content=r==='light'?'#f6f5f9':'#09070f';
  }
  window.vgTheme=apply;apply();
  try{matchMedia('(prefers-color-scheme: light)').addEventListener('change',apply)}catch(e){}
})();
