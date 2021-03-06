namespace Tetris {
    export let style: object = {
        fontFamily: 'MS Courier New',
        fontSize: 48,
        fontStyle: '',
        fontWeight: 'bold',
        fill: ['#00ff99'], // gradient
        stroke: '#4a1850',
        strokeThickness: 2,
        dropShadow: true,
        dropShadowColor: '#d4d4d4',
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
        wordWrap: true,
        wordWrapWidth: 440,
    },
    boxWidth:number=35,
    boxHeight:number=35,
    assetList:string[]= ["backgroundShader","backgroundStars","bg_full"],
    // assetListForms:string[]=["form_1a","form_1b","form_2ab","form_3a","form_3b","form_4a","form_4b","form_4c","form_4d","form_5a","form_5b","form_5c","form_5d","form_6a","form_6b","form_7a","form_7b","form_7c","form_7d","form_8a","form_8b"], 
    assetListForms:string[]=["block_blue","block_green","block_light_blue","block_orange","block_pink","block_red","block_violet","block_yellow","PlayBtn","but_restart"], 
    globalResources:any = {},
    globalResourcesBg:any = {},
    ticker = tickerShared;
}