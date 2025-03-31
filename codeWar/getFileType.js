function linuxType(fileAttribute) {
    const fileTypes = {
        '-': "file",
        'd': "directory",
        'l': "symlink",
        'c': "character_file",
        'b': "block_file",
        'p': "pipe",
        's': "socket",
        'D': "door"
      };
    return fileTypes[fileAttribute[0]];
}
console.log(linuxType("-rwxrwxrwx"));