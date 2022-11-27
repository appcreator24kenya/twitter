var myFP = fluidPlayer(
    'video-id',	{
"layoutControls": {
    "controlBar": {
        "autoHideTimeout": 3,
        "animated": true,
        "autoHide": false
    },
    "htmlOnPauseBlock": {
        "html": null,
        "height": null,
        "width": null
    },
    "autoPlay": true,
    "mute": false,
    "allowTheatre": false,
    "playPauseAnimation": true,
    "playbackRateEnabled": false,
    "allowDownload": false,
    "playButtonShowing": false,
    "fillToContainer": true,
    "posterImage": ""
},
"vastOptions": {
    "adList": [
        {
            "roll": "preRoll",
            "vastTag": "",
            "adText": ""
        },
        {
            "roll": "midRoll",
            "vastTag": "",
            "adText": ""
        },
        {
            "roll": "postRoll",
            "vastTag": "",
            "adText": ""
        },
        {
            "roll": "onPauseRoll",
            "vastTag": "",
            "adText": ""
        }
    ],
    "adCTAText": false,
    "adCTATextPosition": ""
}
});