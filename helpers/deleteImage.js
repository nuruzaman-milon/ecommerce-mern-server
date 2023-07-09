const fs = require('fs').promises;

const deleteImage = async({userImagePath}) =>{
    try {
        const isImageFound = await fs.access(userImagePath);
        if (isImageFound) {
            fs.unlink(userImagePath);
            console.log("image unlinked successfully");
        }else{
            console.log("image not found");
        }
    } catch (error) {
        console.error("User image could not be unlinked! Try again...");
    }

    // fs.access(userImagePath)
    // .then(() => {
    //     return fs.unlink(userImagePath);
    // })
    // .then(() => {
    //     console.log("User image deleted successfully");
    // })
    // .catch((err) => {
    //     if (err.code === 'ENOENT') {
    //         console.error("Can't find image path");
    //     } else {
    //         console.error("User image could not be unlinked! Try again...");
    //     }
    // });
}

module.exports = deleteImage;