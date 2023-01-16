const fs = require("fs");

function main() {
  if (process.argv.length < 3) {
    console.error("Error: Not enough params passed");
    return;
  }

  let isThreeComponent = false;
  const componentName = process.argv[2];

  if (process.argv.length === 4) {
    console.log("Creating component in /Three");
    isThreeComponent = true;
  }

  let directory = "./src/components";
  if (isThreeComponent) {
    directory += "/Three";
  }

  createNewComponent(directory, componentName);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function createNewComponent(directory, componentName) {
  // Create the new folder
  fs.mkdirSync(directory + "/" + capitalizeFirstLetter(componentName));

  const fileName = `${capitalizeFirstLetter(componentName)}.tsx`;
  const component = capitalizeFirstLetter(componentName);
  const fileContents = `
    import React from 'react';

    interface ${component}Props {
        
    }
     
    const ${component} = (props: ${component}Props) => {
        return ( <>${componentName} renders!</> );
    }
     
    export default ${component};
    `;

  console.log("File should be in", directory + `/${fileName}`);
  fs.writeFileSync(directory + `/${component}/${fileName}`, fileContents);
}

main();
