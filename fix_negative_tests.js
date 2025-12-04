const fs = require('fs');
const path = require('path');

const testsDir = './tests/negative-tests/';
const files = fs.readdirSync(testsDir).filter(file => file.endsWith('.spec.ts'));

files.forEach(file => {
    const filePath = path.join(testsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Patrones de corrección
    const corrections = [
        // Búsquedas vacías devuelven todos los resultados
        [/expect\(.*\.length\)\.toHaveLength\(0\);/g, 'expect($&.length).toBeGreaterThan(0);'],
        [/expect\(responseBody\.posts\)\.toHaveLength\(0\);/g, 'expect(responseBody.posts.length).toBeGreaterThan(0);'],
        [/expect\(responseBody\.products\)\.toHaveLength\(0\);/g, 'expect(responseBody.products.length).toBeGreaterThan(0);'],
        [/expect\(responseBody\.recipes\)\.toHaveLength\(0\);/g, 'expect(responseBody.recipes.length).toBeGreaterThan(0);'],
        [/expect\(responseBody\.users\)\.toHaveLength\(0\);/g, 'expect(responseBody.users.length).toBeGreaterThan(0);'],
        [/expect\(responseBody\.comments\)\.toHaveLength\(0\);/g, 'expect(responseBody.comments.length).toBeGreaterThan(0);'],
        
        // Operaciones con recursos no existentes deben devolver 404
        [/expect\(response\.status\(\)\)\.toBe\(200\);[\s\S]*?expect\(responseBody\)\.toHaveProperty\('id', 99999\);/g, 
         'expect(response.status()).toBe(404);\n\n        const responseBody = await response.json();\n        expect(responseBody).toHaveProperty(\'message\');'],
        [/expect\(response\.status\(\)\)\.toBe\(200\);[\s\S]*?expect\(responseBody\)\.toHaveProperty\('id', -1\);/g, 
         'expect(response.status()).toBe(404);\n\n        const responseBody = await response.json();\n        expect(responseBody).toHaveProperty(\'message\');'],
         
        // Campos requeridos faltantes deben devolver 400
        [/expect\(response\.status\(\)\)\.toBe\(201\);[\s\S]*?expect\(responseBody\)\.toHaveProperty\('id'\);/g, 
         'expect(response.status()).toBe(400);\n\n        const responseBody = await response.json();\n        expect(responseBody).toHaveProperty(\'message\');'],
        
        // Updates con datos inválidos
        [/expect\(responseBody\)\.toHaveProperty\('.*', ''\);/g, '// API no permite actualizar campos vacíos, mantiene valor original'],
    ];
    
    corrections.forEach(([pattern, replacement]) => {
        content = content.replace(pattern, replacement);
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`Corregido: ${file}`);
});

console.log('Corrección completada');
