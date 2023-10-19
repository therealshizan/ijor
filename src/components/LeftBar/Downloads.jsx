import { ListItem, List, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import downloadMenuItems from '../../data/downloadMenuItems.json'

const Downloads = () => {
  // const fetchData = useFetch("/data/downloadMenuItems.json");

  // const [downloadMenus, setDownloadMenus] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await fetchData;
  //       setDownloadMenus(response);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   })();
  // }, []);
  return (
    <Stack className="border rounded-lg" p={1}>
      <Stack>
        <Typography variant={"body1"}>Downloads</Typography>
      </Stack>

      <Stack mt={1}>
        <List disablePadding className="grid gap-y-1">
          {downloadMenuItems.map((menu) => (
            <ListItem disablePadding key={menu.label}>
              <Typography variant={"body2"}>
                <Link to={menu.link}>{menu.label}</Link>
              </Typography>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Stack>
  );
};

export default Downloads;
