const encode = require("bplist-creator");

const rqAll = require("require-all");
const path = require("path");

module.exports.actions = rqAll({
	dirname: path.resolve(__dirname, "./actions"),
});

class Shortcut {
	constructor(color = 0, icon = 0) {
		this.actions = [];

		this.setColor(color);
		this.setIcon(icon);
	}

	add(action, saveAs) {
		this.actions.push(action);
	}

	setColor(color) {
		this.color = color;
		return this;
	}
	setIcon(icon) {
		this.icon = icon;
		return this;
	}
	
	build() {
		return encode({
			WFWorkflowIcon: {
				WFWorkflowIconStartColor: this.color,
				WFWorkflowIconGlyphNumber: this.icon,
			},
			WFWorkflowActions: this.actions,
		});
	}
}
module.exports.Shortcut = Shortcut;