const { ESLint } = require("eslint");
const fs = require("fs").promises;

(async function main() {
    // 1. Create an instance with the `fix` option.
    const eslint = new ESLint({ fix: true, fixTypes: ["layout"] });

	// 2. Load file content
    const content = await fs.readFile("./fixError.js", "utf8");

	// 3. Lint the content
    const lintTextReport = await eslint.lintText(content, {
        filePath: "./fixError.js",
    });

	// 4. Output the fixed content
	console.log('Output of lintText');
    console.log(lintTextReport[0].output);
	console.log();

    // 5. Lint files. This doesn't modify target files.
    const lintFileReport = await eslint.lintFiles(["./fixError.js"]);

	// 6. Output the fixed content
	console.log('Output of lintFiles');
	console.log(lintFileReport[0].output);
})().catch((error) => {
    process.exitCode = 1;
    console.error(error);
});