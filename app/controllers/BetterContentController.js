function BetterContentController(){
    this.listeners = {};
}

BetterContentController.prototype.registerListener = function(client, func) {
    this.listeners[client] = func;
}
BetterContentController.prototype.removeListener = function(client) {
    this.listeners[client] = null;
}

BetterContentController.prototype.onMessage = function(originator, message) {
    if (originator === module.exports.NATIVE_APP){
        if (this.listeners[module.exports.NATIVE_APP]){
            this.listeners[module.exports.NATIVE_APP](message);
        }
    }
    if (originator === module.exports.WEB_CLIENT){
        if (this.listeners[module.exports.WEB_CLIENT]){
            this.listeners[module.exports.WEB_CLIENT](message);
        }
    }
}


module.exports = BetterContentController;
module.exports.NATIVE_APP = 'nativeApp';
module.exports.WEB_CLIENT = 'webClient';