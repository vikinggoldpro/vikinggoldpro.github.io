/* VikingGOLD – animált négyzetes háttér (babakék, fehér és más árnyalatok; téma-érzékeny, telefonon könnyített) */
(function(){
  if(document.getElementById('vgbg'))return;
  var c=document.createElement('canvas');c.id='vgbg';c.setAttribute('aria-hidden','true');
  c.style.cssText='position:fixed;inset:0;width:100%;height:100%;z-index:-1;pointer-events:none;display:block';
  document.body.insertBefore(c,document.body.firstChild);
  var x=c.getContext('2d'),W=0,H=0,D=1,R=Math.random,TAU=Math.PI*2;
  var LITE=matchMedia('(max-width:900px), (hover:none) and (pointer:coarse)').matches;
  var RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var CELL=LITE?64:56;
  /* sötét téma: világos, neon-babakék árnyalatok; világos téma: mély kékek */
  var DARK=[[125,211,252],[255,255,255],[165,180,252],[94,234,212],[147,197,253],[186,230,253]];
  var LIGHT=[[11,99,197],[14,116,144],[79,70,229],[15,118,110],[29,78,216],[56,189,248]];
  function light(){return document.documentElement.getAttribute('data-theme')==='light'}
  function size(){D=Math.min(devicePixelRatio||1,LITE?1:1.5);W=innerWidth;H=innerHeight;c.width=W*D;c.height=H*D;x.setTransform(D,0,0,D,0,0)}
  size();addEventListener('resize',size);
  /* lebegő négyzetek */
  var N=LITE?14:30,S=[];
  function mk(init){
    var s=22+R()*(LITE?70:110);
    return{x:R()*W,y:init?R()*H:H+s,s:s,a:R()*TAU,va:(R()-.5)*.006,vy:-(.12+R()*.32),vx:(R()-.5)*.14,
      k:(R()*DARK.length)|0,fill:R()<.45,w:R()<.3?2:1,al:.10+R()*.22,ph:R()*TAU}
  }
  for(var i=0;i<N;i++)S.push(mk(true));
  /* felvillanó rácscellák */
  var G=[],GN=LITE?6:16;
  function cell(){return{cx:(R()*(W/CELL))|0,cy:(R()*(H/CELL))|0,t:0,d:160+R()*220,k:(R()*DARK.length)|0}}
  for(i=0;i<GN;i++){var g=cell();g.t=R()*g.d;G.push(g)}
  function rgb(col,a){return'rgba('+col[0]+','+col[1]+','+col[2]+','+a+')'}
  function frame(){
    var L=light(),P=L?LIGHT:DARK;
    x.clearRect(0,0,W,H);
    /* finom rács */
    x.lineWidth=1;x.strokeStyle=L?'rgba(11,70,160,.07)':'rgba(147,197,253,.055)';
    x.beginPath();
    for(var gx=0;gx<=W;gx+=CELL){x.moveTo(gx+.5,0);x.lineTo(gx+.5,H)}
    for(var gy=0;gy<=H;gy+=CELL){x.moveTo(0,gy+.5);x.lineTo(W,gy+.5)}
    x.stroke();
    /* felvillanó cellák */
    for(var i=0;i<G.length;i++){
      var g=G[i];g.t++;
      if(g.t>g.d){G[i]=g=cell()}
      var p=Math.sin(g.t/g.d*Math.PI);
      x.fillStyle=rgb(P[g.k],(L?.10:.14)*p);
      x.fillRect(g.cx*CELL+1,g.cy*CELL+1,CELL-1,CELL-1);
      x.strokeStyle=rgb(P[g.k],(L?.30:.40)*p);x.strokeRect(g.cx*CELL+1.5,g.cy*CELL+1.5,CELL-2,CELL-2);
    }
    /* lebegő, forgó négyzetek */
    for(i=0;i<S.length;i++){
      var s=S[i];s.x+=s.vx;s.y+=s.vy;s.a+=s.va;s.ph+=.012;
      if(s.y<-s.s*1.5||s.x<-s.s*2||s.x>W+s.s*2){S[i]=s=mk(false)}
      var col=P[s.k],al=s.al*(.75+.25*Math.sin(s.ph))*(L?.8:1),h=s.s/2;
      x.save();x.translate(s.x,s.y);x.rotate(s.a);
      if(s.fill){x.fillStyle=rgb(col,al*.55);x.fillRect(-h,-h,s.s,s.s)}
      x.lineWidth=s.w;x.strokeStyle=rgb(col,Math.min(al*2.2,.6));x.strokeRect(-h,-h,s.s,s.s);
      x.restore();
    }
  }
  if(RM){frame();return}
  var on=true,last=0,gap=LITE?50:33;
  document.addEventListener('visibilitychange',function(){on=!document.hidden;if(on)requestAnimationFrame(loop)});
  function loop(t){if(!on)return;if(t-last>gap){last=t;frame()}requestAnimationFrame(loop)}
  requestAnimationFrame(loop);
})();
