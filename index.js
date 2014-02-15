var fs = require("fs");

module.exports = {
	getVersion: function getVersion() {
		var modulePath = module.filename.replace(/\/[^\/]*$/, "");
		var packageJsonSrc = fs.readFileSync(modulePath + "/package.json", { encoding: "utf-8" });
		var packageJson = JSON.parse(packageJsonSrc);
		return packageJson.version;
	}
};

