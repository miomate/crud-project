# Create, Read, Update and Delete ![wip-badge]

<img src="https://i.imgur.com/8LX29yz.png" align="right"
     title="js crud table" width="163" height="178">

CRUD vanilla JS project, HTML table with buttons in table head, which allow to sort the content of the column.


[wip-badge]:                        https://img.shields.io/badge/WIP-work%20in%20progress-yellow.svg

### Project completed
Missing: Turning pages, items aren't hidden when user turns the page.

![](version_preview.gif)

### Task

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
- Calculate how much pages needed, if usear want see two per page
- Show current and max page, with working next/previous page
- Split table to multiple pages

Others:

- Safe array (table content) to DB?

### Deadline

- 22nd march
- 19nd feedback about progress

CRUD table design reference(https://material.io/design/components/data-tables.html#behavior)
