(function(){
  function mask(){
    // 1. KPI cards: replace exact numbers
    document.querySelectorAll('.text-2xl,.text-xl,.text-lg,.oa-kpi-value,.metric-value,.stat-value,.kpi-val').forEach(function(el){
      el.textContent=el.textContent.replace(/(\d+\.?\d*)\s*%/g,'X.XX%').replace(/(\d[\d,]+)/g,'X,XXX');
    });
    // 2. Table data cells: mask percentages and counts
    document.querySelectorAll('td.text-right, td[class*="text-right"], td.p-2').forEach(function(el){
      if(el.querySelector('th')) return;
      el.innerHTML=el.innerHTML
        .replace(/>(\d+\.?\d*%)/g,'>X.XX%')
        .replace(/>(\d[\d,]*\.?\d*%)/g,'>X.XX%')
        .replace(/>(\d[\d,]+)(?=<)/g,'>X,XXX');
    });
    // 3. ECharts: override yAxis label formatter & disable tooltip
    if(window.echarts){
      var charts=document.querySelectorAll('[_echarts_instance_]');
      charts.forEach(function(dom){
        var inst=echarts.getInstanceByDom(dom);
        if(!inst) return;
        var opt=inst.getOption();
        if(opt.yAxis){
          opt.yAxis.forEach(function(y){
            y.axisLabel=y.axisLabel||{};
            y.axisLabel.formatter=function(){return ''};
          });
        }
        if(opt.tooltip) opt.tooltip.forEach(function(t){ t.show=false; });
        inst.setOption({yAxis:opt.yAxis, tooltip:[{show:false}]});
      });
    }
  }
  if(document.readyState==='complete') setTimeout(mask,500);
  else window.addEventListener('load',function(){setTimeout(mask,500)});
})();
