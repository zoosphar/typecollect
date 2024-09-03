import fs from "fs";
import path from 'path';

export const collectTypeDefinitions = async (
  projectDirectoryPath: string,
  typesDirectoryName: string,
) => {
  console.log("Project Destination is: ", projectDirectoryPath);
  console.log("Types destination is: ", typesDirectoryName);
  const typesPath = path.join(__dirname, projectDirectoryPath, typesDirectoryName);

  const tsTypeFiles = fs.readdirSync(typesPath, {
    withFileTypes: true,
  });
  console.log('tsTypeFiles are: ', tsTypeFiles);
  // TODO: Read through the directory, collect type definitions and host them as yaml files
};
