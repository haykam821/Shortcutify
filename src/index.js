const encode = require("bplist-creator");

class Shortcut {
	constructor(color = 0, icon = 0) {
		this.actions = [];

		this.setColor(color);
		this.setIcon(icon);
	}
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