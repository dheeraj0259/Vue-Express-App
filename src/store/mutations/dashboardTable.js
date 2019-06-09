const { tableItems } = require("../../constants/tableData.js");

const setTableItems = state => {
    state.tableItems = tableItems;
};

module.exports = { setTableItems };
