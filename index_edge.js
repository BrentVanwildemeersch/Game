/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'codystar, sans-serif': '<script src=\"http://use.edgefonts.net/codystar:n4,n3:all.js\"></script>',
            'wire-one, sans-serif': '<script src=\"http://use.edgefonts.net/wire-one:n4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"paper-full.min.js",
            "edge_includes/jquery-2.0.2.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'intro',
                            type: 'group',
                            rect: ['0px', '0px', '800', '480', 'auto', 'auto'],
                            c: [
                            {
                                id: 'title2',
                                symbolName: 'title',
                                type: 'rect',
                                rect: ['-120', '-59', '1036', '298', 'auto', 'auto']
                            }]
                        },
                        {
                            id: 'btnplay2',
                            symbolName: 'btnplay',
                            type: 'rect',
                            rect: ['278', '265', '112', '112', 'auto', 'auto'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'txtinfo2',
                            symbolName: 'txtinfo',
                            type: 'rect',
                            rect: ['179', '191px', '441', '35', 'auto', 'auto']
                        },
                        {
                            id: 'btnscore2',
                            symbolName: 'btnscore2',
                            type: 'rect',
                            rect: ['434', '264', '113', '113', 'auto', 'auto'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'TopScore',
                            symbolName: 'TopScore_1',
                            type: 'rect',
                            rect: ['173', '-443', '520', '433', 'auto', 'auto']
                        },
                        {
                            id: 'btnplayscore',
                            symbolName: 'btnplayscore',
                            type: 'rect',
                            rect: ['708px', '-87px', '87', '87', 'auto', 'auto'],
                            opacity: 1
                        },
                        {
                            id: 'GameOver',
                            symbolName: 'GameOver',
                            type: 'rect',
                            rect: ['175', '530', '450', '350', 'auto', 'auto']
                        },
                        {
                            id: 'btnReplay',
                            symbolName: 'btnReplay',
                            type: 'rect',
                            rect: ['313', '768', '65', '65', 'auto', 'auto']
                        },
                        {
                            id: 'btnHighScores',
                            symbolName: 'btnHighScores',
                            type: 'rect',
                            rect: ['413', '768', '65', '65', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '800px', '480px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(43,171,160,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 2750,
                    autoPlay: true,
                    data: [
                        [
                            "eid192",
                            "top",
                            0,
                            0,
                            "linear",
                            "${btnplayscore}",
                            '-87px',
                            '-87px'
                        ],
                        [
                            "eid26",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${btnplay2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid28",
                            "scaleX",
                            2000,
                            500,
                            "linear",
                            "${btnplay2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid185",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${btnplayscore}",
                            '1',
                            '1'
                        ],
                        [
                            "eid113",
                            "scaleY",
                            2250,
                            500,
                            "linear",
                            "${btnscore2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid112",
                            "scaleX",
                            2250,
                            500,
                            "linear",
                            "${btnscore2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid27",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${btnplay2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid29",
                            "scaleY",
                            2000,
                            500,
                            "linear",
                            "${btnplay2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid191",
                            "left",
                            0,
                            0,
                            "linear",
                            "${btnplayscore}",
                            '708px',
                            '708px'
                        ]
                    ]
                }
            },
            "dot": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '-303px', '71px', '75px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'dotgreen',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(176,221,109,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '71px', '75px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${dotgreen}",
                            '-303px',
                            '288px'
                        ]
                    ]
                }
            },
            "btnplay": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'btnplay',
                            opacity: 1,
                            rect: ['0px', '0px', '112', '112', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '112px', '112px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'roundplay',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(171,154,41,1.00)']
                            },
                            {
                                font: ['wire-one, sans-serif', [45, 'px'], 'rgba(0,0,0,1)', '900', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                id: 'txtplay',
                                text: 'Play',
                                align: 'center',
                                rect: ['33px', '30px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '112px', '112px']
                        }
                    }
                },
                timeline: {
                    duration: 3135,
                    autoPlay: false,
                    labels: {
                        "Btnhide": 2250
                    },
                    data: [
                        [
                            "eid51",
                            "left",
                            500,
                            500,
                            "linear",
                            "${btnplay}",
                            '0px',
                            '81px'
                        ],
                        [
                            "eid56",
                            "scaleX",
                            1000,
                            500,
                            "linear",
                            "${roundplay}",
                            '1',
                            '1.4'
                        ],
                        [
                            "eid30",
                            "scaleX",
                            2250,
                            885,
                            "linear",
                            "${btnplay}",
                            '1',
                            '0'
                        ],
                        [
                            "eid31",
                            "scaleY",
                            2250,
                            885,
                            "linear",
                            "${btnplay}",
                            '1',
                            '0'
                        ],
                        [
                            "eid50",
                            "top",
                            500,
                            500,
                            "linear",
                            "${btnplay}",
                            '0px',
                            '-90px'
                        ],
                        [
                            "eid57",
                            "scaleY",
                            1000,
                            500,
                            "linear",
                            "${roundplay}",
                            '1',
                            '1.4'
                        ]
                    ]
                }
            },
            "title": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'title',
                            rect: ['309px', '238px', '421', '60', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '1px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['codystar, sans-serif', [50, 'px'], 'rgba(0,0,0,1)', '900', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                                id: 'txtdot',
                                text: 'Dot',
                                align: 'center',
                                type: 'text'
                            },
                            {
                                rect: ['135px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['codystar, sans-serif', [50, 'px'], 'rgba(0,0,0,1)', '900', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                                id: 'txtthem',
                                text: 'them<br>',
                                align: 'center',
                                type: 'text'
                            },
                            {
                                rect: ['307px', '1px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['codystar, sans-serif', [50, 'px'], 'rgba(0,0,0,1)', '900', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                                id: 'txtout',
                                text: 'out<br>',
                                align: 'center',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1036px', '298px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid14",
                            "top",
                            500,
                            500,
                            "easeInOutElastic",
                            "${txtthem}",
                            '-238px',
                            '0px'
                        ],
                        [
                            "eid13",
                            "left",
                            0,
                            500,
                            "easeInOutElastic",
                            "${txtdot}",
                            '-309px',
                            '0px'
                        ],
                        [
                            "eid15",
                            "left",
                            1000,
                            500,
                            "easeInOutElastic",
                            "${txtout}",
                            '613px',
                            '307px'
                        ]
                    ]
                }
            },
            "txtinfo": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                            text: 'Tap the wrong dot out<br>',
                            id: 'txtinfo',
                            opacity: 0,
                            align: 'center',
                            font: ['codystar, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '900', 'none', '', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '441px', '35px']
                        }
                    }
                },
                timeline: {
                    duration: 6250,
                    autoPlay: false,
                    data: [
                        [
                            "eid63",
                            "opacity",
                            3250,
                            500,
                            "linear",
                            "${txtinfo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid64",
                            "opacity",
                            5750,
                            500,
                            "linear",
                            "${txtinfo}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "btnscore": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '112', '112', 'auto', 'auto'],
                            id: 'btnscore',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '112px', '112px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Ellipse',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(173,88,88,1.00)']
                            },
                            {
                                font: ['wire-one, sans-serif', [45, 'px'], 'rgba(0,0,0,1)', '900', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                id: 'Text',
                                text: 'Score',
                                align: 'left',
                                rect: ['25px', '30px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '112px', '112px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid65",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${btnscore}",
                            '1',
                            '0'
                        ],
                        [
                            "eid66",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${btnscore}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "btnscore2": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '113px', '113px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(204,106,106,1.00)']
                        },
                        {
                            rect: ['23px', '29px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text',
                            text: 'Score',
                            font: ['wire-one, sans-serif', [50, 'px'], 'rgba(0,0,0,1)', '600', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '113px', '113px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid104",
                            "left",
                            500,
                            500,
                            "linear",
                            "${Ellipse}",
                            '0px',
                            '-88px'
                        ],
                        [
                            "eid105",
                            "top",
                            500,
                            500,
                            "linear",
                            "${Ellipse}",
                            '0px',
                            '-104px'
                        ],
                        [
                            "eid107",
                            "scaleY",
                            1250,
                            500,
                            "linear",
                            "${Ellipse}",
                            '1',
                            '1.4'
                        ],
                        [
                            "eid109",
                            "scaleY",
                            2500,
                            500,
                            "linear",
                            "${Ellipse}",
                            '1.4',
                            '0'
                        ],
                        [
                            "eid106",
                            "scaleX",
                            1250,
                            500,
                            "linear",
                            "${Ellipse}",
                            '1',
                            '1.4'
                        ],
                        [
                            "eid108",
                            "scaleX",
                            2500,
                            500,
                            "linear",
                            "${Ellipse}",
                            '1.4',
                            '0'
                        ],
                        [
                            "eid111",
                            "scaleY",
                            2500,
                            500,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid103",
                            "top",
                            500,
                            500,
                            "linear",
                            "${Text}",
                            '29px',
                            '-75px'
                        ],
                        [
                            "eid102",
                            "left",
                            500,
                            500,
                            "linear",
                            "${Text}",
                            '23px',
                            '-65px'
                        ],
                        [
                            "eid110",
                            "scaleX",
                            2500,
                            500,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "TopScore": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'topscore1',
                            opacity: 1,
                            rect: ['0px', '409px', '520', '73', 'auto', 'auto'],
                            c: [
                            {
                                type: 'rect',
                                id: 'score1',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['147px', '19px', '373px', '36px', 'auto', 'auto'],
                                fill: ['rgba(69,199,81,1.00)']
                            },
                            {
                                rect: ['0px', '0px', '73px', '73px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'elp1',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(69,199,81,1.00)']
                            },
                            {
                                rect: ['29px', '14px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'txt1',
                                text: '1',
                                font: ['wire-one, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '500', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            type: 'group',
                            id: 'topscore2',
                            opacity: 1,
                            rect: ['0px', '494px', '520', '73', 'auto', 'auto'],
                            c: [
                            {
                                type: 'rect',
                                id: 'score2',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['147px', '19px', '373px', '36px', 'auto', 'auto'],
                                fill: ['rgba(183,200,94,1.00)']
                            },
                            {
                                rect: ['0px', '0px', '73px', '73px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'elp2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(183,200,94,1.00)']
                            },
                            {
                                rect: ['33px', '14px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'txt2',
                                text: '2<br>',
                                font: ['wire-one, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '500', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            type: 'group',
                            id: 'topscore3',
                            opacity: 1,
                            rect: ['0px', '584px', '520', '73', 'auto', 'auto'],
                            c: [
                            {
                                type: 'rect',
                                id: 'score3',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['147px', '19px', '373px', '36px', 'auto', 'auto'],
                                fill: ['rgba(196,97,79,1.00)']
                            },
                            {
                                type: 'ellipse',
                                rect: ['0px', '0px', '73px', '73px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'elp3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(196,97,79,1.00)'],
                                c: [
                                {
                                    rect: ['31px', '15px', 'auto', 'auto', 'auto', 'auto'],
                                    id: 'txt3',
                                    text: '3',
                                    font: ['wire-one, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '500', 'none', '', 'break-word', 'nowrap'],
                                    type: 'text'
                                }]
                            }]
                        },
                        {
                            type: 'group',
                            id: 'topscore4',
                            opacity: 1,
                            rect: ['0px', '677px', '520', '73', 'auto', 'auto'],
                            c: [
                            {
                                type: 'rect',
                                id: 'score4',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['147px', '19px', '373px', '36px', 'auto', 'auto'],
                                fill: ['rgba(78,181,196,1.00)']
                            },
                            {
                                type: 'ellipse',
                                rect: ['0px', '0px', '73px', '73px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'elp4',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(78,181,196,1.00)'],
                                c: [
                                {
                                    rect: ['31px', '15px', 'auto', 'auto', 'auto', 'auto'],
                                    id: 'txt4',
                                    text: '4',
                                    font: ['wire-one, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '500', 'none', '', 'break-word', 'nowrap'],
                                    type: 'text'
                                }]
                            }]
                        },
                        {
                            type: 'group',
                            id: 'topscore5',
                            opacity: 1,
                            rect: ['0px', '769px', '520', '73', 'auto', 'auto'],
                            c: [
                            {
                                type: 'rect',
                                id: 'score5',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['147px', '19px', '373px', '36px', 'auto', 'auto'],
                                fill: ['rgba(187,105,179,1.00)']
                            },
                            {
                                type: 'ellipse',
                                rect: ['0px', '0px', '73px', '73px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'elp5',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(187,105,179,1.00)'],
                                c: [
                                {
                                    rect: ['31px', '15px', 'auto', 'auto', 'auto', 'auto'],
                                    id: 'txt5',
                                    text: '5',
                                    font: ['wire-one, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '500', 'none', '', 'break-word', 'nowrap'],
                                    type: 'text'
                                }]
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '520px', '433px']
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: false,
                    data: [
                        [
                            "eid125",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${topscore1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid127",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${topscore4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid130",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${topscore1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid139",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${topscore1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid136",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${topscore4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid137",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${topscore2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid126",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${topscore5}",
                            '1',
                            '1'
                        ],
                        [
                            "eid135",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${topscore5}",
                            '1',
                            '1'
                        ],
                        [
                            "eid121",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${topscore5}",
                            '1',
                            '1'
                        ],
                        [
                            "eid115",
                            "top",
                            500,
                            500,
                            "linear",
                            "${topscore4}",
                            '268px',
                            '712px'
                        ],
                        [
                            "eid122",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${topscore4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid114",
                            "top",
                            250,
                            500,
                            "linear",
                            "${topscore5}",
                            '360px',
                            '793px'
                        ],
                        [
                            "eid138",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${topscore3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid117",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${topscore2}",
                            '85px',
                            '549px'
                        ],
                        [
                            "eid118",
                            "top",
                            1250,
                            500,
                            "linear",
                            "${topscore1}",
                            '0px',
                            '467px'
                        ],
                        [
                            "eid123",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${topscore3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid129",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${topscore2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid128",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${topscore3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid124",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${topscore2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid116",
                            "top",
                            750,
                            500,
                            "linear",
                            "${topscore3}",
                            '175px',
                            '631px'
                        ]
                    ]
                }
            },
            "TopScore_1": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '520', '73', 'auto', 'auto'],
                            id: 'topscore1',
                            type: 'group',
                            c: [
                            {
                                type: 'rect',
                                id: 'score1',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['147px', '19px', '373px', '36px', 'auto', 'auto'],
                                fill: ['rgba(69,199,81,1.00)']
                            },
                            {
                                rect: ['0px', '0px', '73px', '73px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'elp1',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(69,199,81,1.00)']
                            },
                            {
                                rect: ['29px', '14px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'txt1',
                                text: '1',
                                font: ['wire-one, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '500', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            },
                            {
                                rect: ['161px', '19px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'txtscore1',
                                text: 'Topscore',
                                font: ['wire-one, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '600', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['0px', '85px', '520', '73', 'auto', 'auto'],
                            id: 'topscore2',
                            type: 'group',
                            c: [
                            {
                                type: 'rect',
                                id: 'score2',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['147px', '19px', '373px', '36px', 'auto', 'auto'],
                                fill: ['rgba(183,200,94,1.00)']
                            },
                            {
                                rect: ['0px', '0px', '73px', '73px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'elp2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(183,200,94,1.00)']
                            },
                            {
                                rect: ['33px', '14px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'txt2',
                                text: '2<br>',
                                font: ['wire-one, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '500', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            },
                            {
                                rect: ['161', '21px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['wire-one, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '600', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                                id: 'txtscore2',
                                text: 'Topscore',
                                align: 'left',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['0px', '175px', '520', '73', 'auto', 'auto'],
                            id: 'topscore3',
                            type: 'group',
                            c: [
                            {
                                type: 'rect',
                                id: 'score3',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['147px', '19px', '373px', '36px', 'auto', 'auto'],
                                fill: ['rgba(196,97,79,1.00)']
                            },
                            {
                                rect: ['159px', '20px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['wire-one, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '600', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                                id: 'txtscore3',
                                text: 'Topscore',
                                align: 'left',
                                type: 'text'
                            },
                            {
                                type: 'ellipse',
                                id: 'elp3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['0px', '0px', '73px', '73px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                fill: ['rgba(196,97,79,1.00)'],
                                c: [
                                {
                                    rect: ['31px', '15px', 'auto', 'auto', 'auto', 'auto'],
                                    id: 'txt3',
                                    text: '3',
                                    font: ['wire-one, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '500', 'none', '', 'break-word', 'nowrap'],
                                    type: 'text'
                                }]
                            }]
                        },
                        {
                            rect: ['0px', '268px', '520', '73', 'auto', 'auto'],
                            id: 'topscore4',
                            type: 'group',
                            c: [
                            {
                                type: 'rect',
                                id: 'score4',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['147px', '19px', '373px', '36px', 'auto', 'auto'],
                                fill: ['rgba(78,181,196,1.00)']
                            },
                            {
                                type: 'ellipse',
                                id: 'elp4',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['0px', '0px', '73px', '73px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                fill: ['rgba(78,181,196,1.00)'],
                                c: [
                                {
                                    rect: ['159px', '19px', 'auto', 'auto', 'auto', 'auto'],
                                    font: ['wire-one, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '600', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                                    id: 'txtscore4',
                                    text: 'Topscore',
                                    align: 'left',
                                    type: 'text'
                                },
                                {
                                    rect: ['31px', '15px', 'auto', 'auto', 'auto', 'auto'],
                                    id: 'txt4',
                                    text: '4',
                                    font: ['wire-one, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '500', 'none', '', 'break-word', 'nowrap'],
                                    type: 'text'
                                }]
                            }]
                        },
                        {
                            rect: ['0px', '360px', '520', '73', 'auto', 'auto'],
                            id: 'topscore5',
                            type: 'group',
                            c: [
                            {
                                type: 'rect',
                                id: 'score5',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['147px', '19px', '373px', '36px', 'auto', 'auto'],
                                fill: ['rgba(187,105,179,1.00)']
                            },
                            {
                                rect: ['159px', '21px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['wire-one, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '600', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                                id: 'txtscore5',
                                text: 'Topscore',
                                align: 'left',
                                type: 'text'
                            },
                            {
                                type: 'ellipse',
                                id: 'elp5',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['0px', '0px', '73px', '73px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                fill: ['rgba(187,105,179,1.00)'],
                                c: [
                                {
                                    rect: ['31px', '15px', 'auto', 'auto', 'auto', 'auto'],
                                    id: 'txt5',
                                    text: '5',
                                    font: ['wire-one, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '500', 'none', '', 'break-word', 'nowrap'],
                                    type: 'text'
                                }]
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '520px', '433px']
                        }
                    }
                },
                timeline: {
                    duration: 6250,
                    autoPlay: false,
                    data: [
                        [
                            "eid156",
                            "top",
                            4250,
                            1000,
                            "easeInOutElastic",
                            "${topscore3}",
                            '175px',
                            '664px'
                        ],
                        [
                            "eid155",
                            "top",
                            3750,
                            1000,
                            "easeInOutElastic",
                            "${topscore4}",
                            '268px',
                            '743px'
                        ],
                        [
                            "eid157",
                            "top",
                            4750,
                            1000,
                            "easeInOutElastic",
                            "${topscore2}",
                            '85px',
                            '584px'
                        ],
                        [
                            "eid158",
                            "top",
                            5250,
                            1000,
                            "easeInOutElastic",
                            "${topscore1}",
                            '0px',
                            '504px'
                        ],
                        [
                            "eid154",
                            "top",
                            3250,
                            1000,
                            "easeInOutElastic",
                            "${topscore5}",
                            '360px',
                            '821px'
                        ]
                    ]
                }
            },
            "btnHome": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0', '0']],
                            id: 'home',
                            type: 'image',
                            rect: ['732px', '3px', '62px', '58px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/home.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 3750,
                    autoPlay: false,
                    data: [
                        [
                            "eid162",
                            "top",
                            500,
                            0,
                            "linear",
                            "${home}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid160",
                            "scaleY",
                            3250,
                            500,
                            "linear",
                            "${home}",
                            '0',
                            '1'
                        ],
                        [
                            "eid159",
                            "scaleX",
                            3250,
                            500,
                            "linear",
                            "${home}",
                            '0',
                            '1'
                        ],
                        [
                            "eid161",
                            "left",
                            500,
                            0,
                            "linear",
                            "${home}",
                            '732px',
                            '732px'
                        ]
                    ]
                }
            },
            "btnplayscore": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0', '0']],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['0px', '0px', '87px', '87px', 'auto', 'auto'],
                            id: 'Ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(205,201,77,1.00)']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'text',
                            id: 'Text',
                            text: 'Play',
                            font: ['wire-one, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            rect: ['26px', '21px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '87px', '87px']
                        }
                    }
                },
                timeline: {
                    duration: 3750,
                    autoPlay: false,
                    data: [
                        [
                            "eid181",
                            "scaleX",
                            3250,
                            500,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid184",
                            "scaleY",
                            3250,
                            500,
                            "linear",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid183",
                            "scaleX",
                            3250,
                            500,
                            "linear",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid182",
                            "scaleY",
                            3250,
                            500,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid193",
                            "top",
                            0,
                            500,
                            "linear",
                            "${Text}",
                            '21px',
                            '119px'
                        ],
                        [
                            "eid194",
                            "top",
                            0,
                            500,
                            "linear",
                            "${Ellipse}",
                            '0px',
                            '98px'
                        ]
                    ]
                }
            },
            "btnscoreplay": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0', '0']],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['0px', '0px', '97px', '98px', 'auto', 'auto'],
                            id: 'Ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(195,90,90,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['23px', '26px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text',
                            text: 'Score',
                            font: ['wire-one, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            transform: [[], [], [], ['0', '0']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '97px', '98px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid186",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid187",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid189",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid188",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${Ellipse}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "GameOver": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '450', '350', 'auto', 'auto'],
                            id: 'GameOverScreen',
                            type: 'group',
                            c: [
                            {
                                type: 'rect',
                                id: 'Rectangle',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['0px', '0px', '450px', '350px', 'auto', 'auto'],
                                fill: ['rgba(103,189,96,1.00)']
                            },
                            {
                                font: ['wire-one, sans-serif', [60, 'px'], 'rgba(0,0,0,1)', '600', 'none', '', 'break-word', ''],
                                type: 'text',
                                id: 'txtgameOver',
                                text: 'Game Over',
                                align: 'center',
                                rect: ['0px', '21px', '450px', '67px', 'auto', 'auto']
                            },
                            {
                                font: ['wire-one, sans-serif', [35, 'px'], 'rgba(0,0,0,1)', '600', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                id: 'Text2',
                                text: 'Score',
                                align: 'center',
                                rect: ['87px', '112px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                font: ['wire-one, sans-serif', [35, 'px'], 'rgba(0,0,0,1)', '600', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                id: 'Text3',
                                text: 'Name',
                                align: 'center',
                                rect: ['88px', '152px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                font: ['wire-one, sans-serif', [30, 'px'], 'rgba(215,27,27,1.00)', '800', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                id: 'txtscore',
                                text: '00 : 00 : 00',
                                align: 'center',
                                rect: ['232px', '118px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'textboxplaceholder',
                                stroke: [1, 'rgba(46,74,43,1.00)', 'none'],
                                rect: ['232px', '161px', '92px', '21px', 'auto', 'auto'],
                                fill: ['rgba(248,248,248,0.00)']
                            },
                            {
                                rect: ['357', '153', '44', '44', 'auto', 'auto'],
                                id: 'btnAdd',
                                symbolName: 'Symbol_1',
                                type: 'rect'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '450px', '350px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid200",
                            "top",
                            0,
                            500,
                            "linear",
                            "${GameOverScreen}",
                            '0px',
                            '-469px'
                        ]
                    ]
                }
            },
            "btnHighScores": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '65', '65', 'auto', 'auto'],
                            id: 'test',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '65px', '65px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Ellipse2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(118,133,159,1.00)']
                            },
                            {
                                rect: ['6px', '20px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['wire-one, sans-serif', [22, 'px'], 'rgba(0,0,0,1)', '500', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                                id: 'Text2',
                                text: 'HighScores',
                                align: 'left',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '65px', '65px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid202",
                            "top",
                            0,
                            500,
                            "linear",
                            "${test}",
                            '0px',
                            '-478px'
                        ]
                    ]
                }
            },
            "btnReplay": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'btn',
                            rect: ['0px', '0px', '65', '65', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '65px', '65px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Ellipse',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(128,63,63,1.00)']
                            },
                            {
                                type: 'text',
                                id: 'Text',
                                text: 'Replay',
                                rect: ['14px', '16px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['wire-one, sans-serif', [25, 'px'], 'rgba(0,0,0,1)', '500', 'none', '', 'break-word', 'nowrap']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '65px', '65px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid203",
                            "top",
                            0,
                            500,
                            "linear",
                            "${btn}",
                            '0px',
                            '-478px'
                        ]
                    ]
                }
            },
            "btnAdd": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '48px', '48px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(181,128,67,1)']
                        },
                        {
                            type: 'text',
                            rect: ['11px', '7px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text3',
                            text: 'Add',
                            align: 'left',
                            font: ['wire-one, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '48px', '48px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid210",
                            "top",
                            0,
                            500,
                            "linear",
                            "${Ellipse3}",
                            '0px',
                            '-478px'
                        ],
                        [
                            "eid209",
                            "top",
                            0,
                            500,
                            "linear",
                            "${Text3}",
                            '7px',
                            '-478px'
                        ]
                    ]
                }
            },
            "Symbol_1": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '44px', '44px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(181,128,67,1)']
                        },
                        {
                            type: 'text',
                            rect: ['9px', '5px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text4',
                            text: 'Add',
                            align: 'left',
                            font: ['wire-one, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '44px', '44px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-3802495");
