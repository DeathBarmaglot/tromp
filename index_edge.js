/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'f',
                type: 'image',
                rect: ['-3px', '-6px','425px','164px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f.png",'0px','0px']
            },
            {
                id: 't',
                type: 'image',
                rect: ['7px', '30px','400px','90px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t.png",'0px','0px']
            },
            {
                id: 'main',
                type: 'image',
                rect: ['-1px', '-2px','420px','154px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"main.png",'0px','0px']
            },
            {
                id: 'logo',
                type: 'image',
                rect: ['11px', '4px','382px','154px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_logo}": [
                ["style", "top", '4px'],
                ["style", "height", '154px'],
                ["style", "opacity", '0'],
                ["style", "left", '11px'],
                ["style", "width", '382px']
            ],
            "${_f}": [
                ["style", "left", '-3px'],
                ["style", "top", '-6px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '150px'],
                ["style", "width", '420px']
            ],
            "${_t}": [
                ["style", "top", '30px'],
                ["style", "opacity", '0'],
                ["style", "left", '7px']
            ],
            "${_main}": [
                ["style", "top", '-2px'],
                ["style", "height", '154px'],
                ["style", "opacity", '0'],
                ["style", "left", '-1px'],
                ["style", "width", '420px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 18000,
            autoPlay: true,
            timeline: [
                { id: "eid7", tween: [ "style", "${_main}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 1000 },
                { id: "eid8", tween: [ "style", "${_main}", "opacity", '0', { fromValue: '1'}], position: 11000, duration: 1000 },
                { id: "eid2", tween: [ "style", "${_t}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
                { id: "eid4", tween: [ "style", "${_t}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 1000 },
                { id: "eid9", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0'}], position: 12000, duration: 1000 },
                { id: "eid10", tween: [ "style", "${_logo}", "opacity", '0', { fromValue: '1'}], position: 17000, duration: 1000 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-6793562");
