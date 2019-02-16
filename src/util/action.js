const pio = require("pair-into-object");

module.exports = (id, ...paramIDs) => {
	return (...params) => ({
		WFWorkflowActionIdentifier: id,
		WFWorkflowActionParameters: pio(paramIDs, params),
	});
};