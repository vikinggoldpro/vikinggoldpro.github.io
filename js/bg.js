/* VikingGOLD – animált háttér (téma-érzékeny, telefonon könnyített) */
(function(){
  if(document.getElementById('vgbg'))return;
  var c=document.createElement('canvas');c.id='vgbg';c.setAttribute('aria-hidden','true');
  c.style.cssText='position:fixed;inset:0;width:100%;height:100%;z-index:-1;pointer-events:none;display:block';
  document.body.insertBefore(c,document.body.firstChild);
  var x=c.getContext('2d'),W=0,H=0,D=1;
  var LITE=matchMedia('(max-width:900px), (hover:none) and (pointer:coarse)').matches;
  var RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
  function size(){D=Math.min(devicePixelRatio||1,LITE?1:1.5);W=innerWidth;H=innerHeight;c.width=W*D;c.height=H*D;x.setTransform(D,0,0,D,0,0)}
  size();addEventListener('resize',size);
  var R=Math.random;
  var orbs=[[255,122,26],[255,176,112],[229,95,0],[190,70,160],[110,80,255]].map(function(col,i){
    return{c:col,x:R()*W,y:R()*H,r:(LITE?220:320)+R()*220,a:R()*6.28,s:.00018+R()*.00022,p:R()*6.28,k:.6+R()*.6}});
  var N=LITE?22:55,P=[];
  for(var i=0;i<N;i++)P.push({x:R()*W,y:R()*H,vx:(R()-.5)*.25,vy:-.08-R()*.25,r:.8+R()*1.6});
  function light(){return document.documentElement.getAttribute('data-theme')==='light'}
  function frame(t){
    var L=light();
    x.clearRect(0,0,W,H);
    x.globalCompositeOperation=L?'source-over':'lighter';
    orbs.forEach(function(o){
      o.a+=o.s*16;
      var px=o.x+Math.cos(o.a+o.p)*140*o.k,py=o.y+Math.sin(o.a*1.3+o.p)*110*o.k;
      var g=x.createRadialGradient(px,py,0,px,py,o.r),rgb=o.c.join(',');
      g.addColorStop(0,'rgba('+rgb+','+(L?.16:.20)+')');g.addColorStop(1,'rgba('+rgb+',0)');
      x.fillStyle=g;x.fillRect(px-o.r,py-o.r,o.r*2,o.r*2);
    });
    x.globalCompositeOperation='source-over';
    var dot=L?'rgba(232,98,10,':'rgba(255,176,112,',ln=L?'rgba(232,98,10,':'rgba(255,150,70,';
    for(var i=0;i<N;i++){
      var p=P[i];p.x+=p.vx;p.y+=p.vy;
      if(p.y<-10){p.y=H+10;p.x=R()*W}if(p.x<-10)p.x=W+10;if(p.x>W+10)p.x=-10;
      x.fillStyle=dot+(L?.45:.55)+')';x.beginPath();x.arc(p.x,p.y,p.r,0,6.283);x.fill();
      if(!LITE)for(var j=i+1;j<N;j++){var q=P[j],dx=p.x-q.x,dy=p.y-q.y,d=dx*dx+dy*dy;
        if(d<14400){x.strokeStyle=ln+((1-d/14400)*(L?.16:.2))+')';x.lineWidth=1;x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}
    }
  }
  if(RM){frame(0);return}
  var on=true,last=0;
  document.addEventListener('visibilitychange',function(){on=!document.hidden;if(on)requestAnimationFrame(loop)});
  function loop(t){if(!on)return;if(t-last>(LITE?33:16)){last=t;frame(t)}requestAnimationFrame(loop)}
  requestAnimationFrame(loop);
})();
