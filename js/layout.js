/**
  在不同游戏模式下, 分别计算每个 player 的 top 和  left 的值;

  应该分离 实图和数据, 可是又无法做到完全分离。
 */

// 5 人游戏的计算函数
function fivePlayersPosition() {
    // 首先肯定对半分

    return [
        {
            top: '5%',
            left: '33.3%'
        },
        {
            top: '5%',
            left: '58.3%'
        },
        {
            top: '55%',
            left: '8.3%'
        },
        {
            top: '55%',
            left: '83.3%'
        }
    ];
}

function createFivePlayers(context) {

    let positionList = fivePlayersPosition();
    let playerList = _game.playerList;

    for (let i = 0; i < positionList.length; i++) {
        let position = positionList[i];
        let div = document.createElement("div");
        div.classList.add("base-player");
        div.style['top'] = position.top;
        div.style['left'] = position.left;
        div.style['background-image'] = "url('image/character/zhaoyun.jpg')";
        div.style['background-size'] = 'cover';
// <div class="avatar" style="background-image: url(&quot;file:///Users/apple/Home/code/noname-master/image/character/tw_maliang.jpg&quot;); background-size: cover;"><div class="action"></div></div>        
        context.appendChild(div);
        playerList[i].domElement = div;
        
    }

    
}


