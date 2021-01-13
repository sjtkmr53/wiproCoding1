let configData = require("../config/config.json").payload;

let getRefData = async function (req, res) {
    try {
        let requestObject = req.body;
        _.forEach(configData.value, function (row) {
         if(row.valueType =="string"){
            if (_.includes (row.value,'REF_MSISDN')) {
                row.value = _.get(requestObject, "REF_MSISDN", "");
             }
             if (_.includes (row.value, 'REF_IMSI')) {
                 row.value = _.get(requestObject, "REF_IMSI", "");
             }
         } 
         if (row.valueType =="array"){
             _.forEach(row.value, function(row1){
                 if (row1.valueType == "string"){
                    if (row1.value == '{REF_IMSI}') {
                        row1.value = _.get(requestObject, "REF_IMSI", "")
                    }
                    if (_.includes(row1.value,'REF_IMSI')){
                        row1.value = _.replace (row1.value, '{REF_IMSI}',_.get(requestObject, "REF_IMSI", "") );
                    }
                 }
                 if (row1.valueType == "array"){
                     _.forEach(row1.value, function(row2){
                        if(row2.valueType == "string"){
                            if (row2.value == '{REF_SERVPROFID}') {
                                row2.value = _.get(requestObject, "REF_SERVPROFID", "")
                            }
                        

                        if (_.includes(row2.value,'REF_IMSI')){
                            row2.value = _.replace (row2.value, '{REF_IMSI}',_.get(requestObject, "REF_IMSI", "") );
                        }
                    }
                    if (row2.valueType =="array"){
                        _.forEach(row2.value, function(row3){
                            if(row3.valueType == "string"){
                                if (_.includes(row3.value,'REF_IMSI')){
                                    row3.value = _.replace (row3.value, '{REF_IMSI}',_.get(requestObject, "REF_IMSI", "") );
                                }
                            }
                        })
                    }
                     })
                 }
             })
         }
           
        })
        res.json({ message: "get the formatted  data ", error: false, data : configData })
    } catch (e) {
        res.send({ message: "something went wrong .", error: true, data:[] })
    }
}


module.exports = {
    getRefData
}