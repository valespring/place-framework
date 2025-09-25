// Framework Discovery CLI
// * Simple utility to list framework files and show usage examples

const fs = require('fs');
const path = require('path');

class FrameworkDiscovery {
	constructor(basePath = process.cwd()) {
		this.basePath = basePath;
		this.scssPath = path.join(basePath, 'scss');
	}

	// Get all SCSS files in a directory
	getScssFiles(dir, recursive = false) {
		const files = [];
		const fullPath = path.join(this.scssPath, dir);
		
		if (!fs.existsSync(fullPath)) {
			return files;
		}

		const items = fs.readdirSync(fullPath);
		
		for (const item of items) {
			const itemPath = path.join(fullPath, item);
			const stat = fs.statSync(itemPath);
			
			if (stat.isDirectory() && recursive) {
				const subFiles = this.getScssFiles(path.join(dir, item), recursive);
				files.push(...subFiles);
			} else if (stat.isFile() && item.endsWith('.scss') && !item.startsWith('index')) {
				files.push(path.join(dir, item).replace(/\\/g, '/'));
			}
		}
		
		return files;
	}

	// Get framework structure
	getFrameworkStructure() {
		return {
			config: this.getScssFiles('core/config'),
			functions: this.getScssFiles('core/functions'),
			mixins: this.getScssFiles('core/mixins'),
			grid: this.getScssFiles('core/grid'),
			helpers: this.getScssFiles('core/helpers'),
			typography: this.getScssFiles('core/typography'),
			normalize: this.getScssFiles('core/normalize'),
			layout: this.getScssFiles('core/layout'),
			structure: this.getScssFiles('core/structure'),
			interactive: this.getScssFiles('core/interactive'),
			variables: this.getScssFiles('variables'),
			framework: this.getScssFiles('framework')
		};
	}

	// Generate import statement
	generateImportStatement(filePath, alias = null) {
		const cleanPath = filePath.replace('.scss', '').replace(/^core\//, '');
		const importPath = `~@place/core/${cleanPath}`;
		const aliasString = alias ? ` as ${alias}` : '';
		return `@use '${importPath}'${aliasString};`;
	}

	// Display framework list
	displayList() {
		const structure = this.getFrameworkStructure();
		
		for (const [category, files] of Object.entries(structure)) {
			if (files.length > 0) {
				console.log(`${category.toUpperCase()}`);
				files.forEach(file => {
					const alias = path.basename(file, '.scss').replace('_', '');
					console.log(`${this.generateImportStatement(file, alias)}`);
				});
				console.log('');
			}
		}
	}
}

// CLI interface
if (require.main === module) {
	const discovery = new FrameworkDiscovery();
	discovery.displayList();
}

module.exports = FrameworkDiscovery;