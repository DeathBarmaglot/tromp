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
                rect: ['7px', '30px','443px','90px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t.png",'0px','0px']
            },
            {
                id: 'main',
                type: 'image',
                rect: ['-40px', '-28px','456px','181px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"main.png",'0px','0px']
            },
            {
                id: 'logo',
                type: 'image',
                rect: ['15px', '11px','185px','129px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','0px']
            },
            {
                id: '_1',
                type: 'image',
                rect: ['227px', '1px','161px','150px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px'],
                transform: [[],[],[],['-1']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_logo}": [
                ["style", "top", '11px'],
                ["style", "height", '129px'],
                ["style", "opacity", '0'],
                ["style", "left", '15px'],
                ["style", "width", '185px']
            ],
            "${_f}": [
                ["style", "left", '-3px'],
                ["style", "top", '-6px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '420px'],
                ["style", "height", '150px'],
                ["style", "overflow", 'hidden']
            ],
            "${_t}": [
                ["style", "top", '30px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '7px'],
                ["style", "width", '443px']
            ],
            "${__1}": [
                ["style", "top", '1px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '-1'],
                ["style", "height", '150px'],
                ["style", "opacity", '0'],
                ["style", "left", '227px'],
                ["style", "width", '161px']
            ],
            "${_main}": [
                ["style", "top", '-28px'],
                ["style", "height", '181px'],
                ["style", "opacity", '0'],
                ["style", "left", '-40px'],
                ["style", "width", '456px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15000,
            autoPlay: true,
            timeline: [
                { id: "eid23", tween: [ "style", "${_t}", "left", '-60px', { fromValue: '7px'}], position: 2500, duration: 500 },
                { id: "eid22", tween: [ "transform", "${_t}", "scaleY", '0.7', { fromValue: '1'}], position: 2500, duration: 500 },
                { id: "eid2", tween: [ "style", "${_t}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 833 },
                { id: "eid4", tween: [ "style", "${_t}", "opacity", '0', { fromValue: '1'}], position: 6667, duration: 833 },
                { id: "eid7", tween: [ "style", "${_main}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 500 },
                { id: "eid8", tween: [ "style", "${_main}", "opacity", '0', { fromValue: '1'}], position: 6667, duration: 833 },
                { id: "eid11", tween: [ "style", "${__1}", "opacity", '1', { fromValue: '0'}], position: 8333, duration: 833 },
                { id: "eid12", tween: [ "style", "${__1}", "opacity", '0', { fromValue: '1'}], position: 14167, duration: 833 },
                { id: "eid24", tween: [ "transform", "${_t}", "scaleX", '0.7', { fromValue: '1'}], position: 2500, duration: 500 },
                { id: "eid21", tween: [ "style", "${_t}", "top", '-11px', { fromValue: '30px'}], position: 2500, duration: 500 },
                { id: "eid9", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0'}], position: 8333, duration: 833 },
                { id: "eid10", tween: [ "style", "${_logo}", "opacity", '0', { fromValue: '1'}], position: 14167, duration: 833 }            ]
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
