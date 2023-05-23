function move(e, targetTop, targetLeft, base) {
    if (base < 1) {
        console.error("base 必须大于1");
        return;
    }
    
    let timer;
    let startTop = parseFloat(e.style['top']) || 0;
    let startLeft = parseFloat(e.style['left']) || 0;
    let endTop = parseFloat(targetTop);
    let endLeft = parseFloat(targetLeft);
    

    let k = (endLeft - startLeft) / (endTop - startTop);
    let diffTop = endTop > startTop? 1: -1;
    if (base) {
        diffTop = diffTop * base;
    }
     
    

    timer = setInterval(()=> {
        startTop = parseFloat(e.style['top']) || 0;
        startLeft = parseFloat(e.style['left']) || 0;
        
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
        
        console.log("current top, left: ", e.style['top'], e.style['left']);
        if (tempTop == endTop) {
            e.style['top'] = endTop + 'px';
            e.style['left'] = endLeft + 'px';
            console.log("final top, left: ", e.style['top'], e.style['left']);
            clearInterval(timer);
        }
    }, 20);
}
