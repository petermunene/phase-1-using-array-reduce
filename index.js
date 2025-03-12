const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
function reducer(batches){
    return batches.reduce(function(total,batch){
        return total+batch
    })
}
let totalBatteries = reducer(batteryBatches)