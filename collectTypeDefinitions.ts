import fs from "fs";

export const collectTypeDefinitions = async (
  projectDirectoryPath: string,
  typesDirectoryName: string,
) => {
  console.log("Project Destination is: ", projectDirectoryPath);
  console.log("Types destination is: ", typesDirectoryName);
  // const tsTypeFiles = await fs.read
  // TODO: Read through the directory, collect type definitions and host them as yaml files
};
