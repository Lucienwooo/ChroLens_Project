const fs = require('fs');
const path = require('path');

// Files to fix
const files = [
    'src/app/mimic/tutorial/page.tsx',
    'src/app/mimic/tutorial/basic/page.tsx',
    'src/app/mimic/tutorial/advanced/page.tsx',
    'src/app/mimic/tutorial/examples/page.tsx',
    'src/app/mimic/page.tsx'
];

files.forEach(file => {
    const filePath = path.join(__dirname, file);

    try {
        let content = fs.readFileSync(filePath, 'utf8');

        // Replace /tutorial with /mimic/tutorial
        content = content.replace(/href="\/tutorial/g, 'href="/mimic/tutorial');

        // Replace href="/" with href="/mimic" (but not in external links)
        content = content.replace(/href="\/">/g, 'href="/mimic">');

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed: ${file}`);
    } catch (error) {
        console.error(`❌ Error fixing ${file}:`, error.message);
    }
});

console.log('\n✅ All files fixed!');
