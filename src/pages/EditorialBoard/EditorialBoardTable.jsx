import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React from "react";

import editorialBoard from "../../data/editorialBoard.json";

const EditorialBoardTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableBody
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            border: '1px solid #161616'
          }}
        >
          {editorialBoard.map((data) => (
            <TableRow
            key={data.id}
                sx={{border: '1px solid #161616', display: 'grid', alignItems: 'center'}}
            >
              <TableCell
                sx={{border: 0, padding: 1}}
              >
                {data.name}{data.designation && `, ${data.designation}`}
                <br />
                {data.university}{data.location && `, ${data.location}`}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EditorialBoardTable;
