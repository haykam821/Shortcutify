const encode = require("bplist-creator");

class Shortcut {
	constructor(color, icon) {
		this.actions = [];

		this.color = color;
		this.icon = icon;
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
		});
	}
}
module.exports.Shortcut = Shortcut;