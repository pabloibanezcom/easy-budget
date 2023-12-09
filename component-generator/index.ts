const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const COMPONENTS_PATH = path.join(__dirname, '../src/components');

const copyAllFiles = (sourceDir: string, destDir: string) => {
  // Ensure destination directory exists
  fs.mkdirSync(destDir, { recursive: true });

  // Get all files in the source directory
  const files = fs.readdirSync(sourceDir);

  // Copy each file to the destination directory
  for (const file of files) {
    const sourcePath = path.join(sourceDir, file);
    const destPath = path.join(destDir, file);

    fs.copyFileSync(sourcePath, destPath);
  }

  console.log(`All files copied from ${sourceDir} to ${destDir}.`);
};

const removeFilesAndPath = async (filePath: string) => {
  // Get all files in the source directory
  const files = fs.readdirSync(filePath);

  // Remove each file from the directory
  for (const file of files) {
    const sourcePath = path.join(filePath, file);

    fs.unlinkSync(sourcePath);
  }

  fs.rm(filePath, { recursive: true, force: true }, (err: any) => {
    if (err) {
      throw err;
    }
  });

  console.log(`All files removed from ${filePath}.`);
};

const renameFile = (filePath: string, oldName: string, newName: string) => {
  const oldPath = path.join(filePath, oldName);
  const newPath = path.join(filePath, newName);

  fs.renameSync(oldPath, newPath);
};

const replaceStringsInFile = async (filePath: string, stringsToReplace: { oldString: string; newString: string }[]) => {
  const data = fs.readFileSync(filePath, 'utf8');
  let result = data;
  for (const stringToReplace of stringsToReplace) {
    // Replace the string
    result = result.replace(new RegExp(stringToReplace.oldString, 'g'), stringToReplace.newString);
  }
  fs.writeFileSync(filePath, result, 'utf8');
};

const replaceStringsInFiles = async (
  filesPath: string,
  stringsToReplace: { oldString: string; newString: string }[]
) => {
  // Get all files in the source directory
  const files = fs.readdirSync(filesPath);

  // Replace each string in each file
  for (const file of files) {
    const sourcePath = path.join(filesPath, file);
    await replaceStringsInFile(sourcePath, stringsToReplace);
  }
};

const generateComponent = async () => {
  try {
    const answer = await inquirer.prompt([
      {
        type: 'input',
        name: 'fileName',
        message: 'Component file name (must be in Pascal Case):'
      }
    ]);

    const componentName = {
      name: answer.fileName,
      pascalCase: answer.fileName,
      camelCase: answer.fileName.charAt(0).toLowerCase() + answer.fileName.slice(1)
    };

    console.log(`Generating component ${componentName.name}...`);

    copyAllFiles(path.join(__dirname, 'templates'), path.join(__dirname, 'temp'));

    renameFile(path.join(__dirname, 'temp'), 'Component.tsx', `${componentName.pascalCase}.tsx`);
    renameFile(path.join(__dirname, 'temp'), 'component.module.css', `${componentName.camelCase}.module.css`);

    await replaceStringsInFiles(path.join(__dirname, 'temp'), [
      { oldString: 'Component', newString: componentName.pascalCase },
      { oldString: 'component', newString: componentName.camelCase }
    ]);

    copyAllFiles(path.join(__dirname, 'temp'), path.join(COMPONENTS_PATH, componentName.pascalCase));
    await removeFilesAndPath(path.join(__dirname, 'temp'));

    console.log(`Component ${componentName.name} generated.`);
  } catch (error) {
    console.error(error);
    await removeFilesAndPath(path.join(__dirname, 'temp'));
  }
};

generateComponent();
