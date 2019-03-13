# Size Limit [![Cult Of Martians][wip-badge]][cult]

<img src="https://i.imgur.com/N7cuEWS.png" align="right"
     title="js crud table" width="120" height="178">

Size Limit is a tool to prevent JavaScript libraries bloat.
With it, you know exactly for how many kilobytes your JS library
increases the user bundle.

You can add Size Limit to your continuous integration service
(such as Travis CI) and set the limit. If you accidentally
add a massive dependency, Size Limit will throw an error.

<p align="center">
  <img src="./img/example.png" alt="Size Limit example"
       width="654" height="450">
</p>



[Size Limit: Make the Web lighter]: https://evilmartians.com/chronicles/size-limit-make-the-web-lighter
[wip-badge]:                         https://img.shields.io/badge/WIP-work%20in%20progress-yellow.svg
[cult]:                             http://cultofmartians.com/tasks/size-limit-config.html


# Create, Read, Update and Delete

CRUD vanilla JS project

### Task

Web app, which displays array's data (objects) as HTML table. Buttons in the table head allows to sort the rows.

Table content: ID number of intelligence agents, their names and status.

| Agent's ID | Agents Name     | Agent's status |
| ---------- | --------------- | -------------- |
| 999        | Eric Cartman    | inactive       |
| 155        | Kyle Broflovski | active         |

### Features

1. Table head with sort buttons
   * Sort the items of an array, alphabetic and numeric, ascending or descending. Highlight active sorting button/method
2. All CRUD features
3. In the first row checkbox, which highlight the whole row
4. Display number of elements in the table's footer
5. Dropdown menu in footer to limit amount of displayed rows

### Subtask

- [Lint/Prettier] - Prevent stylistic errors
- [JSDoc] - Document the code
- [Git] - Create repository on github and push/upload it
- [DRY] - Don't repeat yourself and provide clean code

### Milestones

- Project preparation (set up project, lint/prettier, git repo)
- To ease testing: Data from input fields saved to array as object, displayed in table
- HTML Table build based on data in array
- Sort through array (A-Z, Z-A, 1-9, 9-1)
- Style

Others:

- Safe array (table content) to DB?

### Deadline

- 22nd march
- 19nd feedback about progress

CRUD table design reference(https://material.io/design/components/data-tables.html#behavior)
