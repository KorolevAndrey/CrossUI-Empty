// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"xui_ui_treegrid3")
                .setDirtyMark(false)
                .setLeft("0em")
                .setTop("0em")
                .setRowNumbered(true)
                .setHeader([
                    {
                        "id":"col1",
                        "_cells":{
                            "-a":"-c_a",
                            "-b":"-c_e",
                            "-c":"-c_i",
                            "-d":"-c_m",
                            "-e":"-c_q"
                        },
                        "_serialId":"-h_a",
                        "_colWidth":"8em",
                        "_cellWidth":"8em",
                        "width":"8em",
                        "_hcellheight":"2em",
                        "type":"input",
                        "caption":"col1",
                        "_region":2
                    },
                    {
                        "id":"col2",
                        "_cells":{
                            "-a":"-c_b",
                            "-b":"-c_f",
                            "-c":"-c_j",
                            "-d":"-c_n",
                            "-e":"-c_r"
                        },
                        "_serialId":"-h_b",
                        "_colWidth":"8em",
                        "_cellWidth":"8em",
                        "width":"8em",
                        "_hcellheight":"2em",
                        "type":"input",
                        "caption":"col2",
                        "_region":2
                    },
                    {
                        "id":"col3",
                        "_cells":{
                            "-a":"-c_c",
                            "-b":"-c_g",
                            "-c":"-c_k",
                            "-d":"-c_o",
                            "-e":"-c_s"
                        },
                        "_serialId":"-h_c",
                        "_colWidth":"8em",
                        "_cellWidth":"8em",
                        "width":"8em",
                        "_hcellheight":"2em",
                        "type":"input",
                        "caption":"col3",
                        "_region":2
                    },
                    {
                        "id":"col4",
                        "_cells":{
                            "-a":"-c_d",
                            "-b":"-c_h",
                            "-c":"-c_l",
                            "-d":"-c_p",
                            "-e":"-c_t"
                        },
                        "_serialId":"-h_d",
                        "_colWidth":"8em",
                        "_cellWidth":"8em",
                        "width":"8em",
                        "_hcellheight":"2em",
                        "type":"input",
                        "caption":"col4",
                        "_region":2
                    }
                ])
                .setRows([
                    {
                        "cells":[
                            {
                                "value":"A1"
                            },
                            {
                                "value":"B1"
                            },
                            {
                                "value":"C1"
                            },
                            {
                                "value":"D1"
                            }
                        ]
                    },
                    {
                        "cells":[
                            {
                                "value":"A2"
                            },
                            {
                                "value":"B2"
                            },
                            {
                                "value":"C2"
                            },
                            {
                                "value":"D2"
                            }
                        ]
                    },
                    {
                        "cells":[
                            {
                                "value":"A3"
                            },
                            {
                                "value":"B3"
                            },
                            {
                                "value":"C3"
                            },
                            {
                                "value":"D3"
                            }
                        ],
                        "sub":[
                            {
                                "cells":[
                                    "A4",
                                    "B4",
                                    "C4",
                                    "D4"
                                ]
                            }
                        ]
                    },
                    {
                        "iniFold":false,
                        "cells":[
                            {
                                "value":"A5"
                            },
                            {
                                "value":"B5"
                            },
                            {
                                "value":"C5"
                            },
                            {
                                "value":"D5"
                            }
                        ],
                        "sub":[
                            {
                                "cells":[
                                    {
                                        "value":"A6"
                                    },
                                    {
                                        "value":"B6"
                                    },
                                    {
                                        "value":"C6"
                                    },
                                    {
                                        "value":"D6"
                                    }
                                ]
                            }
                        ]
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});