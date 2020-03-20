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
                        "caption":"Команда",
                        "type":"input",
                        "width":"8em",
                        "_cells":{
                            "-a":"-c_c",
                            "-b":"-c_e",
                            "-c":"-c_g"
                        },
                        "_serialId":"-h_e",
                        "_colWidth":"8em",
                        "_cellWidth":"8em",
                        "_hcellheight":"1.8333333333333333em",
                        "_region":2
                    },
                    {
                        "id":"col2",
                        "caption":"Заявок",
                        "type":"input",
                        "width":"8em",
                        "_cells":{
                            "-a":"-c_d",
                            "-b":"-c_f",
                            "-c":"-c_h"
                        },
                        "_serialId":"-h_f",
                        "_colWidth":"8em",
                        "_cellWidth":"8em",
                        "_hcellheight":"1.8333333333333333em",
                        "_region":2
                    }
                ])
                .setRows([
                    {
                        "cells":[
                            {
                                "value":"1С РГС"
                            },
                            {
                                "value":"0"
                            }
                        ]
                    },
                    {
                        "cells":[
                            {
                                "value":"LanDocs"
                            },
                            {
                                "value":"5"
                            }
                        ]
                    },
                    {
                        "cells":[
                            {
                                "value":"Консультанты"
                            },
                            {
                                "value":"10"
                            },
                            {
                                "value":"16"
                            }
                        ],
                        "sub":[
                            {
                                "cells":[
                                    {
                                        "value":"Иванов Иван Иванович"
                                    },
                                    {
                                        "value":"10"
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