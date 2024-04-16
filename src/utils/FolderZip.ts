/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import JSZip from "jszip";

const recursivelyZipFolders = (
  folder: JSZip,
  pathArray: string[],
  currentIndex: number,
  file: File,
) => {
  const subFolder = folder.folder(pathArray[currentIndex])!;
  currentIndex += 1;
  if (currentIndex < pathArray.length - 1) {
    recursivelyZipFolders(subFolder, pathArray, currentIndex, file);
  } else {
    subFolder.file(pathArray[pathArray.length - 1], file);
  }
};

export const getFilesAsZip = async (files: File[]) => {
  // eslint-disable-next-line no-useless-catch
  try {
      const zip = new JSZip();
    //   @ts-ignore
    files.forEach((file: any) => {
      const pathArray = file.path
        ? file.path.split('/')
        : file.webkitRelativePath.split('/');
      if (file.path) {
        pathArray.shift();
      }
      if (pathArray.length === 2) {
        zip.file(pathArray[1], file);
      } else if (pathArray.length > 2) {
        const folder = zip.folder(pathArray[1])!;
        if (pathArray.length === 3) {
          folder.file(pathArray[2], file);
        } else {
          recursivelyZipFolders(folder, pathArray, 2, file);
        }
      }
    });
    // zip object now maintains the original folder structure
    return  zip.generateAsync({
      type: 'blob',
      compression: 'DEFLATE',
      compressionOptions: {
        level: 9,
      },
    });
  } catch (error) {
    throw error;
  }
};
