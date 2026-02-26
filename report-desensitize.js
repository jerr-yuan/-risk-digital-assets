(function(){
  var RE_PP  = /[+-]?\d+\.?\d*\s*pp/gi;
  var RE_PCT = /\d[\d,]*\.?\d*\s*%/g;
  var RE_NUM = /(?<![a-zA-Z_\-#(\/\."':])(\d[\d,]*\.?\d+)(?![a-zA-Z_\-\d%p\."':])/g;
  var SKIP = {SCRIPT:1,STYLE:1,NOSCRIPT:1,CODE:1,PRE:1,INPUT:1,SELECT:1,TEXTAREA:1};

  function maskText(t){
    t = t.replace(RE_PP, 'X.XXpp');
    t = t.replace(RE_PCT, 'X.XX%');
    t = t.replace(RE_NUM, 'X.XX');
    return t;
  }

  function walkDOM(node){
    if(!node) return;
    if(node.nodeType===3){
      var orig=node.textContent;
      if(/\d/.test(orig)){
        var masked=maskText(orig);
        if(masked!==orig) node.textContent=masked;
      }
      return;
    }
    if(node.nodeType!==1) return;
    if(SKIP[node.tagName]) return;
    if(node.id==='auth-overlay'||node.id==='auth-pw'||node.id==='auth-btn') return;
    for(var c=node.firstChild;c;c=c.nextSibling) walkDOM(c);
  }

  function maskCharts(){
    if(!window.echarts) return;
    try{
      var doms=document.querySelectorAll('[_echarts_instance_]');
      doms.forEach(function(dom){
        var inst=echarts.getInstanceByDom(dom);
        if(!inst) return;
        var opt=inst.getOption();
        var changed={};
        if(opt.yAxis){
          opt.yAxis.forEach(function(y){
            y.axisLabel=y.axisLabel||{};
            y.axisLabel.formatter=function(){return ''};
          });
          changed.yAxis=opt.yAxis;
        }
        changed.tooltip=[{show:false}];
        if(opt.series){
          opt.series.forEach(function(s){
            if(s.label) s.label.show=false;
            if(s.endLabel) s.endLabel.show=false;
            if(s.markPoint) s.markPoint.label={show:false};
            if(s.markLine) s.markLine.label={show:false};
          });
          changed.series=opt.series;
        }
        inst.setOption(changed);
      });
    }catch(e){}
  }

  function runMask(){
    walkDOM(document.body);
    maskCharts();
  }

  var tid=setInterval(runMask, 600);
  setTimeout(function(){ clearInterval(tid); }, 30000);
})();
