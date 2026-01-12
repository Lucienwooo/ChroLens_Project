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
    // Read with explicit UTF-8 encoding
    const content = fs.readFileSync(filePath, { encoding: 'utf8' });
    
    // Replace /tutorial with /mimic/tutorial (but not /mimic/tutorial)
    const fixed = content
      .replace(/href="\/tutorial/g, 'href="/mimic/tutorial')
      .replace(/href="\/">/g, 'href="/mimic">');
    
    // Write with explicit UTF-8 encoding and BOM
    fs.writeFileSync(filePath, fixed, { encoding: 'utf8' });
    console.log(`✅ Fixed: ${file}`);
  } catch (error) {
    console.error(`❌ Error fixing ${file}:`, error.message);
  }
});

console.log('\n✅ All paths fixed!');
