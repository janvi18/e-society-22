const maintenanceModel = require("../model/maintenanceModel")

//add Maintenance
module.exports.addMaintenance = function (req, res) {
    let creationDate = req.body.creationDate
    let month = req.body.month
    let maintenanceAmount = req.body.maintenanceAmount
    let maintenancePaid = req.body.maintenancePaid
    let paymentDate = req.body.paymentDate
    let lastDate = req.body.lastDate
    let fine = req.body.fine

    let maintenance = new maintenanceModel({
        "creationDate": creationDate,
        "month": month,
        "maintenanceAmount": maintenanceAmount,
        "maintenancePaid": maintenancePaid,
        "paymentDate": paymentDate,
        "lastDate": lastDate,
        "fine": fine
    })

    maintenance.save(function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went Wrong..."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Maintenance Entry Added!!"
            })
        }
    })

}



//update Maintenance
module.exports.updateMaintenance = function (req, res) {
    let maintenanceId = req.body.maintenanceId
    let creationDate = req.body.creationDate
    let month = req.body.month
    let maintenanceAmount = req.body.maintenanceAmount
    let maintenancePaid = req.body.maintenancePaid
    let paymentDate = req.body.paymentDate
    let lastDate = req.body.lastDate
    let fine = req.body.fine

    maintenanceModel.updateOne({ _id: maintenanceId }, {
        creationDate: creationDate, month: month,
        maintenanceAmount: maintenanceAmount, maintenancePaid: maintenancePaid, paymentDate: paymentDate,
        lastDate: lastDate, fine: fine
    }, function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went Wrong..."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Maintenance Entry Updated!!"
            })
        }
    })

}



//Delete Maintenance
module.exports.deleteMaintenance = function (req, res) {
    let maintenanceId = req.body.maintenanceId

    maintenanceModel.deleteOne({ _id: maintenanceId }, function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went Wrong..."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Maintenance Entry Deleted!!"
            })
        }
    })
}


//List Maintenance
module.exports.getAllMaintenance = function (req, res) {
    maintenanceModel.find(function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went Wrong..."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Maintenance Entries Retrived!!"
            })
        }
    })
}