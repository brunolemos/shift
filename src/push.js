var gcm = require('node-gcm')

/*
 * GCM
 */
var sender = new gcm.Sender(constants.PUSH.GCM_SECRET);

exports.send = function(jsonAndroid, android, callback)
{
    /*
     * GCM
     */
    if(android.push.length > 0)
    {
        var message = new gcm.Message();

        message.addDataWithObject(jsonAndroid);

        sender.send(message, android.push, 4, function (err, result) {
            if(err) {
                console.log("==ANDROID==")
                console.log(err);
                console.log("==END==")
            }
        });
    }

    if(typeof callback == "function")
    {
        callback();
    }
}
