import bcc from 'bem-react-component-creator';

const { block, element } = bcc('crud-table');

export const Table = block('table');

Table.Row = element('tr', 'row');
Table.HeaderCell = element('th', 'header-cell');
Table.Header = element('thead', 'header');
Table.Body = element('tbody', 'body');
Table.Cell = element('td', 'cell');
Table.CellLabel = element('div', 'cell-label');
Table.Caption = element('div', 'caption');

export default { Table };
