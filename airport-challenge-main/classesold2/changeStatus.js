

class Status {

    static changeStatus(PlaneObj) {
        PlaneObj.isLanded = true;
        //console.log(`${PlaneObj.planeID} status is ${PlaneObj.isLanded}!`);
        return PlaneObj.isLanded;
    }
}


module.exports = Status;