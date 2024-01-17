const employee = {
    name: "John",
    streetAddress: {
        line1: "11 Broadway",
        line2: "2nd Floor",
    },
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[`${key}`];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[`${key}`];
    return employee;
}