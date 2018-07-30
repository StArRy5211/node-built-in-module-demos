// 前置知识：
// POSIX：可移植操作系统接口（英语：Portable Operating System Interface，缩写为POSIX），是IEEE为要在各种UNIX操作系统上运行软件，而定义API的一系列互相关联的标准的总称，其正式称呼为IEEE Std 1003，而国际标准名称为ISO/IEC 9945。
// 文件描述符：在 POSIX 系统，内核为所有进程维护着一张当前打开着的文件与资源的表格。 每个打开的文件都会分配一个名为文件描述符的数值标识。 在系统层，所有文件系统操作使用这些文件描述符来识别与追踪每个特定的文件。 Window 系统使用了一个不同但概念类似的机制来追踪资源。 为方便用户，Node.js 抽象了不同操作系统间的差异，为所有打开的文件分配了数值的文件描述符。
// 
// 常量：
//  Access Constants
//    F_OK	        | Flag indicating that the file is visible to the calling process.
//    R_OK	        | Flag indicating that the file can be read by the calling process.
//    W_OK	        | Flag indicating that the file can be written by the calling process.
//    X_OK	        | Flag indicating that the file can be executed by the calling process.
// 
//  Open Constants
//    O_RDONLY	    | Flag indicating to open a file for read-only access.
//    O_WRONLY	    | Flag indicating to open a file for write-only access.
//    O_RDWR	      | Flag indicating to open a file for read-write access.
//    O_CREAT	      | Flag indicating to create the file if it does not already exist.
//    O_EXCL	      | Flag indicating that opening a file should fail if the O_CREAT flag is set and the file already exists.
//    O_NOCTTY	    | Flag indicating that if path identifies a terminal device, opening the path shall not cause that terminal to become the controlling terminal for the process (if the process does not already have one).
//    O_TRUNC	      | Flag indicating that if the file exists and is a regular file, and the file is opened successfully for write access, its length shall be truncated to zero.
//    O_APPEND	    | Flag indicating that data will be appended to the end of the file.
//    O_DIRECTORY	  | Flag indicating that the open should fail if the path is not a directory.
//    O_NOATIME	    | Flag indicating reading accesses to the file system will no longer result in an update to the atime information associated with the file. This flag is available on Linux operating systems only.
//    O_NOFOLLOW	  | Flag indicating that the open should fail if the path is a symbolic link.
//    O_SYNC	      | Flag indicating that the file is opened for synchronized I/O with write operations waiting for file integrity.
//    O_DSYNC	      | Flag indicating that the file is opened for synchronized I/O with write operations waiting for data integrity.
//    O_SYMLINK	    | Flag indicating to open the symbolic link itself rather than the resource it is pointing to.
//    O_DIRECT	    | When set, an attempt will be made to minimize caching effects of file I/O.
//    O_NONBLOCK	  | Flag indicating to open the file in nonblocking mode when possible.
//
//  Type Constants
//    S_IFMT	      | Bit mask used to extract the file type code.
//    S_IFREG	      | File type constant for a regular file.
//    S_IFDIR	      | File type constant for a directory.
//    S_IFCHR	      | File type constant for a character-oriented device file.
//    S_IFBLK	      | File type constant for a block-oriented device file.
//    S_IFIFO	      | File type constant for a FIFO/pipe.
//    S_IFLNK	      | File type constant for a symbolic link.
//    S_IFSOCK	    | File type constant for a socket.
// 
//  Mode Constants
//    S_IRWXU	      | File mode indicating readable, writable, and executable by owner.
//    S_IRUSR	      | File mode indicating readable by owner.
//    S_IWUSR	      | File mode indicating writable by owner.
//    S_IXUSR	      | File mode indicating executable by owner.
//    S_IRWXG	      | File mode indicating readable, writable, and executable by group.
//    S_IRGRP	      | File mode indicating readable by group.
//    S_IWGRP	      | File mode indicating writable by group.
//    S_IXGRP	      | File mode indicating executable by group.
//    S_IRWXO	      | File mode indicating readable, writable, and executable by others.
//    S_IROTH	      | File mode indicating readable by others.
//    S_IWOTH	      | File mode indicating writable by others.
//    S_IXOTH	      | File mode indicating executable by others.
//
// 常见Error:
//    EACCES（Permission denied）          | An attempt was made to access a file in a way forbidden by its file access permissions.
//    EEXIST（File exists）                | An existing file was the target of an operation that required that the target not exist.
//    EISDIR（Is a directory）             | An operation expected a file, but the given pathname was a directory.
//    ENOENT（No such file or directory）   | Commonly raised by fs operations to indicate that a component of the specified pathname does not exist — no entity (file or directory) could be found by the given path.
//    ENOTDIR（Not a directory）           | A component of the given pathname existed, but was not a directory as expected. Commonly raised by fs.readdir.
//    ENOTEMPTY（Directory not empty）     | A directory with entries was the target of an operation that requires an empty directory — usually fs.unlink.   