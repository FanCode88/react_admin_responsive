import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import './dataTable.scss';
import { Link } from 'react-router-dom';

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

export const DataTable = (props: Props) => {
  const handleDelete = (id: number) => {
    //delete the item
    console.log('delete', id);
  };

  const actionColumn: GridColDef = {
    field: 'action',
    headerName: 'Action',
    width: 100,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete">
            <img
              src="/delete.svg"
              alt=""
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: '10',
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFillter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
