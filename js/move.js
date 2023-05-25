function move(e, targetTop, targetLeft, base) {
    if (base < 1) {
        console.error("base 必须大于1");
        return;
    }
    
    let timer;
    let startTop = parseFloat(e.style['top']) || e.offsetTop;
    let startLeft = parseFloat(e.style['left']) || e.offsetLeft;
    
    let endTop = parseFloat(targetTop);
    let endLeft = parseFloat(targetLeft);
    

    let k = (endLeft - startLeft) / (endTop - startTop);
    let diffTop = endTop > startTop? 1: -1;
    if (base) {
        diffTop = diffTop * base;
    }
     
    

    timer = setInterval(()=> {
        startTop = parseFloat(e.style['top']) || e.offsetTop;
        startLeft = parseFloat(e.style['left']) || e.offsetLeft;
        
        // top 越界处理
        let tempTop = startTop + diffTop;
        if (diffTop > 0 && tempTop > endTop) {
            tempTop = endTop;
        } else if (diffTop < 0 && tempTop < endTop) {
            tempTop = endTop;
        }
        // 设置新的 top
        e.style['top'] = tempTop + "px";
        // left 越界处理
        let tempLeft = diffTop * k + startLeft;
        
        if (diffTop * k > 0 && tempLeft > endLeft) {
            tempLeft = endLeft;
        } else if (diffTop * k < 0 && tempLeft < endLeft) {
            tempLeft = endLeft;
        }
        // 设置新的 left
        e.style['left'] = tempLeft + 'px';
        
        if (tempTop == endTop) {
            e.style['top'] = endTop + 'px';
            e.style['left'] = endLeft + 'px';
            clearInterval(timer);
        }
    }, 20);
}
