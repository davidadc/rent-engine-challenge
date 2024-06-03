import { FC, memo } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useRentEngineData } from '../hooks/useRentEngineData.ts';

interface Props {}

const CustomTable: FC<Props> = ({}) => {
  const { data, isFetching } = useRentEngineData();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isFetching ? (
            <TableRow>
              <TableCell>Loading...</TableCell>
            </TableRow>
          ) : (
            data.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
              </TableRow>
            ))
          )}

          {/*{rows.map((row) => (*/}
          {/*  <TableRow*/}
          {/*    key={row.name}*/}
          {/*    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}*/}
          {/*  >*/}
          {/*    <TableCell component="th" scope="row">*/}
          {/*      {row.name}*/}
          {/*    </TableCell>*/}
          {/*    <TableCell align="right">{row.calories}</TableCell>*/}
          {/*    <TableCell align="right">{row.fat}</TableCell>*/}
          {/*    <TableCell align="right">{row.carbs}</TableCell>*/}
          {/*    <TableCell align="right">{row.protein}</TableCell>*/}
          {/*  </TableRow>*/}
          {/*))}*/}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default memo(CustomTable);
