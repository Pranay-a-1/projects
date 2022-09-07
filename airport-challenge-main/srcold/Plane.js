class PLANE {


    constructor(planeID) {
        this.planeID = planeID;
        this._status = [];
    }

    get status() {
        if (this._status.length === 0) {
            let possibleStatus = ['Not Landed in Airport', 'Landed in Airport'];

            this._status.push(possibleStatus[0]);
            return possibleStatus[0];

        }
        else {
            return this._status[0];
        }

    }

    set status(_setStatus) {
        if (_setStatus === 'Not Landed in Airport') {
            this._status.length = 0;
            this._status[0] = _setStatus;
        }
        else if (_setStatus === "Landed in Airport") {
            this._status.length = 0;
            this._status[0] = _setStatus;
        }
        else {
            let invalidStatus = 'Enter valid status either Not Landed in Airport or Landed in Airport';
            this._status.length = 0;
            this._status[0] = invalidStatus;

        }
    }



}


module.exports = {
    PLANE
};