function objectMethods(obj) {
    console.log("Original Object:", obj);  // Original Object: { key1: 'value1', key2: 'value2', key3: 'value3' }

    let keys = Object.keys(obj);
    console.log("After Object.keys():", keys);  // After Object.keys(): [ 'key1', 'key2', 'key3' ]

    let values = Object.values(obj);
    console.log("After Object.values():", values);  // After Object.values(): [ 'value1', 'value2', 'value3' ]

    let entries = Object.entries(obj);
    console.log("After Object.entries():", entries);  // After Object.entries(): [ [ 'key1', 'value1' ], [ 'key2', 'value2' ], [ 'key3', 'value3' ] ]

    let hasProp = obj.hasOwnProperty("property");
    console.log("After hasOwnProperty():", hasProp);  // After hasOwnProperty(): false

    let newObj = Object.assign({}, obj, { newProperty: "newValue" });
    console.log("After Object.assign():", newObj);
    /*
    After Object.assign(): {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    newProperty: 'newValue'
    }
    */

}

const sampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
};

objectMethods(sampleObject);
