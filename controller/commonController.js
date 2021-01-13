
let getRefData = async function(req, res){
    try{
        res.send ({message:"treu.", error: false})
    }catch(e){
        res.send ({message:"something went wrong .", error: true})
    }
}


module.exports={
    getRefData
}