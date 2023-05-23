/**
  在不同游戏模式下, 分别计算每个 player 的 top 和  left 的值;
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
    for (let i = 0; i < positionList.length; i++) {
        let position = positionList[i];
        let player = document.createElement("div");
        player.classList.add("base-player");
        player.style['top'] = position.top;
        player.style['left'] = position.left;
        context.appendChild(player);
    }

    
}